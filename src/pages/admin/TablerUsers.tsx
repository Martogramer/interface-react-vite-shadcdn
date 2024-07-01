import ImageContainer from "@/components/_Customs2024/images/LazyImage";
import { TablerUserShad } from "@/components/tabs/TablerUserShad";
import React from "react";

const TablerUsers: React.FC = () => {
  //const { isAuthenticated } = useAuthStore();
  /* if (!isAuthenticated) {
    return <NotPass />;
  } */
  return (
    <>
    <ImageContainer />
      <TablerUserShad />
    </>
  );
};

export default TablerUsers;
