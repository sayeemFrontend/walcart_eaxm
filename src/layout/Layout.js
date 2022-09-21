import React from "react";

import ListView from "../components/common/list-view/ListView";
import Slide from "../components/common/slider/Slide";
import { categories, slideImages } from "./data";
import "./layout.css";

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
