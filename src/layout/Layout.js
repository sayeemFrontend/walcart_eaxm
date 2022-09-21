import React, { useRef } from "react";
import { rightIcon } from "../assets";
import Slide from "../components/common/slider/Slide";
import { categories, slideImages } from "./data";
import "./layout.css";

export function ListView({ list = [] }) {
  const parentRef = useRef();

  return (
    <div className="list-view bg-inherit w-full z-10">
      {list?.map((it) => (
        <div
          ref={parentRef}
          key={it.id}
          className=" parent relative border-b border-[#f4f4f4] last:border-b-0"
        >
          <ul className="py-2.5 px-2 single-item list-none w-full text-primary-dark text-sm flex items-center cursor-pointer hover:bg-[#FFF2F2] ">
            {it.icon && (
              <img className="mr-3 w-3 aspect-auto" src={it.icon} alt="icon" />
            )}
            {it.title}
            {it.subCategory && (
              <img className="ml-auto" src={rightIcon} alt="rIcon" />
            )}
          </ul>
          {it.subCategory && (
            <div className="absolute children w-full bg-white left-full top-0 z-50">
              <ListView list={it.subCategory} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Layout() {
  return (
    <div className="layout ">
      <div className=" container">
        <div className="flex">
          <div className="w-52 bg-white pt-4 hidden md:inline">
            <ListView list={categories} />
          </div>
          <div className="ml-auto pt-3 w-full  md:w-[calc(100%-14rem)]">
            <Slide imageList={slideImages} />
          </div>
        </div>
      </div>
    </div>
  );
}
