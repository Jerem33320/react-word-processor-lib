import React from 'react';
import './Button.css';
export interface ButtonProps {
    handleClick: () => void;
    label: string;
}

const Button = (props: Partial<ButtonProps>) => {
    const handleClickBtn: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    //@ts-ignore
    props.handleClick?.(e); // works
  };
  const selectBtnStyle = () => {
    switch (props.label) {
        case 'abc':
          return "scratched";
        case 'B':
            return "bold";
        case 'U':
            return "underline";
        case 'I':
            return "italic";
        default:
          "";
      }
  }

    return <button className={selectBtnStyle()} onClick={(e) => handleClickBtn(e)}>{props.label}</button>
}

export default Button;