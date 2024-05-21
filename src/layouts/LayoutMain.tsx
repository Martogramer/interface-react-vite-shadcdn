import React from "react";
interface Props {
  children: React.ReactNode;
}

const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <div className="ml-4 bg-gray text-primary-foreground m-1">
      <div className=" ml-11 mt-2 fixed">
        <span className="mr-2 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
          Live
        </span>
        <span className="text-xs hidden min-[680px]:inline-block font-semibold cursor-default">
          <span className="mx-1 text-navy-700 hover:text-navy-700">/</span>
          <label className="capitalize text-navy-700 hover:underline">
            {location.pathname.split("/")[1]}
            {location.pathname.split("/").length > 2 &&
              ` / ` + location.pathname.split("/")[2]}
            {location.pathname.split("/").length > 3 &&
              ` / ` + location.pathname.split("/")[3]}
          </label>
        </span>
      </div>
      <div className="p-10 ">
        <div>
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default LayoutMain;
