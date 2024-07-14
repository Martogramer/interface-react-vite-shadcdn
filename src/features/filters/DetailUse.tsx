import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockBlogPosts, mockProducts } from "@/mocks/mocks";
import FilterSearch from "./SearchFilter";

interface Product {
  id: number;
  name: string;
  category: string;
  tags?: string[];
  price: number;
  imageUrl?: string | string[];
}

interface BlogPost {
  id: number;
  title: string;
  content: string;
  tags: string[];
  imageUrl?: string;
}

type SearchableItem = Product | BlogPost;

function isProduct(item: SearchableItem): item is Product {
  return "price" in item;
}

const DetailUse: React.FC = () => {
  const [items, setItems] = useState<SearchableItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<SearchableItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const allItems = [...mockProducts, ...mockBlogPosts];
      setItems(allItems);
      setFilteredItems(allItems);
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2">
      <div>
        <FilterSearch items={items} onFilterChange={setFilteredItems} />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/${isProduct(item) ? "store" : "store"}/${item.id}`}
              className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow"
            >
              {(isProduct(item) ? item.imageUrl : item.imageUrl) && (
                <img
                  src={
                    Array.isArray(item.imageUrl)
                      ? item.imageUrl[0]
                      : item.imageUrl
                  }
                  alt={isProduct(item) ? item.name : item.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
              )}
              {isProduct(item) ? (
                <>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600">{item.category}</p>
                  <p className="text-green-600 font-bold">${item.price}</p>
                  {item.tags && (
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
                  )}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailUse;
