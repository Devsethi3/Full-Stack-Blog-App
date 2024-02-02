"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="w-[70px] h-[30px] bg-[#1c0d28] dark:bg-white relative rounded-full cursor-pointer flex items-center justify-between px-2"
      >
        <Image src="/images/moon.png" alt="moon" width={15} height={15} />
        <span
          style={darkMode ? { left: "7px" } : { right: "7px" }}
          className="absolute right-2 dark:bg-black bg-white w-[18px] h-[18px] rounded-full"
        ></span>
        <Image src="/images/sun.png" alt="moon" width={18} height={18} />
      </div>
    </>
  );
};

export default ThemeToggle;
