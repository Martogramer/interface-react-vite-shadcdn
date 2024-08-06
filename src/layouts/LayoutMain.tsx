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
        <>
          <div>
            <>{children}</>
          </div>
        </>
      </div>
    </>
  );
};

export default LayoutMain;
