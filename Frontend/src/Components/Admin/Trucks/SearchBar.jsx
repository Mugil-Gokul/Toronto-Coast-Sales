import { Search } from "lucide-react";

const SearchBar = ({ value, onChange, placeholder = "Search trucks..." }) => {
  return (
    <div
      className="
      relative
      w-full
      max-w-md
      group
      "
    >
      <Search
        size={18}
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-slate-400
        transition
        group-focus-within:text-orange-500
        "
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        w-full
        rounded-xl
        border
        border-slate-200
        bg-slate-50
        py-3
        pl-11
        pr-4
        text-sm
        text-slate-700
        outline-none
        transition-all
        duration-300
        hover:bg-white
        focus:border-orange-500
        focus:bg-white
        focus:ring-4
        focus:ring-orange-100
        "
      />
    </div>
  );
};

export default SearchBar;
