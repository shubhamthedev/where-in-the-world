import React from "react";

function Input() {
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
      />
    </div>
  );
}
export default Input;
