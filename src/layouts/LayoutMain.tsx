import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}
const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <div className='"bg-gray text-primary-foreground m-1'>
      <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
        Live
      </span>
      <span className="text-xs hidden min-[680px]:inline-block font-semibold cursor-default">
        <a className="text-navy-700 hover:underline" href="/">
          Pages
          <span className="mx-1 text-navy-700 hover:text-navy-700">/</span>
        </a>
        <label className="capitalize text-navy-700 hover:underline">
          {location.pathname.split("/")[1]}
          {location.pathname.split("/").length > 2 &&
            ` / ` + location.pathname.split("/")[2]}
          {location.pathname.split("/").length > 3 &&
            ` / ` + location.pathname.split("/")[3]}
        </label>
      </span>
      <div className=" md:px-10 mx-auto w-full">
        <div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;
