import "./HomePage.scss";
import img from "./Diets/images/imageFood.png";
import { Diets } from "./Diets/Diets";
import { IDiet } from "../../models/Diet";
export const HomePage = () => {
  const dietItems: IDiet[] = [
    {
      image: img,
      title: "Slim",
      calorieOne: "1000",
      calorieTwo: "1300",
      calorieThree: "1500",
      desciprtion:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: "50",
    },
    {
      image: img,
      title: "Fit",
      calorieOne: "1000",
      calorieTwo: "1300",
      calorieThree: "1500",
      desciprtion:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: "50",
    },
    {
      image: img,
      title: "Vegan",
      calorieOne: "1000",
      calorieTwo: "1300",
      calorieThree: "1500",
      desciprtion:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: "50",
    },
    {
      image: img,
      title: "Vegan",
      calorieOne: "1000",
      calorieTwo: "1300",
      calorieThree: "1500",
      desciprtion:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: "50",
    },
    {
      image: img,
      title: "Vegan",
      calorieOne: "1000",
      calorieTwo: "1300",
      calorieThree: "1500",
      desciprtion:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: "50",
    },
    {
      image: img,
      title: "Vegan",
      calorieOne: "1000",
      calorieTwo: "1300",
      calorieThree: "1500",
      desciprtion:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: "50",
    },
    {
      image: img,
      title: "Vegan",
      calorieOne: "1000",
      calorieTwo: "1300",
      calorieThree: "1500",
      desciprtion:
        "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
      price: "50",
    },
  ];
  return (
    <>
      <Diets title="The most popular diets" dietItems={dietItems} />
    </>
  );
};
