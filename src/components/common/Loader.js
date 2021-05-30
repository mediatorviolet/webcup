import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({
  size = 16,
  color = "#104a96",
  withContainer = false,
  containerStyle = {},
  text = false,
  className = "",
}) => (
  <div
    className={
      className +
      "  d-flex align-items-center justify-content-center flex-column " +
      (withContainer ? "w-100 " : "")
    }
    style={containerStyle}
  >
    <ClipLoader color={color} size={size} />
    {text && <b className="mb-3">{text}</b>}
  </div>
);

export default Loader;
