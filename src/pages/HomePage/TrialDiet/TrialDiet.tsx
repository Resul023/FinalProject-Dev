import "./TrialDiet.scss";
import leftTopFigure from "./Vector 16.svg";
import rightTopFigure from "./Vector 17.svg";
import fruitLeft from "./fruit-left.png";
import fruitRight from "./fruit-right.png";
import shape from "./Subtract.svg";
export const TrialDiet = () => {
  return (
    <section id="trial-diet">
      <div className="container">
        <div className="container__top-left">
          <img src={leftTopFigure} alt="" />
        </div>
        <div className="container__top-right">
          <img src={rightTopFigure} alt="" />
        </div>
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

        <div className="container__bottom-left">
          <img src={leftTopFigure} alt="" />
        </div>
        <div className="container__bottom-right">
          <img src={rightTopFigure} alt="" />
        </div>
      </div>
    </section>
  );
};
