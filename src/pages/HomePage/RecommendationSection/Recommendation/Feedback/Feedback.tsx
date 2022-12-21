import React from "react";
import "./Feedback.scss";
import { FeedbackCard } from "./FeedbackCard/FeedbackCard";

export const Feedback: React.FC = () => {
  const divArray = [
    {
      src: "image/HomePage/stars.png",
      alt: "stars",
      title: "Guy Hawkins",
      summary:
        "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi ",
    },
    {
      src: "image/HomePage/stars.png",
      alt: "stars",
      title: "Esther Howard",
      summary:
        "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut ",
    },
    {
      src: "image/HomePage/stars.png",
      alt: "stars",
      title: "Anonim",
      summary:
        "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis ",
    },
    {
      src: "image/HomePage/stars.png",
      alt: "stars",
      title: "Jacob Jones",
      summary:
        "Minima veniam, quis nostrum exercitationem ullam laboriosam, nisi ut aliquid ex ea  ",
    },
  ];
  return (
    <div className="feedback">
      {divArray.map((item, index) => (
        <React.Fragment key={index}>
          <FeedbackCard
            src={item.src}
            title={item.title}
            summary={item.summary}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
