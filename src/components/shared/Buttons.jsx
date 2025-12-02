// import Link from "next/link";
import { Link } from "react-router-dom";
import BodyText from "../typography/BodyText";
import { cn } from "../../utils/utils";
// import { cn } from "@/lib/utils";

// variants can be extended easily
const variantClasses = {
  primary:
    "bg-app-yellow text-app-dark hover:bg-[#C6B313] transition-all duration-300",
  secondary:
    "bg-white text-black hover:bg-[#D9D9D9] transition-all duration-300",
  outline:
    "border border-app-dark text-app-dark bg-transparent hover:bg-[#D9D9D9] hover:border-[#D9D9D9] transition-all duration-300",
};

const AppButton = ({
  children,
  className,
  icon,
  as = "link",
  href = "#",
  type = "button",
  variant = "primary",
  ...rest
}) => {
  const commonClasses = cn(
    "group relative inline-flex transition-all duration-600 gap-2 items-center justify-center rounded-[8px] px-4 lg:px-7 py-3 lg:py-4",
    variantClasses[variant],
    className
  );

  const Icon = () =>
    icon && (
      <div className="relative ml-1 h-5 w-5 overflow-hidden flex justify-end items-center">
        <div className="absolute transition-all duration-600 group-hover:translate-x-full group-hover:-translate-y-full">
          {icon}
        </div>
        <div className="absolute transition-all duration-600 -translate-x-full translate-y-full group-hover:translate-0">
          {icon}
        </div>
      </div>
    );

  const Content = () => (
    <>
      {icon && <Icon />}
      <BodyText tag="span" variant="button" className="text-inherit">
        {children}
      </BodyText>
    </>
  );

  if (as === "button") {
    return (
      <button type={type} className={commonClasses} {...rest}>
        <Content />
      </button>
    );
  }

  if (as === "a") {
    return (
      <a href={href} className={commonClasses} {...rest}>
        <Content />
      </a>
    );
  }

  // default to Next.js Link
  return (
    <Link
      // href={href}
      to={href}
      className={commonClasses}
      {...rest}
    >
      <Content />
    </Link>
  );
};

export { AppButton };
