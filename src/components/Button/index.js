
import React from 'react';
import classNames from 'classnames';
import './index.scss';

const Button = ({
  children,
  onClick,
  type,
  variant,
  disabled,
  className,
  lable,

}) => {


  const buttonClasses = classNames(
    {
      'button-primary': variant === 'primary',
      'button-secondary': variant === 'secondary',
      'button-disabled': disabled,
    },
    className
  );

  return (
    <button
      className={buttonClasses}
      type={type}
      onClick={onClick}
      disabled={disabled}
      lable ={lable}
    >
      {children}
    </button>
  );
};


Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  variant: 'primary',
  disabled: false,
  className: 'app-button',
};

export default Button;
