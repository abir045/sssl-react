// import { cn } from "@/lib/utils";
import React from "react";
import { cn } from "../../utils/utils";

const PlusIcon = ({ fill = "#0A1A3A", height = 24, width = 24, className }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("plus-icon-svg", className)}
    >
      <g clipPath="url(#clip0_1553_307896)">
        <path d="M19.002 12.9992H5.00195V10.9992H19.002V12.9992Z" fill={fill} />
        <path
          d="M11.002 18.9992L11.002 4.99921L13.002 4.99921L13.002 18.9992L11.002 18.9992Z"
          fill={fill}
          className="minus-path"
        />
      </g>
      <defs>
        <clipPath id="clip0_1553_307896">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
