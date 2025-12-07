// import { cn } from "@/lib/utils"
import React, { useState } from "react";
import BodyText from "../typography/BodyText";
import FacebookIcon from "../icons/FacebookIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import XIcon from "../icons/XIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
// import Link from "next/link";
import { Link } from "react-router-dom";
import Heading from "../typography/Heading";
import PlusIcon from "../icons/PlusIcon";
import { cn } from "../../utils/utils";

const Footer = ({ footerData, navbarData }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});
  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const navItems = [
    ...navbarData?.nav_items,
    {
      link: "/contact-us",
      label: "Contact Us",
      children: [],
    },
  ];

  return (
    <footer className="bg-[#071228] rounded-[16px] px-5 xl:px-20 pt-[40px]  xl:pt-[70px] pb-[30px]">
      <div className="grid xl:grid-cols-3 mb-12 justify-center gap-8 xl:gap-0">
        {/* Menu Section */}
        <div className="h-full xl:flex items-center  justify-end flex-col md:px-8 hidden xl:order-1  w-full xl:w-[unset] max-w-[850px]">
          <Heading
            tag="h4"
            variant="h4"
            className="text-white text-2xl"
            overrideStyles={true}
          >
            Menu
          </Heading>
          <ul className="flex flex-wrap gap-4 justify-center mt-6">
            {footerData?.links.map((link, index) => (
              <React.Fragment key={index}>
                <li className="flex items-center justify-center gap-4">
                  <Link
                    // href={link?.link}
                    to={link?.link}
                    className="text-white opacity-80 hover:opacity-100 transition-all hover:underline"
                  >
                    <BodyText tag="span" variant="body-1">
                      {link?.label}
                    </BodyText>
                  </Link>
                  {index < footerData?.links.length - 1 && (
                    <span className="text-white h-[15px] w-[1px] bg-[#FFFFFF1A] "></span>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>

        <div className="flex flex-col w-full xl:hidden max-w-[850px] md:px-8 lg:pt-[60px]">
          {navItems?.map((item, index) => (
            <div
              key={index}
              className="border-b border-[#FFFFFF1A] last:border-b-0 mb-[5px]"
            >
              <div
                className="flex items-center justify-between mb-[5px] pr-4 py-3 cursor-pointer transition-all duration-300 rounded-[8px]"
                onClick={() => toggleDropdown(index)}
              >
                {item?.link === "#" ? (
                  <button className="text-white w-full text-left cursor-pointer">
                    <BodyText
                      tag="span"
                      variant="lead-1"
                      className="text-white"
                    >
                      {item?.label}
                    </BodyText>
                  </button>
                ) : (
                  <Link
                    // href={item?.link}
                    to={item?.link}
                    className="text-white w-full"
                  >
                    <BodyText
                      tag="span"
                      variant="lead-1"
                      className="text-white"
                    >
                      {item?.label}
                    </BodyText>
                  </Link>
                )}
                {item?.children.length > 0 && (
                  <PlusIcon
                    fill="#FFFFFF"
                    className={cn(
                      "h-4 w-4 transition-transform duration-300 shrink-0",
                      openDropdowns[index] && "rotate-180 active"
                    )}
                  />
                )}
              </div>

              {/* Mobile Dropdown */}
              {item?.children.length > 0 && (
                <div
                  className={cn(
                    "bg-[#FFFFFF1A] overflow-hidden transition-all duration-300 ease-in-out rounded-[8px]",
                    openDropdowns[index]
                      ? "max-h-96 opacity-100 p-[15px] mb-[10px]"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {item?.children.map((child, idx) => (
                    <Link
                      key={idx}
                      // href={child?.link}
                      to={child?.link}
                      className="block mb-3 last:mb-0"
                    >
                      <BodyText
                        tag="span"
                        variant="body-1"
                        className="text-white w-full opacity-80"
                      >
                        {child?.label}
                      </BodyText>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Company Info */}
        <div className="h-full flex items-center  w-full xl:w-[unset] justify-start order-first xl:order-2   flex-col md:px-8 2xl:px-16  max-w-[850px] 2xl:pb-[100px]">
          <img
            src={footerData?.logo.primary_logo}
            alt="footer logo"
            className="w-[99px] h-[120px] mb-4 xl:mb-8"
          />
          <div className="flex flex-col items-center justify-center">
            <BodyText
              tag="p"
              variant="body-1"
              className="text-white opacity-80 font-normal text-center"
            >
              {footerData?.company_info.description}
            </BodyText>
          </div>
        </div>

        {/* Contact Info */}
        <div className="h-full flex items-center justify-end w-full xl:w-[unset] flex-col  md:px-8 xl:order-3  max-w-[850px] lg:pt-[60px] md:pb-[20px]">
          <Heading
            tag="h4"
            variant="h4"
            className="text-white text-2xl"
            overrideStyles={true}
          >
            Contact Info
          </Heading>
          <div className="mt-6 leading-8 space-y-4 text-center">
            <BodyText
              tag="p"
              variant="body-1"
              className="text-white opacity-80 font-normal text-center"
            >
              {footerData?.contact_info.address}
            </BodyText>
            <BodyText
              tag="p"
              variant="body-1"
              className="text-white opacity-80 font-normal text-center hover:opacity-100 transition-all duration-200 cursor-pointer"
            >
              Email:{" "}
              <Link
                // href={`mailto:${footerData?.contact_info?.email}`}
                to={`mailto:${footerData?.contact_info?.email}`}
              >
                {footerData?.contact_info.email}
              </Link>
            </BodyText>
            <BodyText
              tag="p"
              variant="body-1"
              className="text-white opacity-80 font-normal text-center hover:opacity-100 transition-all duration-200 cursor-pointer"
            >
              Phone:{" "}
              {footerData?.contact_info.phone_numbers?.map((phone, index) => (
                <React.Fragment key={index}>
                  <Link
                    // href={`tel:${phone?.replace(/\s+/g, "")}`}
                    to={`tel:${phone?.replace(/\s+/g, "")}`}
                  >
                    {phone}
                  </Link>
                  {index < footerData?.contact_info.phone_numbers?.length - 1 &&
                    ", "}
                </React.Fragment>
              ))}
            </BodyText>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between gap-2.5 flex-col md:flex-row items-center py-[25px] border-t border-[#FFFFFF1A] mx-auto   max-w-[850px] lg:max-w-[unset]">
        {/* Copyright */}
        <BodyText
          tag="p"
          variant="body-2"
          className="text-white opacity-80 text-center md:text-left"
        >
          {" "}
          &copy;{footerData?.copyright?.text}
        </BodyText>
        {/* Social Links */}
        <div className="flex justify-center items-center">
          {Object.entries(footerData?.contact_info.social_links).map(
            ([name, url], index) => (
              <Link
                key={index}
                // href={url}
                to={url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[38px] w-[38px] flex justify-center items-center opacity-80 hover:opacity-100 transition-all"
                aria-label={name}
              >
                {name === "facebook" && <FacebookIcon />}
                {name === "linkedin" && <LinkedInIcon />}
                {name === "twitter" && <XIcon />}
                {name === "youtube" && <YoutubeIcon />}
              </Link>
            )
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
