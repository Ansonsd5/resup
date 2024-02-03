import React from "react";
import "./index.scss";

const InputWrap = (props) => {
  const { children, label ,isMandatory} = props;
  return (
    <div className="input-wrapper">
      <fieldset className="fieldset-container">
        <legend className="legend-lable">{label} {isMandatory && <span className="text-red-500">*</span>}</legend>
        {children}
      </fieldset>
    </div>
  );
};

export default InputWrap;
