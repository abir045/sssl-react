import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "../../utils/utils";

// import { cn } from "@/lib/utils";

function Dialog({ ...props }) {
  return (
    <DialogPrimitive.Root data-slot="dialog" data-lenis-prevent {...props} />
  );
}

function DialogTrigger({ ...props }) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({ className, ...props }) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      data-lenis-prevent
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({ className, children, ...props }) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        data-lenis-prevent
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="absolute top-4 right-4 opacity-70 border-none outline-none transition-opacity hover:opacity-100 disabled:pointer-events-none cursor-pointer bg-[#625BCC] p-2 lg:p-4 rounded-full">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 lg:w-6 lg:h-6"
          >
            <path
              d="M1.56574 20.7774C1.73684 20.6063 1.90793 20.4352 2.08137 20.2617C2.54778 19.7953 3.01653 19.3266 3.48293 18.8602C4.17199 18.1711 4.85871 17.4844 5.54777 16.7953C6.38684 15.9563 7.2259 15.1172 8.06731 14.2758C8.9884 13.3547 9.91184 12.4313 10.8329 11.5102C11.7634 10.5797 12.6939 9.64924 13.6267 8.71643C14.4915 7.85159 15.3564 6.98674 16.2236 6.11955C16.9548 5.3883 17.6861 4.65705 18.4173 3.9258C18.9446 3.39846 19.472 2.87112 19.9993 2.34377C20.2478 2.09534 20.4962 1.84455 20.747 1.59612C20.7587 1.58674 20.7681 1.57502 20.7775 1.56565C20.9907 1.35237 21.3048 1.22346 21.6071 1.22346C21.8954 1.22346 22.2376 1.35002 22.4368 1.56565C22.6407 1.78831 22.7931 2.08127 22.779 2.39534C22.765 2.70706 22.6595 3.00002 22.4368 3.22502C22.2657 3.39612 22.0946 3.56721 21.9212 3.74065C21.4548 4.20705 20.9861 4.67581 20.5196 5.14221C19.8306 5.83127 19.1439 6.51799 18.4548 7.20706C17.6157 8.04612 16.7767 8.88518 15.9353 9.72659C15.0142 10.6477 14.0907 11.5711 13.1697 12.4922C12.2392 13.4227 11.3087 14.3531 10.3759 15.286C9.51106 16.1508 8.64621 17.0156 7.77902 17.8828C7.04777 18.6141 6.31652 19.3453 5.58528 20.0766C5.05793 20.6039 4.53059 21.1313 4.00324 21.6586C3.75481 21.9071 3.50637 22.1578 3.25559 22.4063C3.24387 22.4156 3.23449 22.4274 3.22512 22.4367C3.01184 22.65 2.69777 22.7789 2.39543 22.7789C2.10715 22.7789 1.76496 22.6524 1.56574 22.4367C1.36184 22.2141 1.20949 21.9211 1.22356 21.6071C1.23528 21.2953 1.34074 21.0024 1.56574 20.7774Z"
              fill="white"
            />
            <path
              d="M20.7766 22.4341C20.6055 22.263 20.4344 22.0919 20.2609 21.9184C19.7945 21.452 19.3258 20.9833 18.8594 20.5169C18.1703 19.8278 17.4836 19.1411 16.7945 18.452C15.9555 17.613 15.1164 16.7739 14.275 15.9325C13.3539 15.0114 12.4305 14.088 11.5094 13.1669C10.5789 12.2364 9.64844 11.3059 8.71562 10.3731C7.85078 9.50829 6.98594 8.64345 6.11875 7.77626C5.3875 7.04501 4.65625 6.31376 3.925 5.58251C3.39766 5.05517 2.87031 4.52782 2.34297 4.00048C2.09453 3.75204 1.84375 3.5036 1.59531 3.25282C1.58594 3.2411 1.57422 3.23173 1.56484 3.22235C1.35156 3.00907 1.22266 2.69501 1.22266 2.39267C1.22266 2.10439 1.34922 1.7622 1.56484 1.56298C1.7875 1.35907 2.08047 1.20673 2.39453 1.22079C2.70625 1.23485 2.99922 1.34032 3.22422 1.56298C3.39531 1.73407 3.56641 1.90517 3.73984 2.07861C4.20625 2.54501 4.675 3.01376 5.14141 3.48017C5.83047 4.16923 6.51719 4.85595 7.20625 5.54501C8.04531 6.38407 8.88437 7.22314 9.72578 8.06454C10.6469 8.98564 11.5703 9.90907 12.4914 10.8302C13.4219 11.7606 14.3523 12.6911 15.2852 13.6239C16.15 14.4888 17.0148 15.3536 17.882 16.2208C18.6133 16.952 19.3445 17.6833 20.0758 18.4145C20.6031 18.9419 21.1305 19.4692 21.6578 19.9966C21.9062 20.245 22.157 20.4934 22.4055 20.7442C22.4148 20.7559 22.4266 20.7653 22.4359 20.7747C22.6492 20.988 22.7781 21.302 22.7781 21.6044C22.7781 21.8927 22.6516 22.2349 22.4359 22.4341C22.2133 22.638 21.9203 22.7903 21.6063 22.7763C21.2945 22.7645 21.0016 22.6591 20.7766 22.4341Z"
              fill="white"
            />
          </svg>

          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
