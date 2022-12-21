import React from "react";
import "./NavMenu.scss";
export const NavMenu: React.FC = () => {
  const liList = [
    "Diets",
    "Calorie calculator",
    "Menu",
    "Delivery",
    "about us",
    "Blog",
    "FAQ",
  ];
  return (
    <nav>
      <ul>
        {liList.map((navItem) => (
          <li>
            <a href="#">{navItem}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
