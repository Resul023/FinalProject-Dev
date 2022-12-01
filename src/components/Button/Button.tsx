import "./Button.scss";
interface IButtonProps {
  text: string;
}
export const Button = (props: IButtonProps) => {
  const { text } = props;
  return <button className="btn">{text}</button>;
};
