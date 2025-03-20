import { ReactNode } from "react";
interface ContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-80 max-h-[520px] p-4 top-1/5 bg-white rounded-xl relative
    lg:w-[500px]">
      <div className="">{children}</div>
    </div>
  );
};
