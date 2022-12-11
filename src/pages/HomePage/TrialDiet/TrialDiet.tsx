import "./TrialDiet.scss";
import leftTopFigure from "./Vector 16.svg";
import rightTopFigure from "./Vector 17.svg";
import fruitLeft from "./fruit-left.png";
import fruitRight from "./fruit-right.png";
import shape from "./Subtract.svg";
import { Figure } from "../../../components/Figure/Figure";
export const TrialDiet = () => {
  return (
    <section id="trial-diet">
      <div className="container">
        <Figure className="container__top-left" />
        <Figure className="container__top-right" />

        <div className="container-content">
          <div className="container__left-content">
            <img className="left-shape" src={shape} alt="" />
            <img className="fruit-left" src={fruitLeft} alt="" />
          </div>
          <div className="container__middle-content">
            <h2>Order your trial diet</h2>
            <p>Try any diet to choose the right one for you</p>
            <button>Choose a diet</button>
          </div>
          <div className="container__right-content">
            <img className="right-shape" src={shape} alt="" />
            <img className="fruit-right" src={fruitRight} alt="" />
          </div>
        </div>
        <Figure className="container__bottom-left" />
        <Figure className="container__bottom-right" />
      </div>
    </section>
  );
};
