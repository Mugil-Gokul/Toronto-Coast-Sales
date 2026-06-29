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
      p-6
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      "
    >
      {/* Decorative background */}

      <div
        className="
        absolute
        -right-8
        -top-8
        h-32
        w-32
        rounded-full
        bg-slate-50
        transition
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
        {/* Text */}

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
            text-4xl
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

        {/* Icon */}

        <div
          className={`
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          ${iconBg}
          `}
        >
          <Icon size={30} className={iconColor} />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
