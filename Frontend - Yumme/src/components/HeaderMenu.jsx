import { Link } from "react-router-dom";
import { menuItems } from "../constants";

const HeaderMenu = () => {
  return (
    <div className="hidden md:flex gap-4">
      {menuItems.map((item, index) => (
      <Link key={index} to={item.to} className="text-black hover:text-gray-300">
        {item.label}
      </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
