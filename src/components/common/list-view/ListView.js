import { useRef } from "react";
import { rightIcon } from "../../../assets";
import "./ListView.css";

export default function ListView({ list = [] }) {
  const parentRef = useRef();

  return (
    <div className="list-view bg-inherit w-full z-10 shadow-sm">
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
              <img
                className="ml-auto rotate-90 md:rotate-0"
                src={rightIcon}
                alt="rIcon"
              />
            )}
          </ul>
          {it.subCategory && (
            <div className="absolute children w-full bg-white left-0  md:left-full md:top-0 z-50">
              <ListView list={it.subCategory} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
