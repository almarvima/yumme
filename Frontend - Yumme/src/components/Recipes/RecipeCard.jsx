import {Badge} from "../ui/badge";

/**
 * Each RecipeCard component is a card that displays the recipe image, title, description, and category.
 * @param {string} id - The id of the recipe.
 * @param {string} image - The image of the recipe.
 * @param {string} title - The title of the recipe.
 * @param {string} description - The description of the recipe.
 * @returns {JSX.Element} - The RecipeCard component.
 */
const RecipeCard = ({ id, image, title, description }) => {
  return (
    <article key={id} className=" flex flex-col gap-2   rounded-md">
      <img
        src={image || "https://via.placeholder.com/260"}
        alt={title}
        className="w-full size-60 object-cover rounded-md aspect-square"
      />
      <h2 className="text-lg border-none font-semibold">{title}</h2>
      <p>{description}</p>
      <Badge variant={"secondary"} className="w-min">
        Category
      </Badge>
    </article>
  );
};

export default RecipeCard;
