import React from "react";
import { Button } from "../ui/button.tsx";
import { useSearchParams } from "react-router-dom";

const CategoryBox = ({ category }) => {


  return (
    <div
      
      className="flex cursor-pointer pb-2    flex-col items-center justify-center gap-2"
    >
      {category.icon}
      <span className="text-gray-900 text-sm truncate">{category.label}</span>
    </div>
  );
};

export default CategoryBox;
