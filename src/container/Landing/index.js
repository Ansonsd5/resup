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


const Landing = () => {
  const dispatch = useDispatch();

  const formData = useSelector((state) => state.form.formData);
  const isValidForm =false;

  const onChangeEvent = (e, content) => {
    
    
    let inputValue = "";
    if(content.id === 'fullname' ){
     
      if(textConstants.REGEX.alphabetsOnly.test(e.target.value)){
        content.value = inputValue;
      }else{
        e.preventDefault();
      }
    
     }

    inputValue = e.target.value;
    // content.value = inputValue;

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

  const generateTemplate = () => {
    console.log("just before api call");
    
    // if (formData.length) {
    //   let myData = Object.keys(formData).map((field) => formData[field]);
    //   console.log("myData", myData);
    // }
   const data = setTimeout(()=> {
      const apiData = commonFunc.makeApiCall(" prioritizing efficiency in API call time Act as expert and catchy email writers, Assume I am requesting for a refferal and request as me, make use of the personal information provided, articulate a best refferal message. Give me 4 different refferal messages which should have 130 to 170 word count,  in object form which differ from each other and the object structure sholud be as follows   {sub: subject one, reffralmsg: reffral msg1} give it in a way that i have a  where i can map over it easily, Please note give the object as per exapmle json, fill in the details provided where ever neccesary ");
      console.log(apiData);
    },4000);

    console.log(data);
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

       
        <Button onClick={generateTemplate} type={SubmitEvent} >
          Generate
        </Button>
      </article>
      <TemplateContainer />
      <article></article>
    </div>
  );
};

export default Landing;
