import React, { useState } from "react";
import "./ColorPalette.css";
export interface ButtonProps {
  handleClick: () => void;
  label: string;
  children: JSX.Element|JSX.Element[];
}

const ColorPalette = (props: Partial<ButtonProps>) => {
  const handleClickBtn: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    //@ts-ignore
    props.handleClick?.(e); // works
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const generateRandomRGB = () => {
    return Math.floor(Math.random() * 256);
  };
  const generateFullRGBColor = () => {
    const r = generateRandomRGB();
    const g = generateRandomRGB();
    const b = generateRandomRGB();
    return `rgb(${r},${g},${b})`;
  };

  const ColorSection = () => {
    return isOpen && (
      <div className="colorPalette">
        <button className="colorBtn btn" onClick={()=> setIsOpen(false)}>X</button>
        <button className="colorBtn red"></button>
        <button className="colorBtn green"></button>
        <button className="colorBtn blue"></button>
        <button className="colorBtn pink"></button>
        <button className="colorBtn yellow"></button>
        <button className="colorBtn black"></button>
        <button className="colorBtn grey"></button>
        <button className="colorBtn brown"></button>
        <button className="colorBtn orange"></button>
        <button className="colorBtn purple"></button>
        <button className="colorBtn white"></button>
        <button className="colorBtn randomBtn btn" style={{ backgroundColor: `${generateFullRGBColor()}` }}>?</button>
      </div>
    );
  };

  return (
    <div className="colorSection">
      <button
        onClick={(e) => {
          setIsOpen(true);
          handleClickBtn(e);
        }}
      >
        {props.label}
      </button>
      <div>{ColorSection()}</div>
    </div>
  );
};

export default ColorPalette;
