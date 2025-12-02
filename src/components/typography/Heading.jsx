// import { cn } from "@/lib/utils";
import React from "react";
import { cn } from "../../utils/utils";
export default function Heading({
  tag = "h1",
  variant,
  children = "",
  className = "",
  overrideStyles = false,
  ...props
}) {
  if (!variant) {
    variant = tag;
  }

  let defaultClasses = "font-inter font-medium";

  switch (variant) {
    case "h1":
      defaultClasses +=
        " text-[36px] lg:text-[60px]  xl:text-[100px] leading-[36px] lg:leading-[60px] xl:leading-[100px] tracking-[0px] font-medium";
      break;
    case "h2":
      defaultClasses +=
        " text-[30px] lg:text-[45px] xl:text-[64px] leading-[30px] lg:leading-[50px] xl:leading-[68px] tracking-[0px]";
      break;
    case "h3":
      defaultClasses +=
        " text-[24px] lg:text-[30px] xl:text-[48px] leading-[24px] xl:leading-[54px] tracking-[0px]";
      break;
    case "h4":
      defaultClasses +=
        " text-[20px] lg:text-[24px] xl:text-[38px] leading-[30px] xl:leading-[44px] tracking-[0px]";
      break;
    case "h5":
      defaultClasses +=
        " text-[18px] lg:text-[24px] xl:text-[32px] leading-[37px] tracking-[0px]";
      break;
    default:
      defaultClasses =
        " text-[36px] lg:text-[60px] font-medium xl:text-[100px] leading-[100px] tracking-[0px]";
      break;
  }

  const classes = cn(
    overrideStyles ? className : defaultClasses,
    !overrideStyles && className
  );

  return React.createElement(tag, { className: classes, ...props }, children);
}
