import { getRecipes } from "../../api";
import RecipeCard from "./RecipeCard";

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
  {
    id: 4,
    title: "Salad",
    description: "Salad with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "Tacos",
    description: "Tacos with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "Sushi",
    description: "Sushi with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "Ramen",
    description: "Ramen with tomato sauce",
    image: "https://via.placeholder.com/150",
  },
];

const Recipes = () => {
  // Ejemplo de implementación de useQuery
  const { data, isLoading, isError } = getRecipes();
  console.log("🚀 ~ Recipes ~ data:", data)

  return (
    <section className="py-8">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-x-8 md:gap-y-16 gap-4">
        
        
        {data && data.recipes.map((recipe) => (
          <RecipeCard
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={recipe.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Recipes;
