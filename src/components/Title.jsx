import { color } from "@mui/system";
import React from "react";

const Title = ({ text, size = "28px", color = "#3C3486", }) => (
  <div
    style={{
      fontSize: size,
      color: color,
      fontWeight: "bold",
    }}
  >
    {text}
  </div>
);

export default Title;
