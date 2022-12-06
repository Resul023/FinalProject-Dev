import "./Figure.scss";
import figure from "./Vector 16.svg";
interface IFigureProps {
  className: string;
}
export const Figure = (props: IFigureProps) => {
  const { className } = props;
  return (
    <div className={className}>
      <img src={figure} alt="" />
    </div>
  );
};
