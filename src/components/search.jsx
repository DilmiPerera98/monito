import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form className="flex items-center rounded-46 bg-nuetral-0 w-280 h-44 pt-3 pb-3 pl-5 pr-5 gap-3 text-nuetral-40">
      <FaSearch className="font-medium text-sm w-5 h-5" />
      <input
        type="text"
        placeholder="Search something here!"
        className="font-medium text-sm leading-5 bg-transparent focus:outline-none"
      />
    </form>
  );
}
