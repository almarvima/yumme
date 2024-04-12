import { Clock, Users2, Eye, Trash } from "lucide-react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "../ui/dialog";

import { Button } from "../ui/button";

import { buttonVariants } from "../ui/button";
import { useRecipes } from "../../api/recipes";
import { useState } from "react";
/**
 * Each UploadedRecipe component is a card that displays the recipe image, title, description, and category.
 * @param {string} id - The id of the recipe.
 * @param {string} image - The image of the recipe.
 * @param {string} title - The title of the recipe.
 * @param {string} description - The description of the recipe.
 * @returns {JSX.Element} - The UploadedRecipe component.
 */
const UploadedRecipe = ({
  id,
  image,
  title,
  description,
  cookingTime,
  perPerson,
  category,
}) => {
  const { deleteRecipe } = useRecipes();
  const { mutate } = deleteRecipe();

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    mutate(id, {
      // todo
      onSuccess: (data) => {
        console.log("Recipe deleted successfully");
        setIsOpen(false);
      },

      onError: () => {
        console.log("Error deleting recipe");
      },
    });
  };

  return (
    <div className="border  bg-card text-card-foreground  transition-transform shadow-sm flex flex-col w-full rounded-md">
      <img
        src={image || "https://via.placeholder.com/260"}
        alt={title}
        className="w-full object-cover rounded-t-md aspect-square"
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

        <div className=" w-full flex justify-between">
          <Badge variant={"secondary"} className="h-4 py-2.5 px-4 text-xs">
            {category}
          </Badge>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-ellipsis-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="center">
                <DropdownMenuLabel>{title} </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link
                    className="flex gap-2 text-sm items-center"
                    to={`${Routes.RECIPE}/${id}`}
                  >
                    <Eye className="size-4" /> View
                  </Link>
                </DropdownMenuItem>
                <DialogTrigger className="w-full">
                  <DropdownMenuItem
                    className={buttonVariants({
                      variant: "ghost",
                      size: "sm",
                      className:
                        "text-destructive w-full flex items-center gap-2 px-2 justify-start ",
                    })}
                  >
                    <Trash color="hsl(var(--destructive))" className="size-4" />
                    Delete
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. Are you sure you want to
                  permanently delete this file from our servers?
                </DialogDescription>
              </DialogHeader>
              <DialogFooter className=" gap-4 sm:gap-0">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
                <Button
                  onClick={handleDelete}
                  type="submit"
                  variant="destructive"
                >
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default UploadedRecipe;
