import StatsSection from "@/components/sections/StatsSection";

const HomeUser: React.FC = () => {
    const careerPathData = {
        title: "Find your career path",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis minima aliquid tempora. Obcaecati, autem.",
        ctaText: "Get Started Today",
        ctaLink: "#",
        careers: [
            {
              title: "Accountant",
              description: "Lorem ipsum dolor sit amet consectetur.",
              link: "#"
            },
            {
              title: "Accountant",
              description: "Lorem ipsum dolor sit amet consectetur.",
              link: "#"
            },
            {
              title: "Accountant",
              description: "Lorem ipsum dolor sit amet consectetur.",
              link: "#"
            },
            {
              title: "Accountant",
              description: "Lorem ipsum dolor sit amet consectetur.",
              link: "#"
            },
            {
              title: "Accountant",
              description: "Lorem ipsum dolor sit amet consectetur.",
              link: "#"
            },
            {
              title: "Accountant",
              description: "Lorem ipsum dolor sit amet consectetur.",
              link: "#"
            },
            
      ]
    };
  
    return (
      <StatsSection {...careerPathData} />
    );
  };
  
  export default HomeUser;