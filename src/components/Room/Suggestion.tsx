import { Link } from "react-router-dom";
import { SuggestionT } from "../../types/types";
import { useTranslation } from "react-i18next";
import { InViewWrapper } from "../utils/InViewWrapper";
import cn from "classnames";
import { useLocation } from "react-router-dom";

type SuggestionToProps = {
  suggestion?: SuggestionT[];
};

export const Suggestion = ({ suggestion }: SuggestionToProps) => {
  const { t } = useTranslation();
  const location = useLocation();

  if (!suggestion || suggestion.length === 0) return null;

  const isLux = location.pathname.includes("lux") || false;

  return (
    <div className="w-full flex justify-center overflow-y-hidden" >
      <div className="grid lg:grid-cols-2 grid-cols-1 w-full">
        {suggestion.map(({ img, type, title, size, desc }, index) => {
          return (
            <div
              key={index}
              className="bg-[#252526] relative lg:pt-[220px] 2xl:pt-[12.5vw] xl:pt-[10.42vw] pt-[100px] flex flex-col"
            >
              <div className="relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#252526] to-transparent"></div>
                <InViewWrapper>
                  <img loading="lazy"
                    src={img}
                    alt={type}
                    className="lg:w-full w-full lg:h-[654px] xl:h-[34.58vw] object-cover h-[69.33vw]"
                  />
                </InViewWrapper>
              </div>

              <div className="absolute top-0 flex flex-col items-center text-center
               text-white z-10 lg:p-4 p-[51px] w-full 2xl:h-[10.42vw] ">
                <h1 className="2xl:text-[5.21vw] xl:text-[6.25vw] lg:text-[60px]
                 md:text-[80px] text-[32px] md:leading-[90%]  uppercase leading-[28px] lg:mt-20
                 xl:mt-[-0.5vw]
                 2xl:mt-[4.17vw] lg:min-h-[162px] 2xl:min-h-[9.43vw] flex items-end">
                  {t(title)}
                </h1>
                {size && (
                  <p
                    className={cn(
                      `uppercase  2xl:text-[1.25vw] xl:text-[1.41vw] lg:text-[16px]  md:text-[20px]
                      2xl:pt-[0.99vw] xl:pt-[1.09vw] lg:pt-[19px] pt-[9px]`,
                      {
                        "text-[8.53vw] lg:font-cofo-medium ": isLux,
                        "font-cofo-medium text-[3.73vw]": !isLux,
                      }
                    )}
                  >
                    {t(size)}
                  </p>
                )}
                <p className="uppercase 2xl:text-[0.94vw] xl:text-[14px] lg:text-[14px] text-[3.2vw] lg:leading-[22px] 
                md:text-[16px] max-w-[61.87vw]  lg:max-w-full leading-[104%] lg:pt-[38px] xl:pt-[1.56vw] 2xl:pt-[1.98vw] pt-[19px] lg:w-[60%]
                 xl:w-[65%] 2xl:w-[55%]">
                  {t(desc)}
                </p>
                <Link
                  to={`/rooms/${type}`}
                  className="uppercase lg:py-[12px] lg:mt-[48px] mt-[20px] 2xl:mt-[2.5vw]
                   lg:px-[30px] rounded-full font-cofo-medium lg:w-[179px] text-center flex justify-center items-center
                  md:px-[26px] md:py-[12px] 2xl:text-[0.83vw] 2xl:w-[9.32vw] 2xl:h-[2.4vw]
                 border-[0.5px] text-[#FFFFFF] lg:leading-[20px] lg:text-[16px]
                  text-[12px] leading-[15px] py-[12px] px-[17px]"
                >
                  {t("buttons.view")}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
