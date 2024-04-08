import { Clock, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Routes } from '../../constants';
import { Badge } from '../ui/badge';

/**
 * Each RecipeCard component is a card that displays the recipe image, title, description, and category.
 * @param {string} id - The id of the recipe.
 * @param {string} image - The image of the recipe.
 * @param {string} title - The title of the recipe.
 * @param {string} description - The description of the recipe.
 * @returns {JSX.Element} - The RecipeCard component.
 */
const RecipeCard = ({
  id,
  image,
  title,
  description,
  cookingTime,
  perPerson,
  category,
}) => {
  return (
    <Link
      to={`${Routes.RECIPE}/${id}`}
      key={id}
      className="border bg-card text-card-foreground shadow-sm flex flex-col w-full rounded-md"
    >
      <img
        src={image || "https://via.placeholder.com/260"}
        alt={title}
        className="w-full  object-cover rounded-t-md aspect-square"
      />
      <div className="px-6 py-4 flex flex-col gap-4">
        <div className="space-y-2">
          <h2 className="text-lg border-none font-semibold">{title}</h2>
          <p className="line-clamp-3 max-w-[80ch] text-xs text-muted-foreground">
            {description} 
          </p>
        </div>
        <div className="flex gap-4">
          <Badge variant={"outline"} className="flex gap-2 py-1 max-w-max">
            <Clock className="size-4" /> {cookingTime} min
          </Badge>
          <Badge variant={"outline"} className="flex gap-2 py-1 max-w-max">
            <Users2 className="size-4" /> {perPerson}
          </Badge>
        </div>

        <Badge variant={"secondary"} className="w-min">
          {category}
        </Badge>
      </div>
    </Link>
  );
};

export default RecipeCard;
