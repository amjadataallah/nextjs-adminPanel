import React from "react";
import { TbError404 } from "react-icons/tb";
import { MdOutlineWrongLocation } from "react-icons/md";

const NotFoundPage = () => {
  return (
    <div className="bg-white rounded-lg mx-4 p-4">
      <div className="pl-0">
        <div className="flex justify-center items-center">
          <MdOutlineWrongLocation
            className="drop-shadow-md text-blue-400"
            size={50}
          />
          <span className="drop-shadow-md text-blue-400 text-xl font-semibold ml-3">
            Are you lost? Use the menu!
          </span>
        </div>

        <br />
        <hr />
        <br />
        <div className="flex justify-center items-center">
          <TbError404 className="drop-shadow-md text-red-400" size={70} />

          <span className="drop-shadow-md text-red-400 text-3xl font-semibold ml-3">
            Page Not Found
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
// flex flex-col text-center justify-center text-red-400 drop-shadow-md text-3xl font-semibold align-middle
//text-center align-middle
