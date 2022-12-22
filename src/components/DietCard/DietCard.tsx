import { Button } from "../Button/Button";
import "./DietCard.scss";
interface IDietCardProps {
  image: string;
  title: string;
  calorieOne: string | number;
  calorieTwo: string | number;
  calorieThree: string | number;
  desciprtion: string;
  price: string | number;
  marginLeft?: string;
}
export const DietCard = (props: IDietCardProps) => {
  const {
    image,
    title,
    calorieOne,
    calorieTwo,
    calorieThree,
    desciprtion,
    price,
    marginLeft,
  } = props;
  return (
    <div
      className="diets-card__item"
      style={marginLeft ? { marginLeft: marginLeft } : {}}
    >
      <div className="diets-card__head">
        <img src={image} alt="" />
      </div>
      <div className="diets-card__body">
        <h4>{title}</h4>
        <div className="diets-calories">
          <p>{calorieOne} kcal</p>
          <p>{calorieTwo} kcal</p>
          <p>{calorieThree} kcal</p>
        </div>
        <div className="diets-description">
          <p>{desciprtion}</p>
        </div>
      </div>
      <div className="diets-card__footer">
        <div className="diets-price">
          <p>
            from <span>{price}</span> <strong>pln</strong> /day
          </p>
        </div>
        <div className="diets-add-basket">
          <Button text="Choose" />
        </div>
      </div>
    </div>
  );
};
