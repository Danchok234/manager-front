"use client";

import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";

export default function Search() {
  const [input, setInput] = useState("");

  return (
    <div className={"bg-[#f5f5f5] flex items-center h-[44px] rounded-md w-1/3"}>
      <SearchIcon width={24} height={24} className={"text-grey_basic ml-2 min-h-[24px] min-w-[24px]"} />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for anything..."
        className="outline-none bg-transparent pl-4 placeholder:text-sm w-full h-full"
      />
    </div>
  );
}
