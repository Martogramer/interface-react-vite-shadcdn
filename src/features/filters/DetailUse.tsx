import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { mockBlogPostsMultiple, mockProducts } from "@/mocks/mocks";
import FilterSearch from "./SearchFilter";

interface Product {
  id: number;
  name: string;
  category: string;
  tags?: string[];
  price: number;
  imageUrl?: string | string[];
}

interface BlogPostMultiple {
  id: number;
  elements: {
    type: 'title' | 'paragraph';
    content: string;
  }[];
  tags: string[];
  author: string;
  publishDate: string;
}

type SearchableItem = Product | BlogPostMultiple;

function isProduct(item: SearchableItem): item is Product {
  return "price" in item;
}

const DetailUse: React.FC = () => {
  const [items, setItems] = useState<SearchableItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<SearchableItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const allItems = [...mockProducts, ...mockBlogPostsMultiple];
      setItems(allItems);
      setFilteredItems(allItems);
    };

    fetchData();
  }, []);

  const handleFilterChange = (newFilteredItems: SearchableItem[]) => {
    setFilteredItems(newFilteredItems);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-2">
      <div>
        <FilterSearch items={items} onFilterChange={handleFilterChange} />
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <Link
              key={item.id}
              to={`/${isProduct(item) ? "usuarios/rpfdu" : "usuarios/foro"}/${item.id}`}
              className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow"
            >
              {isProduct(item) ? (
                <>
                  {item.imageUrl && (
                    <img
                      src={Array.isArray(item.imageUrl) ? item.imageUrl[0] : item.imageUrl}
                      alt={item.name}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                  )}
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
                  <h2 className="text-xl font-bold">
                    {item.elements.find(el => el.type === 'title')?.content || 'Sin título'}
                  </h2>
                  <p className="text-gray-600">
                    {item.elements.find(el => el.type === 'paragraph')?.content.substring(0, 100) || ''}...
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Por {item.author} | {item.publishDate}
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