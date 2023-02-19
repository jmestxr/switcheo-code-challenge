import { NavButtonProps } from "../../utils/types";
import './buttons.css';

export const NavButton = ({ handleNavigation, iconSrc }: NavButtonProps) => {
  return (
    <button type="button" onClick={handleNavigation} className="nav-button">
      <img src={require(`../../assets/${iconSrc}`)} className="nav-button-icon" />
    </button>
  );
};
