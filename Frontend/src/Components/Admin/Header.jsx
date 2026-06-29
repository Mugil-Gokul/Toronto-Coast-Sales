import { Bell, Search, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome back, Administrator 👋
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Search */}

        {/* <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-300 py-3 pl-11 pr-4 outline-none transition focus:border-orange-500"
          />

        </div> */}

        {/* Notification */}

        {/* <button className="relative rounded-xl bg-slate-100 p-3 transition hover:bg-orange-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-orange-500"></span>

        </button> */}

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-xl bg-slate-100 px-4 py-2">

          <UserCircle
            size={38}
            className="text-orange-500"
          />

          <div>

            <h3 className="font-semibold text-slate-800">
              Administrator
            </h3>

            <p className="text-xs text-slate-500">
              admin@torontocoast.com
            </p>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;