import React from "react";
import Carousel from "../Carousel";
import { arrow } from "../../images";
import CopyContainer from "../CopyContainer";
import { useSelector } from "react-redux";
import CopyBody from "../CopyBody";


const EmailTemplate = () => {
  const templateData = useSelector((store) => store.template);
  return (
    <div>
      {
        templateData?.tamplates?.map((subandbody)=>{
          Object.keys(subandbody).map(ele =>{
            if(ele === 'sub'){
              debugger
            return  <CopyContainer data={subandbody[ele]} />
            }else if( ele === 'referralmsg'){
             return <div>{ele}</div>
            }
          })
        })

      }
    
        
      <Carousel 
      data={["s", "s", "s"]} 
      leftArrow={arrow} 
      rightArrow={arrow} />
      
    </div>
  );
};

export default EmailTemplate;
