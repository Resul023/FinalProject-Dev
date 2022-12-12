import "./CategoryBox.scss";
interface ICategoryBoxProps {
  categoryName: string;
  textColor?: string;
}
export const CategoryBox = (props: ICategoryBoxProps) => {
  const { categoryName, textColor } = props;
  const textStyle = {
    color: textColor,
  };
  return (
    <div className="box-container">
      <p style={textStyle}>{categoryName}</p>
    </div>
  );
};
