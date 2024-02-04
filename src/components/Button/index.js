
import React from 'react';
import classNames from 'classnames';
import './index.scss';

const Button = ({
  children,
  onClick,
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
  variant: 'primary',
  disabled: false,
  className: 'app-button',
};

export default Button;
