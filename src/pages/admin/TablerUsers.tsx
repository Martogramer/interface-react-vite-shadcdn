import ImageContainer from "@/components/_Customs2024/images/LazyImage";
import { TablerUserShad } from "@/components/tabs/TablerUserShad";
import React from "react";
import { Link } from 'react-router-dom';

const TablerUsers: React.FC = () => {
  //const { isAuthenticated } = useAuthStore();
  /* if (!isAuthenticated) {
    return <NotPass />;
  } */
  return (
    <>
    <ImageContainer />
    <Link to="/admin/protected2">protected2</Link>
      <TablerUserShad />
    </>
  );
};

export default TablerUsers;
