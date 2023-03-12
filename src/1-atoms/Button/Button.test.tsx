import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    const handleClick = () => console.log("test")
    render(<Button handleClick={handleClick} label="Hello world!" />);
  });
});