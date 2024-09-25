import React, { useState, useMemo } from "react";

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

interface FilterSearchProps {
  items: SearchableItem[];
  onFilterChange: (filteredItems: SearchableItem[]) => void;
}

const FilterSearch: React.FC<FilterSearchProps> = ({
  items,
  onFilterChange,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    items.forEach((item) => {
      if ("category" in item) {
        cats.add(item.category);
      } else if ("tags" in item) {
        item.tags.forEach((tag) => cats.add(tag));
      }
    });
    return ["all", ...Array.from(cats)];
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        ("name" in item &&
          item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        ("title" in item &&
          item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        ("content" in item &&
          item.content.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory =
        selectedCategory === "all" ||
        ("category" in item && item.category === selectedCategory) ||
        ("tags" in item && item.tags.includes(selectedCategory));

      return matchesSearch && matchesCategory;
    });
  }, [items, searchTerm, selectedCategory]);

  React.useEffect(() => {
    onFilterChange(filteredItems);
  }, [filteredItems, onFilterChange]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterSearch;
