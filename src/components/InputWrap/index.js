import React from "react";
import "./index.scss";

const InputWrap = (props) => {
  const { children, label } = props;
  return (
    <div className="input-wrapper">
      <fieldset className="fieldset-container">
        <legend className="legend-lable">{label}</legend>
        {children}
      </fieldset>
    </div>
  );
};

export default InputWrap;
