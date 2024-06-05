import NotificationBar from "@/components/_Customs2024/alerts/NotificationBar";
import React from "react";
interface Props {
  children: React.ReactNode;
}

const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NotificationBar />
      <div className="bg-gray text-primary-foreground ">
        <div className=" ml-16 mt-3 fixed z-50 blur-sm">
          <span className="mr-2 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
            Live
          </span>
          <span className="text-xs hidden min-[680px]:inline-block font-semibold cursor-default">
            <span className="mx-1 text-purple-700 hover:text-navy-700">/</span>
            <label className="capitalize text-navy-100 hover:underline">
              {location.pathname.split("/")[1]}
              {location.pathname.split("/").length > 2 &&
                ` / ` + location.pathname.split("/")[2]}
              {location.pathname.split("/").length > 3 &&
                ` / ` + location.pathname.split("/")[3]}
            </label>
          </span>
        </div>

        <div className=" ml-16 mt-3 fixed z-50">
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
        <>{children}</>
      </div>
    </>
  );
};

export default LayoutMain;
