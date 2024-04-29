import React from "react";
import myImage from "../../images/500.png";

/**
 * UnexpectedError component - A component that displays the unexpected error page of the website
 * @returns {JSX.Element} UnexpectedError component
 */
const UnexpectedError = () => {
  return (
    <div className="flex flex-col items-center justify-center my-4 p-4 md:pt-10">
      <h2 className="text-6xl font-bold mb-6">Error</h2>
      <p className="mb-6 text-lg">
        Sorry! We just encountered an unexpected error.
      </p>
      <img
        className="w-3/4 max-w-2xl mx-auto shadow-2xl"
        src={myImage}
        alt="Unexpected Error"
      />
    </div>
  );
};

export default UnexpectedError;
