import { UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header
      className="
        sticky top-0 z-30
        flex h-20
        items-center justify-between
        border-b border-slate-200
        bg-white
        px-4 md:px-8
      "
    >
      {/* Left Section */}

      <div>
        <h1
          className="
            text-xl
            font-bold
            text-slate-800
            md:text-2xl
          "
        >
          Dashboard
        </h1>

        <p
          className="
            hidden
            text-sm
            text-slate-500
            sm:block
          "
        >
          Welcome back, Administrator 👋
        </p>
      </div>

      {/* Right Section */}

      <div className="flex items-center gap-3 md:gap-6">
        {/* Profile */}

        <div
          className="
            flex
            items-center
            gap-2
            rounded-xl
            bg-slate-100
            px-3 py-2

            md:px-4
          "
        >
          <UserCircle
            size={34}
            className="text-orange-500 md:h-[38px] md:w-[38px]"
          />

          <div className="hidden sm:block">
            <h3 className="font-semibold text-slate-800">Administrator</h3>

            <p className="text-xs text-slate-500">admin@torontocoast.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
