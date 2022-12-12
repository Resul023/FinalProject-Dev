import "./CityCard.scss";
interface ICityCard {
  cityName: string;
}
export const CityCard = (props: ICityCard) => {
  const { cityName } = props;
  return (
    <div className="deliver-place__cities">
      <p>{cityName}</p>
    </div>
  );
};
