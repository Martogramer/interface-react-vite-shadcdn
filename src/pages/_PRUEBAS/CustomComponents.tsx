import CustomButton from "@/components/_Customs2024/buttons/CustomButton";
import ActionButtonGroup from "@/components/_Customs2024/containers/buttonGroups/ActionButtonGroup";
import CustomGrid from "@/components/_Customs2024/containers/grid/CustomGrid";
import DropdownMenu from "@/components/_Customs2024/dropdown/dropdownSimple/DropdownMenu";
import React from "react";

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
            </div>,
          ]}
        />
      </div>
    </>
  );
};

export default CustomComponents;
