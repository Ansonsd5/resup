import React, { useEffect } from "react";
import Button from "../../components/Button";
import Textbox from "../../components/TextBox";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../utils/formSlice";
import { formDataConfig } from "../../utils/config";
import TemplateContainer from "../../components/TemplateContainer";
import commonFunc from "../../action";
import { addTemplate } from "../../utils/templateSlice";
import allTextConstants from "../../utils/textConstants";
import Spinner from "../../components/Spinner";
import { togglePopup } from "../../utils/appSlice";
import "./index.scss";
const Landing = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const templateData = useSelector((state) => state.template);
const popup = useSelector((state)=> state.app);

  const onChangeEvent = (e, content) => {
    let inputValue = "";
    inputValue = e.target.value;
    if (content.id === "fullname") {
      if (allTextConstants.REGEX.alphabetsOnly.test(e.target.value)) {
        content.value = inputValue;
      } else {
        e.preventDefault();
      }
    }

    if (content.id === "mobilenumber" || content.id === "workexperience") {
      if (inputValue.length <= content.maxLength) {
        inputValue = inputValue.slice(0, content.maxLength);
        inputValue = inputValue.replace(
          allTextConstants.REGEX.numbersWithoute,
          ""
        );
      }
    }
    content.value = inputValue;

    dispatch(updateFormData({ ...content, fieldName: content.id }));
  };

  useEffect(()=>{
    console.log("after apidatd comes");
  
        },[templateData])

  const renderFormFields = (content) => {
    let props = { ...content };
    let onChange = (e) => onChangeEvent(e, content);

    props = {
      ...props,
      onChange: onChange,
      key: content.id,
    };

    return <Textbox {...props} />;
  };

  const apiCall = async (searchQuery) => {

    
    try {
      const getData = await commonFunc.makeApiCall(searchQuery);
      const dataToFilter = getData.choices[0].message.content;
      const cleanData = commonFunc.filterGptData(dataToFilter);
      console.log("cleanData", cleanData);

      if (!cleanData) return;
      dispatch(addTemplate(cleanData));
      dispatch(togglePopup());
      console.log("dispatch sucess");
    } catch (error) {
      console.error("Error occurred:", error);
    }
    
    };

  const validForm = (formData) => {

  

    if (
      !Object.values(formData).includes("") &&
      Object.values(formData).length === allTextConstants.NO_FIELDS
    ) {

      return false;
    } else {
      return true;
    }
  };



  const generateTemplate = () => {

    dispatch(togglePopup());
    let personalDeatils = Object.keys(formData).map(
      (key) => ` ${key} is ${formData[key]} `
    );
    let gptFeedPart2 = personalDeatils.toString();
    const searchQuery = `${allTextConstants.GPT_FEED.gptPrompt} ${gptFeedPart2}`;
    apiCall(searchQuery);
  };


  return (
    <div className="sm:grid sm:mx-4 sm:grid-cols-2 grid-row px-4" >
  {popup.popupOpen && <div style={{position:'absolute'}}><Spinner /></div>}
      <article className="input-conatiner ">
        <span className="font-bold block">Enter Details</span>
        <span>Enter your details to generate template</span>

        {Object.keys(formDataConfig).map((ele) => {
          const content = formDataConfig[ele];
          return content.visible && renderFormFields(content);
        })}

        <Button
          onClick={generateTemplate}
          type={SubmitEvent}
          className={"app-button mt-3"}
          disabled={formData && validForm(formData)}
        >
          Generate
        </Button>
        
      </article>
      <TemplateContainer templateData={templateData} />
      <article></article>
    </div>
  );
};

export default Landing;
