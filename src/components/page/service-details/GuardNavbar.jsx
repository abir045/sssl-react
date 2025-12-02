// import BodyText from "@/components/typography/BodyText";
// import { slugify } from "@/utils/slugify";
import { useState, useEffect } from "react";
import { slugify } from "../../../utils/slugify";
import BodyText from "../../typography/BodyText";

const GuardNavbar = ({ sections, sectionRefs }) => {
  const [activeLabel, setActiveLabel] = useState(
    slugify(sections[0]) || "overview"
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-section-id");
          setActiveLabel(id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-section-id", key); // so we can identify it
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionRefs]);

  const scrollToSection = (label) => {
    const key = slugify(label);
    const ref = sectionRefs[key];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (label) => {
    scrollToSection(label);
    setActiveLabel(slugify(label)); // optional: auto-update to reflect click immediately
  };

  return (
    <div className="sticky top-40 w-64 h-full bg-white hidden lg:block">
      <nav className="flex-1 space-y-2">
        {sections.map((section) => (
          <NavItem
            key={section}
            label={section}
            active={activeLabel === slugify(section)}
            onClick={() => handleNavClick(section)}
          />
        ))}
      </nav>
    </div>
  );
};

export default GuardNavbar;

function NavItem({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-[25px] py-[15px] border-l-[5px] cursor-pointer ${
        active ? "border-app-blue" : "border-[#2A2A2C1A]"
      }`}
    >
      <BodyText tag="span" variant="lead-1" className="text-app-dark">
        {label}
      </BodyText>
    </button>
  );
}
