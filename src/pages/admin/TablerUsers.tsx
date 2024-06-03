import { TablerUserShad } from "@/components/tabs/TablerUserShad";
import React from "react";

const TablerUsers: React.FC = () => {
  //const { isAuthenticated } = useAuthStore();
  /* if (!isAuthenticated) {
    return <NotPass />;
  } */
  return (
    <>
      <TablerUserShad />
    </>
  );
};

export default TablerUsers;
