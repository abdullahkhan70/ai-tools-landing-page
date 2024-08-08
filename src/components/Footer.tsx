import React from "react";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="flex flex-row flex-wrap items-center justify-center w-full py-6 text-center border-t gap-y-6 gap-x-12 border-blue-gray-50 md:justify-between">
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
        © {year} AI Tools
      </p>
    </footer>
  );
};
