import NotPass from "@/components/errorPage/NotPass";
import { TablerUserShad } from "@/components/tabs/TablerUserShad";
import useAuthStore from "@/services/authState";
import React from "react";

const TablerUsers: React.FC = () => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <NotPass />;
  }
  return (
    <>
      <TablerUserShad />
    </>
  );
};

export default TablerUsers;
