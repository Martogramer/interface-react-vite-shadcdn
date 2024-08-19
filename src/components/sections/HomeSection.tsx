import React from "react";
import CustomGrid from "../_Customs2024/containers/grid/CustomGrid";
import CustomButton from "../_Customs2024/buttons/CustomButton";
import { motion } from "framer-motion";
const backgroundRipple = "https://loading.io/asset/745431";

const HomeSection: React.FC = () => {
  return (
    <div>
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md"
      >
        <div className="container min-h-screen">
          <section
            className="relative flex items-center bg-cover  bg-center bg-no-repeat min-h-screen"
            style={{
              backgroundImage: `url(${backgroundRipple})`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{ backdropFilter: "blur(5px)" }}
            ></div>
            <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:px-8">
              <div className="max-w-xl text-center">
                <h1 className="text-3xl font-sans text-rose-100 sm:text-5xl">
                  Template Frontend
                  <strong className="block font-serif text-rose-600">
                    React + Typescript.{" "}
                  </strong>
                </h1>
                <div className="mt-8 text-center">
                  <CustomGrid
                    columns={2}
                    content={[
                      <div>
                        <div>
                          <CustomButton
                            text="Seccion de Usuarios"
                            href="usuarios"
                            variant="base"
                          />
                        </div>
                      </div>,
                      <div>
                        <div>
                          <CustomButton
                            text="Seccion de Administrador"
                            href="admin"
                            variant="border"
                          />
                        </div>
                      </div>,
                    ]}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeSection;
