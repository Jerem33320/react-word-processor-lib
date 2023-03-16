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
          return "buttonEdit scratched";
        case 'B':
            return "buttonEdit bold";
        case 'U':
            return "buttonEdit underline";
        case 'I':
            return "buttonEdit italic";
        default:
          "";
      }
  }

    return <button className={selectBtnStyle()} onClick={(e) => handleClickBtn(e)}>{props.label}</button>
}

export default Button;