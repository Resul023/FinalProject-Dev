import "./Diets.scss";
import leftArrow from "./assets/arrow left.svg";
import rightArrow from "./assets/arrow right.svg";
import { DietCard } from "../../../components/DietCard/DietCard";
import { IDiet } from "../../../models/Diet";
import { useEffect, useState } from "react";
import { Title } from "../../../components/Title/Title";

interface IDietsProps {
  title: string;
  dietItems: IDiet[];
}
export const Diets = (props: IDietsProps) => {
  //Width
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  //Carousel
  const { title, dietItems } = props;
  let productCardWidth: number;
  if (windowSize.innerWidth > 1439) {
    productCardWidth = 360;
  } else if (windowSize.innerWidth >= 1080 && windowSize.innerWidth <= 1439) {
    productCardWidth = 260;
  } else if (windowSize.innerWidth >= 375 && windowSize.innerWidth <= 450) {
    productCardWidth = 260;
  }
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const leftButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber - 1);
  };

  const rightButtonClickHandler = () => {
    setCurrentSlideNumber(currentSlideNumber + 1);
  };

  return (
    <section id="diets">
      <div className="container">
        <div className="title">
          <Title title={title} />
        </div>
        <div className="arrows">
          <button
            disabled={currentSlideNumber === 0}
            onClick={leftButtonClickHandler}
          >
            <img src={leftArrow} alt="" />
          </button>

          <button
            disabled={currentSlideNumber === dietItems.length - 4}
            onClick={rightButtonClickHandler}
          >
            <img src={rightArrow} alt="" />
          </button>
        </div>
        <div className="diets-card__container">
          {dietItems.map((item, index) => (
            <DietCard
              image={item.image}
              title={item.title}
              calorieOne={item.calorieOne}
              calorieTwo={item.calorieTwo}
              calorieThree={item.calorieThree}
              desciprtion={item.desciprtion}
              price={item.price}
              marginLeft={
                index === 0 ? `${-productCardWidth * currentSlideNumber}px` : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};
