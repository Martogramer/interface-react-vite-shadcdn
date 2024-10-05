import React from "react";
import DetailDocumentation from "@/features/details/DetailDocumentation";
import { Outlet } from "react-router-dom";
import ResponsiveContainer from "@/components/_Customs2024/containers/ResponsiveContainer";
import CustomTitle from "@/components/_Customs2024/text/CustomTitle";
import CustomParagraph from "@/components/_Customs2024/text/CustomParagraph";

const GuidePage: React.FC = () => {
  return (
    <>
      <ResponsiveContainer padding="p-8" maxWidth="max-w-6xl">
        <CustomTitle>No estar presente online no es una opción.</CustomTitle>
        <CustomParagraph>
          La presencia en línea es fundamental para cualquier negocio en el
          mundo actual. No solo ayuda a llegar a más clientes, sino que también
          establece credibilidad y confianza.
        </CustomParagraph>
        <DetailDocumentation />
        <Outlet />
      </ResponsiveContainer>
    </>
  );
};

export default GuidePage;
