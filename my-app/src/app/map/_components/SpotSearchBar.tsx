

"use client";
import { useState } from "react";

interface SpotSearchBarProps {
  onSearch: (keyword: string) => void;
}

const SpotSearchBar = ({ onSearch }: SpotSearchBarProps) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    if (searchInput.trim() === "") return;
    onSearch(searchInput);
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        type="text"
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter") handleSearch(); }}
        placeholder="당신이 원하는 지역명 또는 장소명을 입력하세요"
        className="border rounded px-3 py-2 w-64"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        검색
      </button>
    </div>
  );
};

export default SpotSearchBar;