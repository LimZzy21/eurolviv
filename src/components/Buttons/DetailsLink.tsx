import { Link } from "react-router-dom";
import cn from "classnames";
export const DetailsLink = ({to, children, className}: {to: string, children: React.ReactNode | string, className?: string}) => {
  return (
      <Link to={to} className={cn(`font-cofo-medium border px-7.5 py-[10px] rounded-full uppercase text-[12px] 2xl:text-[16px] border-[#8C331B] text-[#8C331B]  transition-all duration-300 hover:bg-[#8C331B] hover:text-white   ${className}`)} >
      {children}
    </Link>
  )
};
