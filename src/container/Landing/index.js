import React, { useEffect } from "react";
import Button from "../../components/Button";

import InputWrap from "../../components/InputWrap";
import Textbox from "../../components/TextBox";
import MultiSelector from "../../components/MultiSearchSelection";

import { useDispatch, useSelector } from "react-redux";

import { updateFormData } from "../../utils/formSlice";
import { formDataConfig } from "../../utils/config";
import "./index.scss";
import TemplateContainer from "../../components/TemplateContainer";

const Landing = () => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.form.formData);
  console.log("formData", formData);

  const onChangeEvent = (e, content) => {
    let inputValue = "";
    inputValue = e.target.value;
    content.value = inputValue;

    dispatch(updateFormData({ ...content, fieldName: content.id }));
  };

  const renderFormFields = (content) => {
    let props = { ...content };
    let onChange = (e) => onChangeEvent(e, content);
    // let onDropdownFilterChange = (e) => handleDropdownFilter(e, content);
    // let onDropdownClick = () => onDropdownClickHandle(content);

    props = {
      ...props,
      // hadleDropDown: onChange,
      // handleInputChange: onDropdownFilterChange,
      onChange: onChange,
      // dropdownLoadData: onDropdownClick,
    };

    return <Textbox {...props} />;
  };

  const handleTextbox = () => {
    console.log("kk");
  };
  return (
    <div className="sm:grid sm:mx-4 sm:grid-cols-2 grid-row">
      <article className="input-conatiner ">
        <span className="font-bold block">Enter Details</span>
        <span>Enter your details to generate template</span>
        {/* <MultiSelector /> */}

        {Object.keys(formDataConfig).map((ele) => {
          const content = formDataConfig[ele];
          return content.visible && renderFormFields(content);
        })}

        {/* {Object.keys(formData)?.map((key, index)=> <>
          <Textbox id={formData[key].id} label={formData[key].label} placeHolder={formData[key].palceHolder}/>
          </>)} */}
        <Button>Generate</Button>
      </article>
      <TemplateContainer />
      <article></article>
    </div>
  );
};

export default Landing;
