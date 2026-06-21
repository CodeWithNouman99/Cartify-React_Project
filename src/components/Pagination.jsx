import React from "react";

// Generate page numbers
const getPages = (current, total) => {
  const pages = [];

  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }

  return pages;
};

const Pagination = ({ page, pageHandler, totalPages }) => {
  return (
    <div className="mt-10 flex items-center justify-center gap-2">

      {/* Prev Button */}
      <button
        onClick={() => pageHandler(page - 1)}
        disabled={page === 1}
        className={`px-3 py-1 text-sm rounded-md border transition
          ${
            page === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-800 hover:bg-gray-900 hover:text-white"
          }`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {getPages(page, totalPages).map((item, index) => (
        <button
          key={index}
          onClick={() => typeof item === "number" && pageHandler(item)}
          disabled={item === "..."}
          className={`px-3 py-1 text-sm rounded-md border transition
            ${
              item === page
                ? "bg-gray-900 text-white"
                : item === "..."
                ? "bg-transparent border-none cursor-default text-gray-400"
                : "bg-white text-gray-800 hover:bg-gray-900 hover:text-white"
            }`}
        >
          {item}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => pageHandler(page + 1)}
        disabled={page === totalPages}
        className={`px-3 py-1 text-sm rounded-md border transition
          ${
            page === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-800 hover:bg-gray-900 hover:text-white"
          }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;