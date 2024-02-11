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
  isyears
}) => {
  return (
    <div className="textbox-wrapper my-3">
      {console.log("years", isyears)}
      <InputWrap label={label} isMandatory={isMandatory} isyears={isyears}>
      
        <input 
          className="input-value"
          type={type}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
        />
        {/* {isyears && <span>years</span>} */}
      </InputWrap>
    </div>
  );
};

export default Textbox;
