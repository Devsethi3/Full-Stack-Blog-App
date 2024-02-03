"use client";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="">
        <div className="mx-auto">
          <div className="flex navbar h-[6rem] items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link
                className="block text-2xl font-extrabold text-primary"
                href="/"
              >
                <span className="sr-only">Home</span>
                NEWDAY
              </Link>
            </div>

            <div className={`md:block z-50 nav-menu ${isOpen ? "show-menu" : ""}`}>
              <nav className="nav-links">
                <ul className="flex dark:text-white items-center gap-10">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/">About</Link>
                  </li>
                  <li>
                    <Link href="/">Latest Blogs</Link>
                  </li>
                  <li>
                    <Link href="/">Posts</Link>
                  </li>
                  <li>
                    <Link href="/">Add Posts</Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center navlink-gap gap-8">
              <ThemeToggle />
              <AuthLinks />
              <div className="block md:hidden">
                <button
                  onClick={toggle}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
