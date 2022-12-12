import { CategoryBox } from "../CategoryBox/CategoryBox";
import "./DishBox.scss";
import mealImg from "./meal.png";
import plant from "./plant.svg";
import nuts from "./nuts.svg";
import eggs from "./eggs.svg";
interface IDishBoxProps {
  rate: number;
  title: string;
  text: string;
  calories: number;
  dietTypeOne: string;
  dietTypeTwo: string;
}
export const DishBox = (props: IDishBoxProps) => {
  const { rate, title, text, calories, dietTypeOne, dietTypeTwo } = props;
  return (
    <div className="container__dish-box">
      <div className="box-head">
        <img src={mealImg} alt="" />
        <div className="dish-rate">
          <p>{rate}</p>
        </div>
        <div className="dish-category">
          <CategoryBox categoryName="Text" textColor="#ADAEAF" />
        </div>
      </div>
      <div className="box-body">
        <div className="dish-text">
          <p className="content-title">{title}</p>
          <p className="content-text">{text}</p>
        </div>
        <div className="dish-calorie">
          <p> {calories} kcal</p>
        </div>
      </div>
      <div className="box-footer">
        <div className="diet-type">
          <p>
            {dietTypeOne}
            <span>{dietTypeTwo}</span>
          </p>
        </div>
        <div className="icons">
          <img src={plant} alt="" />
          <img src={nuts} alt="" />
          <img src={eggs} alt="" />
        </div>
      </div>
    </div>
  );
};
