import React from "react";

const MAX_STAR_RATING = 5;

const Rating = ({ small }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);

  const score = 2;

  return small ? (
    <section className="flex flex-col items-start justify-center gap-6">
      <div className="flex items-center gap-2">
        {[...Array(MAX_STAR_RATING)].map((_, index) => (
          <StarIcon
            key={index}
            className={`size-4 text-yellow-400 ${
              index < score ? "fill-yellow-400" : ""
            }`}
          />
        ))}
      </div>
    </section>
  ) : (
    <section className="flex flex-col items-start justify-center gap-6 py-12 md:py-24">
      <div className="flex items-center gap-2">
        {[...Array(MAX_STAR_RATING)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-8 h-8 text-yellow-400 ${
              index <= hoveredIndex ? "fill-yellow-400" : ""
            } cursor-pointer`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            onClick={() => console.log(index + 1)}
          />
        ))}
      </div>
      <div className="text-base text-muted-foreground">
        {hoveredIndex !== -1
          ? "You've selected " + (hoveredIndex + 1) + " stars"
          : "Hover over the stars to rate this recipe"}
      </div>
    </section>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default Rating;
