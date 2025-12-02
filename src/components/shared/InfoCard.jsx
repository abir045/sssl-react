import React from "react";
import BodyText from "../typography/BodyText";
import Heading from "../typography/Heading";
import { cn } from "../../utils/utils";

const InfoCardRoot = ({ children, className }) => {
  return (
    <div
      className={cn(
        "border border-border rounded-3xl overflow-hidden bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};

const InfoCardImage = ({ className, ...props }) => {
  return (
    <div className="image-content">
      <img
        className={cn("w-full h-full object-cover max-h-[270px]", className)}
        {...props}
      />
    </div>
  );
};

const InfoCardContent = ({ children, className }) => {
  return (
    <div className={cn("text-content p-5 lg:p-[30px] space-y-2.5", className)}>
      {children}
    </div>
  );
};

const InfoCardHeading = ({ children, className }) => {
  return (
    <BodyText
      tag="h4"
      variant="lead-0"
      className={cn("text-app-dark", className)}
    >
      {children}
    </BodyText>
  );
};

const InfoCardText = ({ children, className }) => {
  return (
    <BodyText
      tag="p"
      variant="body-1"
      className={cn("text-app-dark opacity-80", className)}
    >
      {children}
    </BodyText>
  );
};

export const InfoCard = {
  Root: InfoCardRoot,
  Image: InfoCardImage,
  Content: InfoCardContent,
  Heading: InfoCardHeading,
  Text: InfoCardText,
};
