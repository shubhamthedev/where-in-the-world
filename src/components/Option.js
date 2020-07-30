import React from "react";

function Option(props) {
  return (
    <div className="select__option" onClick={() => props.clicked(props.text)}>
      {props.text}
    </div>
  );
}
export default Option;
