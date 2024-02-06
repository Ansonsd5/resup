import React, { useEffect } from "react";
import Button from "../../components/Button";
import Textbox from "../../components/TextBox";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../utils/formSlice";
import { formDataConfig } from "../../utils/config";
import TemplateContainer from "../../components/TemplateContainer";
import textConstants from "../../utils/textConstants";
import commonFunc from "../../action";
import { addTemplate } from "../../utils/templateSlice";
import "./index.scss";
import CopyContainer from "../../components/CopyContainer";

const Landing = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const templateData = useSelector((state) => state.template);


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

  const renderFormFields = (content) => {
    let props = { ...content };
    let onChange = (e) => onChangeEvent(e, content);
   
    props = {
      ...props,
      onChange: onChange,
      key : content.id,

    };

    return <Textbox {...props} />;
  };

  const apiCall = async (searchQuery) => {
    try {
        const getData = await commonFunc.makeApiCall(searchQuery);
        const dataToFilter = getData.choices[0].message.content;
        const cleanData = commonFunc.filterGptData(dataToFilter);
        console.log('cleanData',cleanData);

        if(!cleanData) return;
        dispatch(addTemplate(cleanData));
        console.log("dispatch sucess");
    } catch (error) {
        console.error("Error occurred:", error);
    }
};



  const generateTemplate = () => {
    let personalDeatils = Object.keys(formData).map(
      (key) => ` ${key} is ${formData[key]} `
    );
    let gptFeedPart2 = personalDeatils.toString();
    const searchQuery = `${textConstants.GPT_FEED.gptPrompt} ${gptFeedPart2}`;
    apiCall(searchQuery);
  };


  return (
    <div className="sm:grid sm:mx-4 sm:grid-cols-2 grid-row px-4">
      <article className="input-conatiner ">
        <span className="font-bold block">Enter Details</span>
        <span>Enter your details to generate template</span>

        {Object.keys(formDataConfig).map((ele) => {
          const content = formDataConfig[ele];
          return content.visible && renderFormFields(content);
        })}

        <Button onClick={generateTemplate} type={SubmitEvent} className={'app-button mt-3'}>
          Generate
        </Button>
      </article>
      <TemplateContainer templateData={templateData}/>
      <article></article>
    </div>
  );
};

export default Landing;
