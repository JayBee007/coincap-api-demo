import React from "react";

export function ExternalLink(): React.ReactElement {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M20 12v7c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V5c0-.552.448-1 1-1h7M20 10L20 4 14 4M20 4L9 15"
      />
    </svg>
  );
}
