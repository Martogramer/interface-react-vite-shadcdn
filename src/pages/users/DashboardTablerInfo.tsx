import SalesDashboard from "@/features/sales/SalesDashboard";

/* 
/dashboard/dashboard
*/
const DashboardTablerInfo: React.FC = () => {
  const orders = [
    {
      customer: "Liam Johnson",
      email: "liam@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2023-06-23",
      amount: "$250.00",
    },
    {
      customer: "Olivia Smith",
      email: "olivia@example.com",
      type: "Refund",
      status: "Declined",
      date: "2023-06-24",
      amount: "$150.00",
    },
    {
      customer: "Noah Williams",
      email: "noah@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2023-12-15",
      amount: "$320.00",
    },
    {
      customer: "Emma Brown",
      email: "emma@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2024-01-05",
      amount: "$180.00",
    },
    {
      customer: "James Davis",
      email: "james@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2024-01-12",
      amount: "$420.00",
    },
    {
      customer: "Sophia Miller",
      email: "sophia@example.com",
      type: "Refund",
      status: "Processed",
      date: "2024-01-20",
      amount: "$95.00",
    },
    {
      customer: "Lucas Wilson",
      email: "lucas@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2024-02-03",
      amount: "$275.00",
    },
    {
      customer: "Ava Taylor",
      email: "ava@example.com",
      type: "Sale",
      status: "Pending",
      date: "2024-07-14",
      amount: "$310.00",
    },
    {
      customer: "Ethan Anderson",
      email: "ethan@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2024-07-26",
      amount: "$190.00",
    },
    {
      customer: "Mia Thomas",
      email: "mia@example.com",
      type: "Refund",
      status: "Processed",
      date: "2024-03-10",
      amount: "$130.00",
    },
  ];
  return (
    <>
      <SalesDashboard
        title="Your Orders"
        description="Introducing Our Dynamic Orders Dashboard for Seamless Management and Insightful Analysis."
        weeklyRevenue="$1,329"
        weeklyIncrease={25}
        monthlyRevenue="$5,329"
        monthlyIncrease={10}
        yearlyRevenue="$63,948"
        yearlyIncrease={15}
        orders={orders}
        onCreateOrder={() => console.log("Creating new order")}
        onExport={() => console.log("Exporting data")}
      />
    </>
  );
};
export default DashboardTablerInfo;
