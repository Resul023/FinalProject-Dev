import { CategoryBox } from "../../components/CategoryBox/CategoryBox";
import { Title } from "../../components/Title/Title";
import Select from "react-select";
import "./MenuPage.scss";
import { DishBox } from "../../components/DishBox/DishBox";

const options = [
  { value: "meal", label: "meal" },
  { value: "meal", label: "meal" },
  { value: "meal", label: "meal" },
];
const customStyles = {
  control: (base: any) => ({
    ...base,
    height: 50,
    minHeight: 50,
    paddingTop: 7,
    paddingBottom: 7,
  }),
};

export const MenuPage = () => {
  return (
    <section id="menu">
      <div className="container">
        <Title title="Menu" />
        <div className="menu-category">
          <div className="category-boxes">
            <CategoryBox categoryName="Text" />
            <CategoryBox categoryName="Text" />
            <CategoryBox categoryName="Text" />
            <CategoryBox categoryName="Text" />
            <CategoryBox categoryName="Text" />
            <CategoryBox categoryName="Text" />
          </div>
          <div className="category-select">
            <p>Choose a diet:</p>
            <Select
              className="select-input"
              options={options}
              isClearable={true}
              isSearchable={true}
              isMulti
              styles={customStyles}
              classNamePrefix="mySelect"
            />
          </div>
        </div>
        <div className="menu-products">
          <DishBox
            rate={4.8}
            title="Molestiae sed augue eu sapien hendrerit fringilla"
            text="Taque earum rerum hic tenetur a sapiente"
            calories={420}
            dietTypeOne="Diet:"
            dietTypeTwo="Slim"
          />

          <DishBox
            rate={4.8}
            title="Molestiae sed augue eu sapien hendrerit fringilla"
            text="Taque earum rerum hic tenetur a sapiente"
            calories={420}
            dietTypeOne="Diet:"
            dietTypeTwo="Slim"
          />
          <DishBox
            rate={4.8}
            title="Molestiae sed augue eu sapien hendrerit fringilla"
            text="Taque earum rerum hic tenetur a sapiente"
            calories={420}
            dietTypeOne="Diet:"
            dietTypeTwo="Slim"
          />
          <DishBox
            rate={4.8}
            title="Molestiae sed augue eu sapien hendrerit fringilla"
            text="Taque earum rerum hic tenetur a sapiente"
            calories={420}
            dietTypeOne="Diet:"
            dietTypeTwo="Slim"
          />
          <DishBox
            rate={4.8}
            title="Molestiae sed augue eu sapien hendrerit fringilla"
            text="Taque earum rerum hic tenetur a sapiente"
            calories={420}
            dietTypeOne="Diet:"
            dietTypeTwo="Slim"
          />

          <DishBox
            rate={4.8}
            title="Molestiae sed augue eu sapien hendrerit fringilla"
            text="Taque earum rerum hic tenetur a sapiente"
            calories={420}
            dietTypeOne="Diet:"
            dietTypeTwo="Slim"
          />
          <DishBox
            rate={4.8}
            title="Molestiae sed augue eu sapien hendrerit fringilla"
            text="Taque earum rerum hic tenetur a sapiente"
            calories={420}
            dietTypeOne="Diet:"
            dietTypeTwo="Slim"
          />
          <DishBox
            rate={4.8}
            title="Molestiae sed augue eu sapien hendrerit fringilla"
            text="Taque earum rerum hic tenetur a sapiente"
            calories={420}
            dietTypeOne="Diet:"
            dietTypeTwo="Slim"
          />
        </div>
      </div>
    </section>
  );
};
