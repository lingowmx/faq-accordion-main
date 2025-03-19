import { ReactNode } from "react"
interface ContainerProps {
  children: ReactNode
}

export const Container = ({children}: ContainerProps) => {
  return (
    <div className="w-80 h-96 p-2 top-1/5 bg-white border border-black rounded-xl relative">
      {children}
    </div>
  )
}
