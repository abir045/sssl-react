import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
import { Link } from "react-router-dom";
// import Image from "next/image";
// import { cn } from "@/lib/utils"
import BodyText from "../typography/BodyText";
import NavArrow from "../icons/NavArrow";
import BtnArrow from "../icons/BtnArrow";
import PhoneIcon from "../icons/PhoneIcon";
import MenuIcon from "../icons/MenuIcon";
import CrossIcon from "../icons/CrossIcon";
import { AppButton } from "../shared/Buttons";
import PlusIcon from "../icons/PlusIcon";
import { cn } from "../../utils/utils";

export default function Navbar({ data }) {
  const navbarData = data;
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileMenuOpen(false);

      // Update nav height on resize
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-lenis-prevent", "true");
    } else {
      document.body.style.overflow = "unset";
      document.body.removeAttribute("data-lenis-prevent");
    }
  }, [mobileMenuOpen]);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  // console.log(navbarData.nav_items);
  console.log(navbarData.logo.primary_logo);

  return (
    <nav
      ref={navRef}
      className="border-b border-[#2A2A2C1A] py-[10px] px-0 xl:px-[15px] z-50 sticky top-0 bg-white"
    >
      <div className="flex items-center justify-between relative">
        {/* Logo Section */}
        <div className="flex items-center gap-2.5 lg:gap-[20px] xl:gap-[50px]">
          <Link
            // href="/"
            to="/"
            className="flex-shrink-0"
          >
            <img
              src={navbarData.logo.primary_logo}
              alt="Primary Logo"
              className="h-[40px] w-[33px] lg:h-[50px] lg:w-[43px] xl:h-[120px] xl:w-[99px] object-cover"
            />
          </Link>
          <Link href="#" className="flex-shrink-0">
            <img
              src={navbarData.logo.secondary_logo}
              alt="Secondary Logo"
              className="h-[30px] w-[33px] xl:h-[80px] xl:w-[80px] opacity-70"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden [@media(min-width:1200px)]:flex items-center">
          {navbarData.nav_items.map((item, index) => (
            <div key={index} className="relative group">
              <Link
                // href={item.link}
                to={item.link}
                className="flex items-center justify-center gap-1 py-2 px-4"
              >
                <span className="relative group">
                  <BodyText
                    tag="span"
                    variant="body-2"
                    className="text-app-dark"
                  >
                    {item.label}
                  </BodyText>
                  <span className="line absolute bottom-0 left-0 group-hover:w-full h-[1px] w-0 bg-app-dark transition-all duration-400"></span>
                </span>
                {item.children.length > 0 && (
                  <span className="bg-[#F5F5F5] rounded-full flex justify-center items-center h-[18px] w-[18px]">
                    <span className="-rotate-90 transition duration-400 group-hover:rotate-0">
                      <NavArrow />
                    </span>
                  </span>
                )}
              </Link>
              {item.children.length > 0 && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                  {item.children.map((child, idx) => (
                    <Link
                      key={idx}
                      // href={child.link}
                      to={child.link}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      <BodyText
                        tag="span"
                        variant="body-2"
                        className="text-app-dark"
                      >
                        {child.label}
                      </BodyText>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Header Icons */}
        <div className="[@media(min-width:1200px)]:hidden flex items-center gap-2.5">
          <Link
            // href={navbarData.contact_info[0]?.link || "#"}
            to={navbarData.contact_info[0]?.link || "#"}
            className="h-10 w-10 rounded-full flex justify-center items-center border border-[#2A2A2C1A]"
          >
            <PhoneIcon />
          </Link>
          <button
            className={`h-10 w-10 rounded-full flex justify-center items-center border cursor-pointer border-[#2A2A2C1A] ${
              mobileMenuOpen ? "bg-app-blue" : "bg-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CrossIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Desktop Contact Buttons */}
        <div className="hidden [@media(min-width:1200px)]:flex items-center space-x-4">
          {navbarData.contact_info.map((info, idx) => (
            <AppButton
              key={idx}
              icon={info.type === "number" ? <PhoneIcon /> : <BtnArrow />}
              href={info.link}
              className={
                info.type === "number"
                  ? "transition-all bg-transparent hover:bg-transparent font-normal duration-500"
                  : "transition-all duration-500 hover:bg-app-yellow"
              }
            >
              {info.label}
            </AppButton>
          ))}
        </div>

        {/* Mobile Full Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-white z-50 transition-transform duration-300 overflow-y-auto",
            mobileMenuOpen ? "-translate-y-0" : "translate-y-full"
          )}
          style={{
            marginTop: `${navHeight}px`,
            height: `calc(100dvh - ${navHeight}px)`,
          }}
          data-lenis-prevent
        >
          <div className="px-5 xl:px-10 py-5">
            {navbarData.nav_items.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0 mb-[5px]"
              >
                <div
                  className="flex items-center justify-between mb-[5px] px-4 py-3 hover:bg-gray-50 cursor-pointer transition-all duration-300 rounded-[8px]"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.link === "#" ? (
                    <button className="text-app-dark w-full text-left cursor-pointer">
                      <BodyText
                        tag="span"
                        variant="lead-1"
                        className="text-app-dark"
                      >
                        {item.label}
                      </BodyText>
                    </button>
                  ) : (
                    <Link
                      // href={item.link}
                      to={item.link}
                      className="text-app-dark w-full"
                      onClick={closeMobileMenu}
                    >
                      <BodyText tag="span" variant="lead-1">
                        {item.label}
                      </BodyText>
                    </Link>
                  )}
                  {item.children.length > 0 && (
                    <PlusIcon
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        openDropdowns[index] && "rotate-180 active"
                      )}
                    />
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.children.length > 0 && (
                  <div
                    className={cn(
                      "bg-app-bg overflow-hidden transition-all duration-300 ease-in-out rounded-[8px]",
                      openDropdowns[index]
                        ? "max-h-96 opacity-100 p-[15px] mb-[10px]"
                        : "max-h-0 opacity-0"
                    )}
                  >
                    {item.children.map((child, idx) => (
                      <Link
                        key={idx}
                        href={child.link}
                        className="block mb-3 last:mb-0"
                        onClick={closeMobileMenu}
                      >
                        <BodyText
                          tag="span"
                          variant="body-1"
                          className="text-app-dark w-full"
                        >
                          {child.label}
                        </BodyText>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-5">
              <AppButton
                icon={<BtnArrow />}
                href={navbarData.contact_info[1]?.link || "#"}
                className="w-full"
                onClick={closeMobileMenu}
              >
                {navbarData.contact_info[1]?.label || "Contact"}
              </AppButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
