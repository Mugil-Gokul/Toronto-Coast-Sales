import {
  Truck,
  CircleCheckBig,
  CircleX,
  DollarSign,
  TrendingUp,
} from "lucide-react";

const DashboardStats = ({ stats }) => {
  const cards = [
    {
      title: "Total Trucks",
      value: stats?.totalTrucks || 0,
      icon: Truck,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      change: "All inventory",
      changeColor: "text-blue-600",
    },

    {
      title: "Available",
      value: stats?.available || 0,
      icon: CircleCheckBig,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      change: "Ready for sale",
      changeColor: "text-green-600",
    },

    {
      title: "Sold",
      value: stats?.sold || 0,
      icon: CircleX,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      change: "Completed sales",
      changeColor: "text-red-500",
    },

    {
      title: "Inventory Value",
      value: `$${(stats?.inventoryValue || 0).toLocaleString()}`,
      icon: DollarSign,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
      change: "Current value",
      changeColor: "text-orange-500",
    },
  ];

  return (
    <div
      className="
      grid
      gap-5
      grid-cols-1
      sm:grid-cols-2
      xl:grid-cols-4
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
            group
            rounded-2xl
            bg-white
            p-5
            sm:p-6
            border
            border-slate-100
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
            "
          >
            <div
              className="
              flex
              items-start
              justify-between
              "
            >
              {/* Icon */}

              <div
                className={`
                flex
                h-12
                w-12
                sm:h-14
                sm:w-14
                items-center
                justify-center
                rounded-2xl
                ${card.iconBg}
                transition
                duration-300
                group-hover:scale-110
                `}
              >
                <Icon size={26} className={card.iconColor} />
              </div>

              {/* Status */}

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

            {/* Text */}

            <div className="mt-5">
              <p
                className="
                text-sm
                font-medium
                text-slate-500
                "
              >
                {card.title}
              </p>

              <h2
                className="
                mt-2
                text-2xl
                sm:text-3xl
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
        );
      })}
    </div>
  );
};

export default DashboardStats;
