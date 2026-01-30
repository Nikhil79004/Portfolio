import React, { useEffect, useState } from "react";

const ToggleTheme = () => {


  const [theme, setTheme] = useState(() => {
    // Tries to load saved theme, defaults to "light"
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.body;
    if (theme === "dark") {
      root.classList.add("bg-black", "text-white");
      root.classList.remove("bg-white", "text-black");
    } else {
      root.classList.add("bg-white", "text-black");
      root.classList.remove("bg-black", "text-white");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 transition-all duration-300"
      aria-label="Toggle dark mode"
    >
      {theme === "dark" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-yellow-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5-7.5L17 6m-10 12l-1.5 1.5M6 6l1.5 1.5M18 18l1.5 1.5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"
          />
        </svg>
      )}
    </button>
  );
};

export default ToggleTheme;
