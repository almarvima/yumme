import {
  Apple,
  Home,
  Phone,
  MessageCircleQuestion,
  Carrot,
  Beef,
  Fish,
  Wheat,
  Pizza,
  Salad,
  Croissant,
  Martini,
  Milk,
  Soup,
} from "lucide-react";

// The size of the icons in the category menu.
const ICON_SIZE = "20";

// The routes of the application, are used throughout the whole app, avoiding magic strings.
export const Routes = {
  HOME: "/",
  RECIPE: "/recipe",
  ABOUT: "/about",
  CONTACT: "/contact",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  RECIPES: "/recipes",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  CREATE_RECIPE: "create-recipe",
  USER_PROFILE: "/profile",
  USER_SETTINGS: "/profile/settings",
  USER_RECIPES: "my-recipes",
  FORBIDDEN: "/forbidden",
  ERROR: "/error",
  APPEARANCE: "appearance",
  RESET_PASSWORD: "reset-password",
  DELETE_ACCOUNT: "delete-account",
};

// The items in the main menu.
export const menuItems = [
  {
    icon: <Home height={ICON_SIZE} />,
    label: "Home",
    to: Routes.HOME,
  },
  {
    icon: <Apple height={ICON_SIZE} />,
    label: "Recipes",
    to: Routes.RECIPE,
  },
  {
    icon: <MessageCircleQuestion height={ICON_SIZE} />,

    label: "About",
    to: Routes.ABOUT,
  },
  {
    icon: <Phone height={ICON_SIZE} />,
    label: "Contact",
    to: Routes.CONTACT,
  },
];

// The categories of the recipes.
export const categories = [
  {
    icon: <Carrot height={ICON_SIZE} />,
    label: "Vegan",
    to: "vegan",
  },
  {
    icon: <Carrot height={ICON_SIZE} />,
    label: "Vegetarian",
    to: "vegetarian",
  },
  {
    icon: <Beef height={ICON_SIZE} />,
    label: "Meat",
    to: "meat",
  },
  {
    icon: <Fish height={ICON_SIZE} />,
    label: "Fish",
    to: "fish",
  },
  {
    icon: <Wheat height={ICON_SIZE} />,
    label: "Pasta",
    to: "pasta",
  },
  {
    icon: <Pizza height={ICON_SIZE} />,
    label: "Pizza",
    to: "pizza",
  },

  {
    icon: <Salad height={ICON_SIZE} />,
    label: "Salad",
    to: "salad",
  },
  {
    icon: <Croissant height={ICON_SIZE} />,
    label: "Dessert",
    to: "dessert",
  },
  {
    icon: <Martini height={ICON_SIZE} />,
    label: "Drinks",
    to: "drinks",
  },
  {
    icon: <Milk height={ICON_SIZE} />,
    label: "Breakfast",
    to: "breakfast",
  },

  {
    icon: <Soup height={ICON_SIZE} />,
    label: "Soup",
    to: "soup",
  },
];
