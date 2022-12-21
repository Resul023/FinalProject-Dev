import "./Logo.scss";
export const Logo: React.FC = () => {
  return (
    <div className="logo-item">
      <a href="#">
        <img
          className="logo"
          src={require("../../../../image/logo.png")}
          alt="logo"
        />
      </a>
    </div>
  );
};
