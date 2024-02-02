"use client";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegImage } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { MdAddCircleOutline, MdOndemandVideo } from "react-icons/md";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import { useState } from "react";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValeu] = useState("");
  return (
    <>
      <div>
        <div className="flex items-center border-b-2 justify-between">
          <h1 className="text-2xl font-bold my-5">
            Write A Blog For Ingenuity
          </h1>
          <button className="rounded-md whitespace-nowrap bg-[#138240] px-4 py-2.5  font-semibold text-gray-100 shadow flex items-center">
            <span className="text-xl mr-2">
              <MdAddCircleOutline className="font-bold" />
            </span>
            Publish
          </button>
        </div>
        <input
          type="text"
          className="dark:bg-[#e1ffef1a] mt-[2rem] outline-none bg-[#e1ffef] rounded-md py-3 px-8 text-2xl w-full"
          placeholder="Blog Title... Eg., My First Bike, How was my first school day..."
        />
        <div className="mt-3 relative flex items-center gap-5">
          <button
            className="flex items-center gap-3 text-xl font-medium"
            onClick={() => setOpen(!open)}
          >
            <IoMdAddCircleOutline className="text-2xl" />
            Add Assets
          </button>
          {open && (
            <div className="flex absolute left-[12%] w-[150px] rounded-md py-3 px-4 dark:bg-[#e1ffef] bg-[#ffeded] items-center justify-between">
              <button className="">
                <FaRegImage className="text-xl dark:text-black" />
              </button>
              <button>
                <FiExternalLink className="text-xl dark:text-black" />
              </button>
              <button>
                <MdOndemandVideo className="text-xl dark:text-black" />
              </button>
            </div>
          )}
        </div>
        <ReactQuill
          // className="mt-8 post-box dark:bg-[#e1ffef1a] bg-[#e1ffef]"
          className="mt-8 post-box"
          theme="bubble"
          value={value}
          onChange={setValeu}
          placeholder="Tell Your Story..."
        />
      </div>
    </>
  );
};

export default WritePage;
