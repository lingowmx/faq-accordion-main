import IconPlus from "../../assets/images/icon-plus.svg";
import IconMinus from "../../assets/images/icon-minus.svg";

interface ButtonIconProps {
  isOpen: boolean;
  onClick: () => void;
}

export const ButtonIcons = ({ isOpen, onClick }: ButtonIconProps) => {
  return (
    <div>
      <button onClick={onClick} className="cursor-pointer w-12 h-12 flex justify-end items-center">
        <img src={isOpen ? IconMinus : IconPlus} alt="IconsPlusMinus" />
      </button>
    </div>
  );
};
