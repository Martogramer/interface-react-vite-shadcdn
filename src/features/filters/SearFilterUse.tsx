import React, { useState, useEffect } from "react";
import FilterSearch from "./SearchFilter";
import { mockBlogPosts, mockProducts } from "@/mocks/mocks";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
}
type SearchableItem = Product | BlogPost;

const SearchFilterUse: React.FC = () => {
  const [items, setItems] = useState<SearchableItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<SearchableItem[]>([]);

  useEffect(() => {
    // Simulamos una carga asíncrona de datos
    const fetchData = async () => {
      // En un escenario real, aquí harías una llamada a tu API
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula un delay de red
      const allItems = [...mockProducts, ...mockBlogPosts];
      setItems(allItems);
      setFilteredItems(allItems); // Inicialmente, mostramos todos los items
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <FilterSearch items={items} onFilterChange={setFilteredItems} />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="p-4 bg-white rounded shadow">
            {isProduct(item) ? (
              <>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.category}</p>
                <p className="text-green-600 font-bold">${item.price}</p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600">
                  {item.content.substring(0, 100)}...
                </p>
                <div className="mt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Type guard para distinguir entre Product y BlogPost
function isProduct(item: SearchableItem): item is Product {
  return "price" in item;
}

export default SearchFilterUse;
