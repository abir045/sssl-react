"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cn } from "../../utils/utils";

// import { cn } from "@/lib/utils";

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0 pointer-events-none transition-transform duration-600 group-data-[state=open]:rotate-180"
        >
          <g clipPath="url(#clip0_1553_307896)">
            <path
              d="M19.002 12.9992H5.00195V10.9992H19.002V12.9992Z"
              fill="#0A1A3A"
            />
            <path
              d="M11.002 18.9992L11.002 4.99921L13.002 4.99921L13.002 18.9992L11.002 18.9992Z"
              fill="#0A1A3A"
              className="transition-opacity duration-600 group-data-[state=open]:opacity-0"
            />
          </g>
          <defs>
            <clipPath id="clip0_1553_307896">
              <rect width={24} height={24} fill="white" />
            </clipPath>
          </defs>
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
