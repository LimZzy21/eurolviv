import { Link } from "react-router-dom";
import { InViewWrapper } from "../utils/InViewWrapper";
import { useTranslation } from "react-i18next";
import { square, guest } from "../../store/exportsIcons";
import cn from "classnames";

type HallCardProps = {
  hall: {
    previewImage: string;
    title: string;
    size: string;
    area: string;
    capacity: string;
  };
  index: number;
  isEng: boolean;
};

export const HallCard = ({ hall, index, isEng }: HallCardProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex flex-col items-center justify-center w-fit h-fit pb-20 ${
        index !== 1 ? "-translate-y-6" : ""
      } `}
    >
      <InViewWrapper>
        <img
          loading="lazy"
          src={hall.previewImage}
          alt={hall.title}
          className={cn(
            index === 1
              ? "2xl:w-[36.7vw] 2xl:h-[23.2vw] xl:w-[31.4vw] xl:h-[23vw] lg:w-[34.3vw] lg:h-[23.2vw] md:w-[32.6vw] md:h-[18.1vw] w-[91.2vw] h-[60.9vw]"
              : "2xl:w-[19.9vw] 2xl:h-[13.3vw] xl:w-[22.7vw] xl:h-[15.4vw] lg:w-[20.3vw] lg:h-[15.4vw] md:w-[22.4vw] md:h-[12.9vw] w-[91.2vw] h-[60.9vw]"
          )}
        />
      </InViewWrapper>
      <h4
        className={`uppercase text-[18px] md:text-[22px] font-cofo-medium lg:text-[18px] 2xl:text-[24px] xl:text-[22px] leading-[28px] tracking-[-0.05em] text-center 
        ${
          index !== 1
            ? "2xl:mt-[20px] xl:mt-[14px]  px-2 xl:mb-[12px] lg:mb-[8px] lg:mt-[12px] mt-[10px] mb-[8px]"
            : "2xl:mt-[25px] xl:mt-[20px] mb-[10px]   px-2 xl:mb-[13px] mt-[10px]"
        } }`}
      >
        {t(hall.title)} {t(hall.size)}
      </h4>
      <div
        className={cn(
          `flex flex-col items-center justify-center ${
            index !== 1 ? "space-y-[3px]" : "space-y-[1px]"
          }`
        )}
      >
        <div className={`flex items-center space-x-1 justify-center `}>
          <img loading="lazy" src={square} alt="areaico" className="w-4 h-4" />
          <p className="uppercase text-sm sm:text-xs md:text-[12px] lg:text-lg 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[#252526]">
            {t("home.conferenceService.area")}: {hall.area}
          </p>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <img loading="lazy" src={guest} alt="guestico" className="w-4 h-4" />
          <p className="uppercase text-sm sm:text-xs md:text-[12px] lg:text-lg 2xl:text-[16px] xl:text-[14px] lg:text-[14px] text-[#252526]">
            {t("home.conferenceService.capacity")}:{" "}
            {isEng ? t(hall.capacity) : t(hall.capacity).slice(0, -2) + "."}
          </p>
        </div>
        {index === 1 && (
          <div className="text-center flex items-center justify-center pt-[37px] relative">
            <Link
              to="/conference-service"
              className={`w-fit xl:py-[10px]   font-cofo-medium flex 
                justify-center items-center  px-5 py-2 text-[#8c331b]
                 hover:bg-[#8c331b] hover:text-white border-[#8C331B] border 
                 rounded-full uppercase 2xl:w-[8.72vw] 2xl:h-[2.4vw] 2xl:text-[.84vw]
                 ${isEng ? "2xl:w-[8.72vw]" : "xl:px-[30.5px]"} `}
            >
              {t("buttons.details")}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
