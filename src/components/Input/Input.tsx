import "./Input.scss";
interface IInputProps {
  className: string;
  placeHolder: string;
}
export const Input = (props: IInputProps) => {
  const { className, placeHolder } = props;
  return <input className={className} type="text" placeholder={placeHolder} />;
};
