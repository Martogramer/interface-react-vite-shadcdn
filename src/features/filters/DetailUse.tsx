// src/pages/StoreHomePage.tsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockBlogPosts, mockProducts } from '@/mocks/mocks';
import FilterSearch from './SearchFilter';
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
  
const DetailUse: React.FC = () => {
  const [items, setItems] = useState<SearchableItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<SearchableItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const allItems = [...mockProducts, ...mockBlogPosts];
      setItems(allItems);
      setFilteredItems(allItems);
    };

    fetchData();
  }, []);

  return (
    <div>
      <FilterSearch items={items} onFilterChange={setFilteredItems} />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <Link 
            key={item.id} 
            to={isProduct(item) ? `${item.id}` : `${item.id}`}
            className="p-4 bg-white rounded shadow hover:shadow-lg transition-shadow"
          >
            {isProduct(item) ? (
              <>
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-gray-600">{item.category}</p>
                <p className="text-green-600 font-bold">${item.price}</p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.content.substring(0, 100)}...</p>
                <div className="mt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
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
  );
};

function isProduct(item: SearchableItem): item is Product {
  return 'price' in item;
}

export default DetailUse;