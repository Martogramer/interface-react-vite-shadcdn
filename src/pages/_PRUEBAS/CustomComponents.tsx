/* 
  ! ATENCION ESTE COMPONENTE RENDERIZA EN LA RUTA /_PRUEBAS 
*/
import CustomButton from "@/components/_Customs2024/buttons/CustomButton";
import ActionButtonGroup from "@/components/_Customs2024/containers/buttonGroups/ActionButtonGroup";
import CustomGrid from "@/components/_Customs2024/containers/grid/CustomGrid";
import DropdownMenu from "@/components/_Customs2024/dropdown/dropdownSimple/DropdownMenu";
import React from "react";
import CodeEditor from "../../components/_Customs2024/textareas/CodeEditor";
import ArticleCard from "@/components/_Customs2024/cards/ProfileCard";
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
            <div>
              
              <ArticleCard
                title="Building a SaaS product as a software developer"
                author="John Doe"
                imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores deleniti consectetur nobis et eaque."
                publishedDate="31st June, 2021"
                readingTime="3 minute"
                href="#"
              />
            </div>,
          ]}
        />
      </div>
    </>
  );
};

export default CustomComponents;
