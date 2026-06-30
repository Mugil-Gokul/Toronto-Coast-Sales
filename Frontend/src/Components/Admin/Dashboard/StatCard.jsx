import { ArrowUpRight } from "lucide-react";

const StatCard = ({
  title,
  value,
  icon: Icon,
  iconBg = "bg-blue-100",
  iconColor = "text-blue-600",
  change,
  changeColor = "text-green-600",
}) => {
  return (
    <div
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-slate-100
      bg-white
      p-5
      sm:p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      {/* Background Decoration */}

      <div
        className="
        absolute
        -right-10
        -top-10
        h-36
        w-36
        rounded-full
        bg-slate-50
        transition-all
        duration-500
        group-hover:scale-150
        "
      />

      <div
        className="
        relative
        flex
        items-start
        justify-between
        "
      >
        {/* Content */}

        <div>
          <p
            className="
            text-sm
            font-medium
            text-slate-500
            "
          >
            {title}
          </p>

          <h2
            className="
            mt-3
            text-3xl
            sm:text-4xl
            font-extrabold
            tracking-tight
            text-slate-900
            "
          >
            {value}
          </h2>

          {change && (
            <div
              className={`
              mt-4
              flex
              items-center
              gap-1
              text-sm
              font-semibold
              ${changeColor}
              `}
            >
              <ArrowUpRight size={16} />

              {change}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
