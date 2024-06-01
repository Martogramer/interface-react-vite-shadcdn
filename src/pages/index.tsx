{
  /*
Heads up!👋
 Este componente index.ts se renderiza directamente 
en el layout raìz. 
*/
}
import { fetchUsers } from "@/services/handlers/users/usersAction";
import React, { useEffect, useState } from "react";
import useAuthStore from '@/services/authState';
import { Link } from "react-router-dom";

/* interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  avatar: string | null;
  createdAt: string;
  chatIDs: string[];
} */
const HomePage: React.FC = () => {
  const [error] = useState<string | null>(null);
  //const { currentUser, updateUser } = useContext<any>(AuthContext);
  const usersList =  useAuthStore((state) => state.users)
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80")',
        }}
      >
        <div
          className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
          style={{ backdropFilter: "blur(5px)" }}
        ></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-rose-700">
                {" "}
                Forever Home.{" "}
              </strong>
            </h1>
            <div>
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
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Link
                to="/dashboard"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </Link>

              <Link
                to="#"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
