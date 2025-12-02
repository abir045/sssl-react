import React from "react";

const PlayIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60Z"
        fill="white"
      />
      <path
        d="M71.5319 61.2417L53.921 71.7931C52.9645 72.37 51.75 71.6717 51.75 70.5482V49.4454C51.75 48.322 52.9645 47.6388 53.921 48.2005L71.5319 58.7519C72.4884 59.3136 72.4884 60.68 71.5319 61.2417Z"
        fill="#0A1A3A"
      />
    </svg>
  );
};

export default PlayIcon;
