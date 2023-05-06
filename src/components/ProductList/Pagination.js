import React from "react";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-5 justify-center">
      {pages.map((page, index) => {
        return (
          <button
            className="bg-gray-600 w-7 h-7 rounded-lg"
            key={index}
            onClick={() => setCurrentPage(page)}
          >
            {" "}
            {page}{" "}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
