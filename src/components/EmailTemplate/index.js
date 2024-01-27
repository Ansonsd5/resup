import React from "react";
import Carousel from "../Carousel";
import { arrow } from "../../images";
import CopyContainer from "../CopyContainer";
const data ={ label : "Subject",content : "This is the email body plz update"};
const dataBody ={ label : "Body",content : "This is the email body This is the email body This is the email body This is the email bodyThis is the email body "}

const EmailTemplate = () => {
  return (
    <div>
        <CopyContainer data={data}/>
        <CopyContainer data={dataBody}/>
        
      <Carousel 
      data={["s", "s", "s"]} 
      leftArrow={arrow} 
      rightArrow={arrow} />
      
    </div>
  );
};

export default EmailTemplate;
