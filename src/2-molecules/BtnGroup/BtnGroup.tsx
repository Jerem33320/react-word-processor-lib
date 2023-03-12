import './BtnGroup.css';
import React from "react";
import Button from "../../1-atoms/Button/Button";

const BtnGroup = (children: { buttons: { handleClick?: (() => void) | undefined; label?: string | undefined }[], orientation: 'horizontal'}) => {
    return <div className="btnGroup">{children.buttons.map(btn => <Button label={btn.label} handleClick={btn.handleClick}/>)}</div>
}

export default BtnGroup; 