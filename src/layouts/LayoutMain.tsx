import React from "react";

interface Props {
  children: React.ReactNode;
}

const LayoutMain: React.FC<Props> = ({ children }) => {
  return (
    <>
      
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
