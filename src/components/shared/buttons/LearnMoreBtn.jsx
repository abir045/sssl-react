// import BodyText from "@/components/typography/BodyText";
// import Link from "next/link";
import { Link } from "react-router-dom";
import BodyText from "../../typography/BodyText";
const LearnMoreBtn = ({ children, to, type }) => {
  const baseClass =
    "text-[#0A1A3A] font-medium text-lg cursor-pointer relative border-none bg-none transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:text-[#0A1A3A] focus:outline-none";

  return (
    <div className="relative flex items-center group w-fit mt-[15px] lg:mt-[25px]">
      {type === "span" ? (
        <span className={baseClass}>
          <BodyText tag="span" variant="button" className="text-app-dark">
            {children}
          </BodyText>
        </span>
      ) : (
        <Link
          // href={href || "#"}
          to={to || "#"}
          className={baseClass}
        >
          <BodyText tag="span" variant="button" className="text-app-dark">
            {children}
          </BodyText>
        </Link>
      )}
      {/* Underline Animation */}
      <div className="absolute opacity-0 lg:opacity-100 bottom-[-7px] left-0 w-0 h-[1px] bg-app-dark transition-all duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full"></div>
    </div>
  );
};

export default LearnMoreBtn;
