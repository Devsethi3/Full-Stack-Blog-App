"use client";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <>
      <div
        onClick={toggle}
        style={theme === "dark" ? {background: "#f1f1f1"} : {background: "#110618"}}
        className="w-[70px] h-[30px] relative rounded-full cursor-pointer flex items-center justify-between px-2"
      >
        <Image src="/images/moon.png" alt="moon" width={15} height={15} />
        <span
          className="absolute w-[18px] h-[18px] rounded-full"
          style={
            theme === "dark"
              ? { left: 6, background: "#0c0217" }
              : { right: 6, background: "white" }
          }
        ></span>
        <Image src="/images/sun.png" alt="moon" width={18} height={18} />
      </div>
    </>
  );
};

export default ThemeToggle;
