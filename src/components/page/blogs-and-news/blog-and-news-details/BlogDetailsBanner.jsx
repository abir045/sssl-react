// "use client"

// import Heading from '@/components/typography/Heading'
// import Image from 'next/image'
import React, { useState } from "react";
import BannerActionBtn from "./BannerActionBtn";
// import CalendarIcon from "@/components/icons/CalendarIcon";
// import { formatDate } from "@/utils/formatDate";
// import CopyIcon from "@/components/icons/CopyIcon";
// import PrintIcon from "@/components/icons/PrintIcon";
import Heading from "../../../typography/Heading";
import CalendarIcon from "../../../icons/CalendarIcon";
import { formatDate } from "../../../../utils/formatDate";
import CopyIcon from "../../../icons/CopyIcon";
import PrintIcon from "../../../icons/PrintIcon";

const BlogDetailsBanner = ({ data, onPrint }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      // Update the state to reflect successful copy
      setIsCopied(true);

      // Reset the copied state after a few seconds (optional)
      setTimeout(() => setIsCopied(false), 3000);
    } else {
      console.error("Not in a browser environment");
    }
  };

  const handlePrintPage = () => {
    onPrint();
  };

  return (
    <div className="pb-10 print:pb-0 border-b border-border space-y-4 md:space-y-10 print:border-none print:mb-0 mb-[60px]">
      {/* <Image alt='Banner Details' src={data.image} width={1110} height={513} className='rounded-2xl overflow-hidden object-cover w-full h-[500px]' /> */}
      <img
        alt="Banner Details"
        src={data.image}
        className="rounded-2xl overflow-hidden object-cover w-full h-[500px]"
      />
      <Heading tag="h3" variant="h3" className="text-app-dark">
        {data.title}
      </Heading>
      <div className="banner-footer gap-4 flex md:justify-between md:items-center print:hidden">
        <BannerActionBtn
          icon={<CalendarIcon />}
          label={`Published: ${formatDate(data.date)}`}
          className="cursor-pointer justify-start lg:justify-center"
        />
        <div className="banner-action flex gap-2.5">
          <BannerActionBtn
            icon={<CopyIcon />}
            label={isCopied ? "Link copied!" : "Copy link"}
            onAction={handleCopyLink}
            className="cursor-pointer"
          />
          <BannerActionBtn
            icon={<PrintIcon />}
            label="Print this file"
            onAction={handlePrintPage}
            className="cursor-pointer hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsBanner;
