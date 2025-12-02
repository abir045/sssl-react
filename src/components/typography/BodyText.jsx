// import { cn } from "@/lib/utils";
import React from "react";
import { cn } from "../../utils/utils";

export default function BodyText({
  tag = "p",
  variant = "lead-1",
  children = "",
  className = "",
  ...props
}) {
  let defaultClasses = "font-inter";

  switch (variant) {
    case "lead-0":
      defaultClasses +=
        " text-[20px] leading-[30px] lg:text-[28px] lg:leading-[34px] tracking-[-0.56px]";
      break;
    case "lead-1":
      defaultClasses +=
        " text-[18px] lg:text-[24x]  font-medium leading-[26px] lg:leading-[30px] tracking-[0px]";
      break;
    case "lead-2":
      defaultClasses +=
        " text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px] tracking-[0px] font-medium";
      break;
    case "body-1":
      defaultClasses +=
        " text-[16px] lg:text-[18px] leading-[24px]  lg:leading-[26px] tracking-[-0.72px] font-normal";
      break;

    case "body-2":
      defaultClasses +=
        " text-[14px] lg:text-[16px] leading-[22px]  lg:leading-[24px] tracking-[0px] font-normal";
      break;
    case "button":
      defaultClasses += " text-[16px] leading-[24px] tracking-[0px] font-bold";
      break;
    case "caption":
      defaultClasses += " text-[16px] leading-[24px] tracking-[0px] font-bold";
      break;
    default:
      defaultClasses +=
        " text-[18px] lg:text-[24px]  font-medium leading-[26px] lg:leading-[30px] tracking-[0px]";

      break;
  }

  const classes = cn(defaultClasses, className);

  return React.createElement(tag, { className: classes, ...props }, children);
}
