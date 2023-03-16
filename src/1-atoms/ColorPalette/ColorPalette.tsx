import React, { useState } from "react";
import "./ColorPalette.css";

export interface ColorPaletteProps {
  handleChange: () => void;
}

const ColorPalette = () => {
  const [newValue, setNewValue] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewValue(e.target.value);
  };

  return (
    <input type="color" onChange={(e) => handleChange(e)} value={newValue} />
  );
};

export default ColorPalette;
