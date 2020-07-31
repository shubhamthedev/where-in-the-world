import React from "react";
function Error() {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      No matching results were found
    </div>
  );
}

export default Error;
