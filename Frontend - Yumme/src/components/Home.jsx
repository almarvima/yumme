import React from "react";

const mockRecipes = [
  {
    id: 1,
    title: "Pasta",
    description: "Pasta with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Pizza",
    description: "Pizza with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Burger",
    description: "Burger with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
];

export const Home = () => {
  return (
    <div className="flex flex-col gap-4">
      <section>hero section</section>
      <section>
        {
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-8 gap-4">
            
            {/* TODO: CARTA DE SHADCN */}
            {mockRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white flex flex-col gap-2 shadow-md p-4 rounded-md"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <h2 className="text-lg font-semibold">{recipe.title}</h2>
                <p>{recipe.description}</p>
              </div>
            ))}
          </div>
        }
      </section>
    </div>
  );
};
