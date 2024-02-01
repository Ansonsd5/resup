import React, { useEffect } from "react";
import Button from "../../components/Button";
import Textbox from "../../components/TextBox";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../utils/formSlice";
import { formDataConfig } from "../../utils/config";
import TemplateContainer from "../../components/TemplateContainer";
import textConstants from "../../utils/textConstants";
import commonFunc from "../../action";
import "./index.scss";
import { addTemplate } from "../../utils/templateSlice";

const Landing = () => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.form.formData);
  const templateData = useSelector((state) => state.template.templateData);
  const isValidForm = false;

  const onChangeEvent = (e, content) => {
    let inputValue = "";

    if (content.id === "fullname") {
      if (textConstants.REGEX.alphabetsOnly.test(e.target.value)) {
        content.value = inputValue;
      } else {
        e.preventDefault();
      }
    }

    inputValue = e.target.value;
    content.value = inputValue;

    dispatch(updateFormData({ ...content, fieldName: content.id }));
  };

  console.log("templateData", templateData);

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

  const generateTemplate = () => {
    let personalDeatils = Object.keys(formData).map(
      (key) => ` ${key} is ${formData[key]} `
    );
    let gptFeedPart2 = personalDeatils.toString();
    console.log(gptFeedPart2);

    setTimeout(async () => {
      const apiData = await commonFunc.makeApiCall(
        `${textConstants.GPT_FEED.gptPrompt} ${gptFeedPart2}`
      );
      if(apiData){
       
          let wholeData = (apiData?.choices[0]?.message);
          const requiredData = JSON.stringify(wholeData);

          console.log(requiredData);
          
          // let objFdesiredObjectsormat =[];

          // requiredData.map(referral => {
          //   sub1: referral.sub,
          //   body: referral.reffralmsg
          //   desiredObjects.push(desiredObject);
          // })
      

    }}, 1000);
  };
  return (
    <div className="sm:grid sm:mx-4 sm:grid-cols-2 grid-row">
      <article className="input-conatiner ">
        <span className="font-bold block">Enter Details</span>
        <span>Enter your details to generate template</span>

        {Object.keys(formDataConfig).map((ele) => {
          const content = formDataConfig[ele];
          return content.visible && renderFormFields(content);
        })}

        <Button onClick={generateTemplate} type={SubmitEvent}>
          Generate
        </Button>
      </article>
      <TemplateContainer />
      <article></article>
    </div>
  );
};

export default Landing;
