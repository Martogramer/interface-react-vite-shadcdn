interface Promos {
    disclaimer: string;
    altText: string;
    imageUrl: string,
    subtitle: string;
    title: string;
    offerDetails: string;
    link: string;
    linkText: string;
  }
  
  const promos: Promos[] = [
    {
      imageUrl: "https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      altText: "Running shoes",
      subtitle: "Run with the pack",
      title: "Get 20% off",
      offerDetails: "On your next order over $50",
      link: "#",
      linkText: "Get Discount",
      disclaimer: "Offer valid until 24th March, 2021 *"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
      altText: "Fitness gear",
      subtitle: "Fit for the future",
      title: "Save 15%",
      offerDetails: "When you buy two or more items",
      link: "#",
      linkText: "Shop Now",
      disclaimer: "Offer valid until 31st March, 2021 *"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1556228721-c9d5c5360435?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80",
      altText: "Outdoor adventure",
      subtitle: "Gear up and go",
      title: "30% off",
      offerDetails: "On selected outdoor gear",
      link: "#",
      linkText: "Discover More",
      disclaimer: "Offer valid until 15th April, 2021 *"
    }
  ];
  
  
  export default promos;