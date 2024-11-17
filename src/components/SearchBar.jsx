import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // إذا كنت تستخدم React Router للتنقل بين الصفحات

// دالة debounce لتقليل عدد النداءات للـ API أثناء الكتابة
const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // دالة لإجراء البحث
  const performSearch = debounce(async (query) => {
    if (query.trim() !== "") {
      history.push(`/search?query=${query}`);
    }
  }, 500);

  React.useEffect(() => {
    performSearch(searchTerm);
  }, [searchTerm, performSearch]);

  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for a game"
        value={searchTerm} // ربط النص بحالة searchTerm
        onChange={handleSearch} // تحديث النص في حالة searchTerm
      />
    </>
  );
}

export default SearchBar;
