import { cn } from "../../utils/utils";

// import { cn } from "@/lib/utils"
const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1920px] px-[15px] md:px-5 xl:px-10 relative pb-5 lg:pb-10",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
