import { CityCard } from "../../../components/CityCard/CityCard";
import { Input } from "../../../components/Input/Input";
import { Title } from "../../../components/Title/Title";
import "./Deliver.scss";
import icon from "./location-buttons.svg";
interface IDeliverProps {
  contentText: string;
  buttonText: string;
  iconText: string;
}
export const Deliver = (props: IDeliverProps) => {
  const { contentText, buttonText, iconText } = props;
  return (
    <section id="deliver">
      <div className="container">
        <Title title="Where we deliver" />
        <div className="deliver-content">
          <div className="deliver-content___left">
            <p className="deliver-content__text">{contentText}</p>
            <div className="deliver-content__inputs">
              <Input className="long" placeHolder="City name" />
              <Input className="short" placeHolder="NIP" />
            </div>
            <div className="deliver-content__buttons">
              <button className="deliver-check">{buttonText}</button>
              <div className="deliver-buttons__locate">
                <img src={icon} alt="" />
                <p>{iconText}</p>
              </div>
            </div>
          </div>
          <div className="deliver-content___right">
            <div className="deliver-place__container">
              <CityCard cityName="London" />
              <CityCard cityName="London" />
              <CityCard cityName="London" />
            </div>
            <div className="deliver-place__container">
              <CityCard cityName="London" />
              <CityCard cityName="London" />
              <CityCard cityName="London" />
            </div>
            <div className="deliver-place__container">
              <CityCard cityName="London" />
              <CityCard cityName="London" />
              <CityCard cityName="London" />
            </div>
            <div className="deliver-place__container">
              <CityCard cityName="London" />
              <CityCard cityName="London" />
              <CityCard cityName="London" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
