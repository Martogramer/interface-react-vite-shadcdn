import { fetchUsers } from "@/services/handlers/users/usersAction";
import React, { useEffect } from "react";
//import useAuthStore from "@/services/authState";
import CustomButton from "@/components/_Customs2024/buttons/CustomButton";
import CustomGrid from "@/components/_Customs2024/containers/grid/CustomGrid";

const HomePage: React.FC = () => {
  /* const [error] = useState<string | null>(null);
  const usersList = useAuthStore((state) => state.users);
 */
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <section
        className="relative flex items-center justify-center bg-cover bg-no-repeat h-screen"
        style={{
          backgroundImage:
            'url("https://cdn.leonardo.ai/users/15e3cba2-5058-43d9-bee5-cec3b95532ca/generations/adedeb3a-a34c-4ac9-a9a7-f68112a56372/Default_Landing_page_brand_branding_Startap_web_innovation_2.jpg")',
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
                {" "}
                React + Typescript.{" "}
              </strong>
            </h1>
            {/* <div>
              {error ? (
                <div>
                  <h2>Error:</h2>
                  <p>{error}</p>
                </div>
              ) : (
                <div>
                  <h2>Users:</h2>
                  <ul>
                    {usersList.map((user) => (
                      <li key={user.id}>{user.username}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}
            <div className="mt-8 text-center">
              <CustomGrid
                columns={2}
                content={[
                  <div>
                    <div>
                      <CustomButton
                        text="Seccion de Usuarios"
                        href="dashboard"
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
  );
};

export default HomePage;
