import { Stars } from "lucide-react";
import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRecipes } from "@/api/recipes";
import { queryClient } from "@/config";
import { useAuth } from "@/auth";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Link } from "react-router-dom";
import { Routes } from "@/constants";
import { useToast } from "@/components/ui/use-toast";

const MAX_STAR_RATING = 5;

/**
 * Rating component - A component that displays the rating of a recipe
 * @param {boolean} small - If the rating is small, it will be displayed in a smaller size, it suits good on the recipe card
 * @returns {JSX.Element} Rating component
 */
const Rating = ({ small, score, recipeId }) => {
  const [hoveredIndex, setHoveredIndex] = React.useState(-1);
  const [userScore, setUserScore] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  
  const averageScore =
    score?.reduce((acc, curr) => acc + curr.score, 0) / score?.length;

  const encodedData = localStorage.getItem("user-token");

  useEffect(() => {
    if (encodedData && !small) {
      const decodedData = jwtDecode(encodedData);
      const userName = decodedData?.sub;
      setUserScore(score?.find((s) => s.userName === userName)?.score);
    }
  }, [encodedData, score, small]);

  const { userIsAuthenticated } = useAuth();
  // const userScore = score?.find((s) => s.userName === userName)?.score;

  const { voteRecipe } = useRecipes();

  const { mutate } = voteRecipe();

  const { toast } = useToast();

  return small ? (
    <section className="flex flex-col items-start justify-center gap-6">
      <div className="flex items-center gap-2">
        {[...Array(MAX_STAR_RATING)].map((_, index) => (
          <StarIcon
            key={index}
            className={`size-4 text-yellow-400 ${
              index < averageScore ? "fill-yellow-400" : ""
            }`}
          />
        ))}
        <span className="text-xs">({score?.length})</span>
      </div>
    </section>
  ) : (
    <section className="flex flex-col items-start justify-center gap-6 py-12 md:py-24">
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Create an account to rate your favorite recipes
            </AlertDialogTitle>
            <AlertDialogDescription>
              You need to be logged in to rate this recipe. Click the button
              below to login.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>
              <Link to={Routes.SIGN_IN}>Login</Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <p className="lg:text-xl text-base font-medium flex">
        Your rating <Stars className="fill-yellow-400 text-yellow-500" />
      </p>
      <div className="flex items-center gap-2">
        {[...Array(MAX_STAR_RATING)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-8 h-8 text-yellow-400 ${
              index <= (userScore ? userScore - 1 : hoveredIndex)
                ? "fill-yellow-400"
                : ""
            } cursor-pointer`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(-1)}
            onClick={() => {
              userScore
                ? null
                : userIsAuthenticated()
                ? mutate(
                    { id: recipeId, score: index + 1 },
                    {
                      onSuccess: () => {
                        toast({
                          title: "Yay!",
                          description: "You've successfully rated this recipe 🌟",
                        });
                        queryClient.invalidateQueries({
                          queryKey: ["recipe", recipeId],
                        });
                      },
                    }
                  )
                : setIsDialogOpen(true);
            }}
          />
        ))}
      </div>
      <div className="text-base text-muted-foreground">
        {/*  */}
        {userScore
          ? `You've rated this recipe ${userScore} stars`
          : hoveredIndex !== -1
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
