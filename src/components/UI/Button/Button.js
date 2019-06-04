import React from 'react';
import './Button.scss';

const Button = (props) =>{
  const cls=  ['btn',
  props.typeBtn];
  const type = props.submitButton || "button";
  console.log(props);
  return  (
        <button
          type={type}
            onClick={props.onClick}
            className={cls.join(' ')}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};
export default Button;