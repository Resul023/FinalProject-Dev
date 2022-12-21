import "./HamburgerMenu.scss";
import React from "react";
export const HamburgerMenu: React.FC = () => {
  const hamburgerList = [
    "Diets",
    "Calorie calculator",
    "Menu",
    "Delivery",
    "about us",
    "Blog",
    "FAQ",
  ];
  return (
    <div className="hamburger-menu">
      <ul>
        {hamburgerList.map((item) => (
          <li>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
