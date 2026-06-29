import {
  Truck,
  CircleCheckBig,
  CircleX,
  DollarSign,
  TrendingUp,
} from "lucide-react";

import StatCard from "./StatCard";

const DashboardStats = ({ stats }) => {
  const cards = [
{
 title:"Total Trucks",
 value:stats.totalTrucks,
 icon:Truck,
 iconBg:"bg-blue-100",
 iconColor:"text-blue-600",
 change:"All inventory",
 changeColor:"text-blue-600"
},

{
 title:"Available",
 value:stats.available,
 icon:CircleCheckBig,
 iconBg:"bg-green-100",
 iconColor:"text-green-600",
 change:"Ready for sale",
 changeColor:"text-green-600"
},

{
 title:"Sold",
 value:stats.sold,
 icon:CircleX,
 iconBg:"bg-red-100",
 iconColor:"text-red-500",
 change:"Completed sales",
 changeColor:"text-red-500"
},

{
 title:"Inventory Value",
 value:`$${stats.inventoryValue.toLocaleString()}`,
 icon:DollarSign,
 iconBg:"bg-orange-100",
 iconColor:"text-orange-500",
 change:"Current value",
 changeColor:"text-orange-500"
},
];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
          group
          rounded-2xl
          bg-white
          p-6
          shadow-sm
          border
          border-slate-100
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
          "
        >
          <div className="flex items-start justify-between">
            {/* Icon */}

            <div
              className={`
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              ${card.iconBg}
              `}
            >
              <card.icon size={28} className={card.iconColor} />
            </div>

            <div
              className="
              flex
              items-center
              gap-1
              rounded-full
              bg-slate-100
              px-3
              py-1
              text-xs
              font-semibold
              text-slate-600
              "
            >
              <TrendingUp size={13} />
              Active
            </div>
          </div>

          {/* Content */}

          <div className="mt-6">
            <p className="text-sm font-medium text-slate-500">{card.title}</p>

            <h2
              className="
              mt-2
              text-3xl
              font-bold
              tracking-tight
              text-slate-800
              "
            >
              {card.value}
            </h2>

            <p
              className={`
              mt-3
              text-sm
              font-semibold
              ${card.changeColor}
              `}
            >
              {card.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
