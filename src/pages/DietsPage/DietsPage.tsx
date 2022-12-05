import "./DietsPage.scss";

export const DietsPage = () => {
  const clickHandler = () => {
    console.log('button was clicked');
  }

  return <>
    <h1>DietsPage</h1>;
    <h2>one more header</h2>
    <button onClick={clickHandler}>Click me</button>
  </>
};
