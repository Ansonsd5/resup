import React, { useRef } from "react";
import { arrow, copyicon } from "../../images";
import "./index.scss";

const CopyContainer = ({ data }) => {
  const contentRef = useRef();

  const handleCopy = () =>{
    console.log("copy");
    const content = contentRef;
    let copiedContent = content.current.innerText;


    navigator.clipboard.writeText(copiedContent)
  }
  return (
    <>
      {data && (
        <div className="copy-container ">
          <div className="label-contaier ">
            <span>{data.label} </span>
             <img src={copyicon} onClick={handleCopy} alt="copy" />
          </div>
            <div className="body-container  text-base grid grid-flow-col content-body bg-red-600"
            ref={contentRef}
            >{data.content}</div>
        </div>
      
      )}
    </>
  );
};

export default CopyContainer;
