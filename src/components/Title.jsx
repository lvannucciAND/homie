import React from "react";

const Title = ({ text, size = "28px" }) => (
  <div
    style={{
      fontSize: size,
      color: "#3C3486",
      fontWeight: "bold",
    }}
  >
    {text}
  </div>
);

export default Title;
