import React from "react";

function Details(props) {
  let value;
  if (props.number) {
    value = props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    value = props.value.toString().trim() !== "" ? props.value : "-";
  }

  return (
    <p className="details">
      <span style={{ fontWeight: "600" }}>{`${props.title} : `}</span>
      <span>{value}</span>
    </p>
  );
}
export default Details;
