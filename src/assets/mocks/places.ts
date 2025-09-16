interface Places {
  imageUrl: string;
  price: string;
  address: string;
  parkingSpaces: number;
  bathrooms: number;
  bedrooms: number;
}
const places: Places[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    price: "$240,000",
    address: "123 Wallaby Avenue, Park Road",
    parkingSpaces: 2,
    bathrooms: 2,
    bedrooms: 4,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    price: "$310,000",
    address: "456 Elm Street, Maple Town",
    parkingSpaces: 3,
    bathrooms: 3,
    bedrooms: 5,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$450,000",
    address: "789 Oak Drive, Pine City",
    parkingSpaces: 4,
    bathrooms: 4,
    bedrooms: 6,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    price: "$520,000",
    address: "101 Cedar Lane, Spruce Village",
    parkingSpaces: 5,
    bathrooms: 3,
    bedrooms: 5,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
    price: "$610,000",
    address: "202 Birch Road, Willow Town",
    parkingSpaces: 3,
    bathrooms: 4,
    bedrooms: 7,
  },
];
export default places