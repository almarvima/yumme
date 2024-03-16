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

const ICON_SIZE = "20";

export const menuItems = [
  // TODO: Hacer objeto navegable por clave

  {
    icon: <Home height={ICON_SIZE} />,
    label: "Home ",
    to: "/",
  },
  {
    icon: <Apple height={ICON_SIZE} />,
    label: "Recipes",
    to: "recipe",
  },
  {
    icon: <MessageCircleQuestion height={ICON_SIZE} />,

    label: "About",
    to: "about",
  },
  {
    icon: <Phone height={ICON_SIZE} />,
    label: "Contact",
    to: "contact",
  },
];

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
