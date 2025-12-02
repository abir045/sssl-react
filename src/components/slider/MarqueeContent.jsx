// import Image from 'next/image';
import React, { useEffect, useRef } from "react";
// import Link from 'next/link';
import { Link } from "react-router-dom";

const MarqueeContent = ({ clients }) => {
  const marqueeRef = useRef(null);
  const animationRef = useRef(null);
  const positionRef = useRef(0);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee || !clients || clients.length === 0) return;

    const speed = 1.4; // pixels per frame (lower = slower)
    const totalWidth = marquee.scrollWidth / 2; // because we duplicated the list

    const animate = () => {
      positionRef.current -= speed;

      // Reset seamlessly when scrolled half of the width
      if (Math.abs(positionRef.current) >= totalWidth) {
        positionRef.current = 0;
      }

      marquee.style.transform = `translateX(${positionRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [clients]);

  if (!clients || clients.length === 0) {
    return (
      <div className="text-center text-gray-500">No clients available</div>
    );
  }

  return (
    <div className="flex items-center" ref={marqueeRef}>
      {[...clients, ...clients].map((client, index) => (
        <Link
          key={index}
          href={client?.node?.link || "#"}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-[120px] h-[80px] lg:w-[200px] lg:h-[120px] px-[30px] lg:px-[50px] py-[15px] flex-shrink-0"
        >
          <img
            src={client?.node?.clientImage}
            alt={client?.node?.clientName || "Company logo"}
            className="h-full w-full object-contain mx-auto"
          />
        </Link>
      ))}
    </div>
  );
};

export default MarqueeContent;
