import "./Hamburger.scss";
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
// import { useState } from "react";
interface IProps {
  onClickHandler: () => void;
  active: boolean;
}
export const Hamburger: React.FC<IProps> = ({ onClickHandler, active }) => {
  return (
    <div className="hamburger-icon" onClick={onClickHandler}>
      {active ? <IoMdClose/> : <FaBars />}
    </div>
  );
};
