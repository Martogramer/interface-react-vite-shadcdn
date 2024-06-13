/* 
  ! ATENCION ESTE COMPONENTE RENDERIZA EN LA RUTA /_PRUEBAS 
*/
import CustomButton from "@/components/_Customs2024/buttons/CustomButton";
import ActionButtonGroup from "@/components/_Customs2024/containers/buttonGroups/ActionButtonGroup";
import CustomGrid from "@/components/_Customs2024/containers/grid/CustomGrid";
import DropdownMenu from "@/components/_Customs2024/dropdown/dropdownSimple/DropdownMenu";
import React from "react";
import CodeEditor from "../../components/_Customs2024/textareas/CodeEditor";
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
            </div>,
            <div>
              <div>
                <DropdownMenu items={menuItems} />
              </div>
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
          ]}
        />
      </div>
    </>
  );
};

export default CustomComponents;
