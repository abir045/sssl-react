// "use client"
// import BodyText from '@/components/typography/BodyText'
// import { cn } from '@/lib/utils'
import React from "react";
import BodyText from "../../../typography/BodyText";
import { cn } from "../../../../utils/utils";

const BannerActionBtn = ({ onAction, icon, label, className }) => {
  return (
    <button
      onClick={onAction}
      className={cn("flex justify-center items-center gap-2.5", className)}
    >
      {icon && <span>{icon}</span>}
      {label && (
        <BodyText tag="span" variant="body-2" className="text-app-dark/80">
          {label}
        </BodyText>
      )}
    </button>
  );
};

export default BannerActionBtn;
