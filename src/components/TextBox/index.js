import React from "react";
import InputWrap from "../InputWrap";
import "./index.scss";

const Textbox = ({
  type,
  value,
  name,
  onChange,
  placeholder,
  maxLength,
  disabled,
  id,
  isMandatory,
  label,
}) => {
  return (
    <div className="textbox-wrapper my-3">
      <InputWrap label={label} isMandatory={isMandatory}>
      
        <input 
        className="input-value"
          type={type}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
        />
      </InputWrap>
    </div>
  );
};

export default Textbox;
