// import React, { useContext } from "react";
// import { ThemeContext } from "../provider/ThemeContext";

// const ThemeToggleButton = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button
//       onClick={toggleTheme}
//       className="p-2 bg-gray-300 dark:bg-gray-700 rounded"
//     >
//       {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
//     </button>
//   );
// };

// export default ThemeToggleButton;


// import React, { useContext } from "react";
// import { ThemeContext } from "../provider/ThemeContext";
// import { FaMoon, FaSun } from "react-icons/fa";

// const ThemeToggleButton = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button
//       onClick={toggleTheme}
//       className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
//     >
//       <div
//         className={`absolute w-6 h-6 bg-white dark:bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 ${
//           theme === "light" ? "translate-x-1" : "translate-x-8"
//         }`}
//       />
//       <FaSun
//         className={`absolute left-3 text-gray-500 dark:text-gray-300 transition-opacity duration-300 ${
//           theme === "light" ? "opacity-100" : "opacity-0"
//         }`}
//       />
//       <FaMoon
//         className={`absolute right-2 text-gray-500 dark:text-gray-300 transition-opacity duration-300 ${
//           theme === "dark" ? "opacity-100" : "opacity-0"
//         }`}
//       />
//     </button>
//   );
// };

// export default ThemeToggleButton;


import React, { useContext } from "react";
import { ThemeContext } from "../provider/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-8 flex items-center bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-300"
    >
      <div
        className={`absolute w-6 h-6 bg-white dark:bg-yellow-500 rounded-full shadow-md transform transition-transform duration-300 ${
          theme === "light" ? "translate-x-1" : "translate-x-8"
        }`}
      />
      <FaSun
        className={`absolute left-3 text-gray-500 dark:text-yellow-300 transition-opacity duration-300 ${
          theme === "light" ? "opacity-100" : "opacity-0"
        }`}
      />
      <FaMoon
        className={`absolute right-2 text-gray-500 dark:text-gray-300 transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
};

export default ThemeToggleButton;
