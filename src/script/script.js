import { useState, useEffect } from "react";

const useScroll = (scrollPoint = 200) => {
  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop < scrollPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPoint]);

  return scrolled;
};

export default useScroll;
