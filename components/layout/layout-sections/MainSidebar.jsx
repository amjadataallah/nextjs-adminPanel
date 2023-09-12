import React, { useContext } from "react";
import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { TbMicroscope } from "react-icons/tb";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
import { FcAbout } from "react-icons/fc";

const MainSidebar = () => {
  const { open, toggle } = useContext(MenuContext);

  const closeSideBarHandler = () => {
    toggle();
  };
  return (
    <aside
      className={`bg-white top-4 left-4 lg:block lg:fixed lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
        open ? "w-60 p-4 block fixed" : "w-0 hidden"
      } lg:w-60 lg:p-4 z-50 shadow-md`}
    >
      <ul>
        <li className="flex justify-end items-center lg:hidden">
          <AiOutlineClose
            className="text-red-300 hover:text-red-800 cursor-pointer"
            onClick={closeSideBarHandler}
          />
        </li>
        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <AiOutlineHome className="mr-2" />
          <Link href="/" onClick={closeSideBarHandler}>
            Home
          </Link>
        </li>
        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <TbMicroscope className="mr-2" />
          <Link href="/" onClick={closeSideBarHandler}>
            Lab Devices
          </Link>
        </li>
        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <GrProjects className="mr-2" />
          <h3 className="flex-1">Projects</h3>
          <FaAngleRight />
        </li>
        <li className="flex flex-col justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <div className="w-full flex flex-row justify-start items-center">
            <FaCheck className="mr-2" />
            <h3 className="flex-1">Singular</h3>
            <FaAngleRight />
          </div>
          <ul className="ml-4 mt-4">
            <li className="flex justify-center items-center gap-2">
              <SiSinglestore />
              <Link href="/singular/selectbox" onClick={closeSideBarHandler}>
                Select Box
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex flex-col justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <div className="w-full flex flex-row justify-start items-center">
            <FaCheckDouble className="mr-2" />
            <h3 className="flex-1">Complex</h3>
            <FaAngleRight />
          </div>
          <ul className="mt-4 ml-4">
            <li className="flex justify-center items-center gap-2">
              <SiSinglestore />
              <Link
                href="/complex/horizantal-scrollbar"
                onClick={closeSideBarHandler}
              >
                Horizantal Scrollbar
              </Link>
            </li>
          </ul>
        </li>
        <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
          <SiHelpscout className="mr-2" />
          <Link href="/about-us" onClick={closeSideBarHandler}>
            Something Else
          </Link>
        </li>
        <li className="flex justify-start items-center hover:bg-orange-200 hover:text-orange-800 rounded-xl p-2">
          <FcAbout className="mr-2" />
          <Link href="/about-us">About Us</Link>
        </li>
        <li className="flex justify-start items-center hover:bg-green-200 hover:text-green-800 rounded-xl p-2">
          <FiPhoneCall className="mr-2" />
          <Link href="/contact-us" onClick={closeSideBarHandler}>
            Contact Us
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
