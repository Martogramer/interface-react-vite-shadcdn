import React from "react";
import { BackgroundGradientAnimation } from "../../components/ui/background-gradient-animation";
import { useLocation } from "react-router-dom";

const CollaboratorForm = () => (
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSd_cOmISQWxJwdxWCbxBPQW-PBfBtRsZlsJ9Y3sTxYBV8XAMQ/viewform?embedded=true"
    className="rounded-lg shadow-lg max-w-lg mx-auto"
    style={{ border: 0 }}
    width="500"
    height="624"
  >
    Cargando…
  </iframe>
);

// Formulario para clientes
const ClientForm = () => <h1>clientes</h1>;

const ContactPage: React.FC = () => {
  const location = useLocation();

  // Condicional para seleccionar el formulario basado en la ruta
  const renderForm = () => {
    if (location.pathname.includes("contacto/colaboradores")) {
      return <CollaboratorForm />;
    } else if (location.pathname.includes("contacto/clientes")) {
      return <ClientForm />;
    } else {
      return <p className="text-white">Selecciona un tipo de formulario.</p>;
    }
  };
  return (
    <>
      <BackgroundGradientAnimation>
        <div >{renderForm()}</div>
      </BackgroundGradientAnimation>
    </>
  );
};

export default ContactPage;
