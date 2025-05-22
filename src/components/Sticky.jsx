
import React, { useEffect, useState } from "react";
import SplineM from "./SplineM";

const Sticky = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 200); // stick after 200px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={isSticky ? "fixed top-0 bg-white shadow z-50" : ""}>
      <SplineM/>
    </div>
  );
};
