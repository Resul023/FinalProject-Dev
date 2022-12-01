import "./Title.scss";
interface ITitleProps {
  title: string;
}
export const Title = (props: ITitleProps) => {
  const { title } = props;
  return <h2>{title}</h2>;
};
