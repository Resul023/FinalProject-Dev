import React from "react";
import "../NavMenu/NavMenu.scss";
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
        {liList.map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
