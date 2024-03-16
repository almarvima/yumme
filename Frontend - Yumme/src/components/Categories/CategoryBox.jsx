import React from "react";

/**
 *
 * This component is the individual category box that is displayed in the Carousel.
 * @param {*} category
 * @returns The CategoryBox component.
 */
const CategoryBox = ({ category }) => {
  return (
    <div className="flex cursor-pointer pb-2    flex-col items-center justify-center gap-2">
      {category.icon}
      <span className="text-gray-900 text-sm truncate">{category.label}</span>
    </div>
  );
};

export default CategoryBox;
