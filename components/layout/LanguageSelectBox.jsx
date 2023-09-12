"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsGlobeAmericas } from "react-icons/bs";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const languages = [
  { id: 1, flag: "fi fi-us", route: "/en" },
  { id: 2, flag: "fi fi-ps", route: "/ar" },
];

const LanguageSelectBox = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <span className="text-2xl">
            <BsGlobeAmericas />
          </span>
        </div>
        <div
          className={`flex flex-col bg-orange-100 w-16 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-10 right-8`}
        >
          {languages.map((item) => (
            <div
              key={item.id}
              className={`flex justify-center items-center py-2 hover:bg-orange-300 cursor-pointer `}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Link href={item.route}>
                <span className={item.flag}></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-50 fixed inset-0 opacity-50 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default LanguageSelectBox;
