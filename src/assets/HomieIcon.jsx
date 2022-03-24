import React from "react";

const HomieIcon = ({ fill, width = "24", height = "24" }) => {
  return (
    <span style={{ marginRight: "0.3125rem" }}>
      <svg
        version="1.1"
        width={width}
        height={height}
        x="0"
        y="0"
        viewBox="0 0 512 512"
      >
        <polygon
          points="148.142,173.383 114.466,200.899 114.466,254.575 133.31,254.575 133.31,230.691 163.31,230.691 163.31,254.575     182.156,254.575 182.156,201.196   "
          fill="#fff"
          data-original="#000000"
        ></polygon>
        <path
          d="M0,95.246v269.47h25.782c6.833-29.764,33.517-52.037,65.325-52.037s58.492,22.273,65.325,52.037H296.62V95.246H0z     M227.034,237.893l-14.877-12.165v58.848H84.466v-59.163l-14.884,12.161L50.6,214.344l97.549-79.707l97.875,80.031    L227.034,237.893z"
          fill={fill}
          data-original="#000000"
        ></path>
        <path
          d="M419.31,342.679c-20.422,0-37.038,16.615-37.038,37.037c0,20.423,16.615,37.038,37.038,37.038    c20.423,0,37.038-16.615,37.038-37.038C456.348,359.294,439.732,342.679,419.31,342.679z"
          fill="#fff"
          data-original="#000000"
        ></path>
        <path
          d="M91.107,342.679c-20.422,0-37.038,16.615-37.038,37.037c0,20.423,16.615,37.038,37.038,37.038    c20.423,0,37.038-16.615,37.038-37.038C128.145,359.294,111.529,342.679,91.107,342.679z"
          fill="#fff"
          data-original="#000000"
        ></path>
        <path
          d="M442.92,177.008h-116.3v187.708h27.365c6.833-29.764,33.517-52.037,65.325-52.037c31.808,0,58.492,22.273,65.325,52.037    H512v-115.16L442.92,177.008z"
          fill={fill}
          data-original="#000000"
        ></path>
      </svg>
    </span>
  );
};

export default HomieIcon;
