import React, { useState } from "react";
// import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "./Navbar.css";
import logo from "../assets/iutps-logo.png";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activitiesOpen, setActivitiesOpen] = useState(false);

  const menuItems = [
    { name: "HOME", href: "/" },
    // {
    //   name: "Activities",
    //   href: "#",
    //   subItems: [
    //     { name: "Biznation", href: "/biznation" },
    //     { name: "Career Expo", href: "/career-expo" },
    //     { name: "Intern", href: "/intern" },
    //     { name: "NeoTalk", href: "/neotalk" },
    //   ],
    // },
    { name: "OUR WORKS", href: "#" },
    { name: "EVENTS", href: "#cards-holder" },
    { name: "ABOUT US", href: "#about-us" },
  ];

  const openSideBar = () => {
    setSidebarOpen(true);
  };

  const closeSideBar = () => {
    setSidebarOpen(false);
    setActivitiesOpen(false); // Close sub-items when sidebar is closed
  };

  const toggleActivities = () => {
    setActivitiesOpen(!activitiesOpen);
  };

  return (
    <div>
      {/* Initial Navbar */}
      {/* <div
        id="nav"
        className="h-28 w-full px-15 fixed flex items-center justify-between md:justify-start md:px-28 z-10"
      >
        <a href="/">
          <img src={logo} alt="IUTPS Logo" className="h-12" />
        </a>
        <a href="/">
          <div className="mx-2.5 md:mx-5">
            <h4 className="font-normal text-sm">HOME</h4>
          </div>
        </a>
        <a href="/">
          <div className="mx-2.5 md:mx-5">
            <h4 className="font-normal text-sm">OUR WORKS</h4>
          </div>
        </a>
        <a href="#about-us">
          <div className="mx-2.5 md:mx-5">
            <h4 className="font-normal text-sm">ABOUT US</h4>
          </div>
        </a>
        <a href="#cards-holder">
          <div className="mx-2.5 md:mx-5">
            <h4 className="font-normal text-sm">EVENTS</h4>
          </div>
        </a>
      </div> */}

      {/* Desktop Navbar */}
      <nav
        id="nav"
        className="h-28 w-full px-15 fixed flex items-center justify-between md:justify-start md:px-28 z-20"
      >
        <img className="h-12 cursor-pointer mx-6" src={logo} alt="logo" />
        <ul className="hidden md:flex space-x-10 mx-6">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a className="font-normal text-sm" href={item.href}>
                {item.name}
              </a>
              {/* {item.subItems && (
                <ul className="absolute z-50 left-0 w-48 mt-4 shadow-lg rounded-sm py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.href}
                        className="text-gray-800 hover:bg-[#800000] hover:text-white py-1 px-4 block"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
        </ul>
        {/* Mobile Menu Button */}
        <div className="md:hidden mr-6">
          {/* MenuIcon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            className="w-6 h-6 cursor-pointer text-white"
            onClick={openSideBar}
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <nav
        className={`fixed top-0 right-0 h-full w-64 bg-black shadow-md transform z-50 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-start p-4 space-y-4">
          <li onClick={closeSideBar}>
            {/* <XIcon className="w-6 h-6 cursor-pointer text-white" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
              className="w-6 h-6 cursor-pointer text-white"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </li>
          {menuItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                className="text-white hover:text-gray-200 py-2 px-4 transition duration-300 flex justify-between items-center w-full"
                href={item.subItems ? "#" : item.href}
                onClick={item.subItems ? toggleActivities : undefined}
              >
                {item.name}
                {item.subItems && (
                  <span
                    className={`ml-2 text-xs transform transition-transform ${
                      activitiesOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                )}
              </a>
              {item.subItems && activitiesOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <a
                        href={subItem.href}
                        className="text-white hover:text-gray-200 py-1 px-4 block"
                      >
                        {subItem.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
