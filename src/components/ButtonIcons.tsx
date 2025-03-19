import IconPlus from "../../assets/images/icon-plus.svg";
import IconMinus from "../../assets/images/icon-minus.svg";

interface ButtonIconProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ButtonIcons = ({ isOpen, onClick }: ButtonIconProps) => {
  return (
    <div>
      <button onClick={onClick}>
        <img src={isOpen ? IconMinus : IconPlus} alt="IconsPlusMinus" />
      </button>
    </div>
  );
};
