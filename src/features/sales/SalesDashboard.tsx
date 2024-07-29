import React, { useEffect, useState } from "react";
import { File, ListFilter } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Order {
  customer: string;
  email: string;
  type: string;
  status: string;
  date: string;
  amount: string;
}

interface SalesDashboardProps {
  title: string;
  description: string;
  weeklyRevenue: string;
  weeklyIncrease: number;
  monthlyRevenue: string;
  monthlyIncrease: number;
  yearlyRevenue: string;
  yearlyIncrease: number;
  orders: Order[];
  onCreateOrder: () => void;
  onExport: () => void;
}

type FilterPeriod = "week" | "month" | "year";

const SalesDashboard: React.FC<SalesDashboardProps> = ({
  title,
  description,
  weeklyRevenue,
  weeklyIncrease,
  monthlyRevenue,
  monthlyIncrease,
  yearlyRevenue,
  yearlyIncrease,
  orders,
  onCreateOrder,
  onExport,
}) => {
  const [filterPeriod, setFilterPeriod] = useState<FilterPeriod>("week");
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(orders);

  useEffect(() => {
    filterOrders(filterPeriod);
  }, [filterPeriod, orders]);

  const filterOrders = (period: FilterPeriod) => {
    const now = new Date();
    let startDate: Date;

    switch (period) {
      case "week":
        startDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 7
        );
        break;
      case "month":
        startDate = new Date(
          now.getFullYear(),
          now.getMonth() - 1,
          now.getDate()
        );
        break;
      case "year":
        startDate = new Date(
          now.getFullYear() - 1,
          now.getMonth(),
          now.getDate()
        );
        break;
    }

    const filtered = orders.filter(
      (order) => new Date(order.date) >= startDate
    );
    setFilteredOrders(filtered);
  };

  const getRevenueData = () => {
    switch (filterPeriod) {
      case "week":
        return { revenue: weeklyRevenue, increase: weeklyIncrease };
      case "month":
        return { revenue: monthlyRevenue, increase: monthlyIncrease };
      case "year":
        return { revenue: yearlyRevenue, increase: yearlyIncrease };
    }
  };

  const { revenue, increase } = getRevenueData();

  return (
    <main className="grid flex-1 ml-16 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle>{title}</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button onClick={onCreateOrder}>Create New Order</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>
                This{" "}
                {filterPeriod.charAt(0).toUpperCase() + filterPeriod.slice(1)}
              </CardDescription>
              <CardTitle className="text-4xl">{revenue}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +{increase}% from last {filterPeriod}
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={increase} aria-label={`${increase}% increase`} />
            </CardFooter>
          </Card>
        </div>
        <Tabs
          defaultValue={filterPeriod}
          onValueChange={(value) => setFilterPeriod(value as FilterPeriod)}
        >
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="week">Week</TabsTrigger>
              <TabsTrigger value="month">Month</TabsTrigger>
              <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                size="sm"
                variant="outline"
                className="h-7 gap-1 text-sm"
                onClick={onExport}
              >
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>
          <TabsContent value={filterPeriod}>
            <Card>
              <CardHeader className="px-7">
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                  Recent orders from your store ({filteredOrders.length} orders)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Type
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Status
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Date
                      </TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order, index) => (
                      <TableRow
                        key={index}
                        className={index % 2 === 0 ? "bg-accent" : ""}
                      >
                        <TableCell>
                          <div className="font-medium">{order.customer}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {order.email}
                          </div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          {order.type}
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge
                            className="text-xs"
                            variant={
                              order.status === "Fulfilled"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {order.date}
                        </TableCell>
                        <TableCell className="text-right">
                          {order.amount}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default SalesDashboard;
