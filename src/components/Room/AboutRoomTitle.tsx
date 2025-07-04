import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useIsEnglish } from "@/hooks/useIsEnglish";
export const AboutRoomTitle = ({ nameRoom }: { nameRoom: string }) => {
  const { t } = useTranslation();
  const isEng = useIsEnglish()
  const isMobile = window.innerWidth < 768;
  const isLuxTwoRoom = nameRoom.toLowerCase().includes("luxtworooms") || false;
  const semilux = nameRoom.toLowerCase().includes("semilux") || false;
  return (
    <div
      className={cn(
        `md:border-t md:border-e ps-[10px] mt-auto md:mt-0  md:justify-start md:ps-2.5 flex 2xl:block border-[#C7C7C7]  2xl:p-[1.82vw] xl:p-[1.56vw] w-full  h-full relative`
      )}
    >
      <h1
        className="uppercase text-[#242425] 2xl:text-[5.21vw] xl:text-[5.25vw] text-[32px] pt-[16px] md:pt-0
    lg:text-[60px]  2xl:font-normal xl:leading-[86%] leading-[90%] tracking-[-0.026em] flex flex-col 
    pb-[16px] md:pb-0 justify-end  md:justify-center lg:h-full"
      >
        {semilux && !isMobile && (
          <span className="md:whitespace-nowrap ">
            {t(nameRoom)}
          </span> 
        )}
        {!isLuxTwoRoom && isMobile && (
          <span className="md:whitespace-nowrap ">
            {t(nameRoom)}
          </span>
        )}
        {isEng &&isLuxTwoRoom  && (
          <span className="md:whitespace-nowrap ">
            {t(nameRoom)}
          </span>
        )}
        {
          
        }
        {!isMobile && t(nameRoom).length > 12 && (
          <>
            {(() => {
              const words = t(nameRoom).split(" ");
              const midpoint = Math.ceil(words.length / 2);

              const firstLine = words.slice(0, midpoint).join(" ");
              const secondLine = words.slice(midpoint).join(" ");

              return (
                <>
                  {!isLuxTwoRoom ? (
                    <>
                      <span className="md:whitespace-nowrap order-1 md:order-1  mt-auto">
                        {firstLine}
                      </span>
                      <span className="md:whitespace-nowrap order-2 md:order-2 ">
                        {secondLine}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="md:whitespace-nowrap block order-1 md:order-2 ">
                        {secondLine}
                      </span>
                      <span className="md:whitespace-nowrap block order-2 md:order-1  ">
                        {firstLine}
                      </span>
                    </>
                  )}
                </>
              );
            })()}
          </>
        )}
      </h1>
    </div>
  );
};
