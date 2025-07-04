import { ReactNode } from "react";
import cn from "classnames";
import { NavListHeader } from "@/components/Header/NavListHeader";

type DropdownItem = {
  key: string;
  path: string;
  title: string;
};

type RenderDropdownMenuProps = {
  items: DropdownItem[];
  isVisible: boolean;
  isMobile?: boolean;
  setMenuOpen?: (value: boolean) => void;
  isScrolled?: boolean;
  onItemClick?: (path: string) => boolean;
};

export const renderDropdownMenu = ({
  items,
  isVisible,
  isMobile = false,
  setMenuOpen,
  isScrolled = false,
  onItemClick,
}: RenderDropdownMenuProps): ReactNode => {
  if (!isVisible) return null;


  return (
    <div
      className={cn(
        "absolute -left-2 top-full lg:pt-4 mb-5 md:mb-0",
        isMobile && "relative left-0 top-0 pt-2"
      )}
    >
      <div className="w-fit">
        <div className={cn(
          "flex flex-col rounded-lg overflow-hidden md:gap-0 gap-[8px]",
          !isMobile && isScrolled ? "bg-gray-500/51 " : "bg-[#FFFFFF]/51% text-black"
        )}>
          {items.map((item) => (
            <NavListHeader
              key={item.key}
              path={item.path}
              title={item.title}
              setMenuOpen={setMenuOpen}
              isScrolled={isScrolled}
              onItemClick={onItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
