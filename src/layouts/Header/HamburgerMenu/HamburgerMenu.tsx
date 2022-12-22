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
        {hamburgerList.map((hamburgerItem, index) => (
          <li key={index}>
            <a href="#">{hamburgerItem}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
