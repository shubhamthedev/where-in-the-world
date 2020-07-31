import React from "react";

function Input(props) {
  return (
    <div className="input">
      <div className="input__icon-area">
        <i className="input__icon fas fa-search"></i>
      </div>
      <input
        type="text"
        className="input__type-area"
        placeholder="Search for the country.."
        aria-label="Search for a country"
        value={props.value}
        onChange={(e) => props.changed(e.target.value)}
      />
    </div>
  );
}
export default Input;
