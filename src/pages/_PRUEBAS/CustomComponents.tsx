/* 
  ! ATENCION ESTE COMPONENTE RENDERIZA EN LA RUTA /_PRUEBAS 
*/
import CustomButton from "@/components/_Customs2024/buttons/CustomButton";
import ActionButtonGroup from "@/components/_Customs2024/containers/buttonGroups/ActionButtonGroup";
import CustomGrid from "@/components/_Customs2024/containers/grid/CustomGrid";
import DropdownMenu from "@/components/_Customs2024/dropdown/dropdownSimple/DropdownMenu";
import React from "react";
import CodeEditor from "../../components/_Customs2024/textareas/CodeEditor";
import ProfileCard from "@/components/_Customs2024/cards/ProfileCard";
import PropertyCard from "@/components/_Customs2024/cards/PlacesCard";
import users from "@/mocks/users";
import places from "@/mocks/places";
type ItemType = {
  label: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "link";
};

const menuItems: ItemType[] = [
  { label: "View on Storefront", href: "#" },
  { label: "View Warehouse Info", href: "#" },
  { label: "Duplicate Product", href: "#" },
  { label: "Unpublish Product", href: "#" },
  {
    label: "Delete Product",
    onClick: () => alert("Product Deleted"),
    type: "button",
  },
];

const CustomComponents: React.FC = () => {
  const selectedUsers = users.slice(0, 2);
  const selectedPlaces = places.slice(0, 2);
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <CustomGrid
          columns={2}
          content={[
            <div>
              <div>
                <CustomButton text="Download Base" href="#" variant="base" />
              </div>
              <div>
                <ActionButtonGroup />
              </div>
              <div>
                <DropdownMenu items={menuItems} />
              </div>
            </div>,
            <div>
              <div>
                <CodeEditor
                  initialCode={`   <div className="code-editor">
      <textarea
        value={code}
        onChange={handleCodeChange}
        className="w-full h-40 p-2 border rounded"
        placeholder="Escribe tu código aquí..."
      ></textarea>
      <div className="mt-4">
        <SyntaxHighlighter language={language} style={okaidia}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>`}
                  language="javascript"
                />
              </div>
            </div>,
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {selectedUsers.map((user) => (
                <ProfileCard
                  key={user.id}
                  title={`Article by ${user.username}`}
                  author={user.username}
                  date={new Date(user.createdAt).toLocaleDateString()}
                  readingTime="3 minutes"
                  avatar={user.avatar}
                />
              ))}
            </div>,
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
              {selectedPlaces.map((place, index) => (
                <PropertyCard
                  key={index}
                  imageUrl={place.imageUrl}
                  price={place.price}
                  address={place.address}
                  parkingSpaces={place.parkingSpaces}
                  bathrooms={place.bathrooms}
                  bedrooms={place.bedrooms}
                />
              ))}
            </div>,
          ]}
        />
      </div>
    </>
  );
};

export default CustomComponents;
