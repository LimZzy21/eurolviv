import { useTranslation } from "react-i18next";
import { HeaderBackground } from "@/components/common/HeaderPage/HeaderBackground";
import { HeaderTitle } from "@/components/common/HeaderPage/HeaderTitle";
import { HeaderNavLink } from "@/components/common/HeaderPage/HeaderNavLink";
import { HeaderActions } from "@/components/common/HeaderPage/HeaderActions";
import { HeaderRoomInfo } from "@/components/common/HeaderPage/HeaderRoomInfo";
import { HeaderDescription } from "@/components/common/HeaderPage/HeaderDescription";
import { PageHeaderProps } from "@/types/headerTypes";
import cn from "classnames";
import { processTitle } from "@/utils/ProccessTitle";


export const PageHeader: React.FC<PageHeaderProps> = ({
  backgroundImage,
  mobileSrc,
  objectPosition = "center",
  wrapInView = true,
  gradientStyle = "dark",
  textColor = "white",
  title,
  description,
  descriptionMobile,
  size,
  showBackLink = false,
  isContacts = false,
  backLinkTo = "/",
  backLinkText = "room.roomNavigation",
  showBookButton = false,
  showOrderButton = false,
  showConferenceMenuButton = false,
  customButton,
  roomInfo,
  onOrderClick, 
}) => {
  const { t } = useTranslation();
  return (
    <div className="w-full relative lg:h-[1181px] h-[821px] ">
      <HeaderBackground
        backgroundImage={backgroundImage}
        mobileSrc={mobileSrc}
        objectPosition={objectPosition}
        wrapInView={wrapInView}
        gradientStyle={gradientStyle}
        isContacts={isContacts}
      />

      {showBackLink && <HeaderNavLink to={backLinkTo} text={t(backLinkText)} />}

      <div
        className={cn(
          `absolute inset-0 flex flex-col  text-center ${
            textColor === "white" ? "text-white" : "text-black"
          }
          ${isContacts ? "mt-[55vw] 2xl:mb-[7vw] xl:mb-[2vw] lg:mt-0 items-center xl:mt-[25vw] 2xl:mt-[12vw] " : "  items-center justify-center"}
          z-10`
        )}
      >
        <h4 className="font-cofo-medium 2xl:text-[0.94vw] xl:text-[1.09vw] text-[10px] uppercase leading-[22.68px]
         font-cofo-medium underline text-sm decoration-transparent 2xl:mt-[7vw] xl:mt-[8vw]">
          {t("global.createdFor")}
          <span className="font-blessed normal-case  block text-center text-[13px] md:text-[28px] xl:text-[2.03vw] 2xl:text-[1.67vw] xl:inline">
            {t("global.whereTo")}
          </span>
        </h4>

        <HeaderTitle title={title} textColor={textColor} />

        {size && (
          <p
            className={cn(
              `uppercase w-[60%] md:w-[60%] xl:w-[40%] lg:leading-[35px] lg:text-[36px] text-[5.33vw] font-cofo-medium leading-[25px]  2xl:pt-[2.4vw] md:text-[32px] lg:pt-[30px] pt-[17px]`
            )}
          >
            {processTitle(t(size))}
          </p>
        )}

        {description && (
          <HeaderDescription descriptionMobile={descriptionMobile} description={description} size={size} roomInfo={roomInfo} />
        )}

        <HeaderActions
          showBookButton={showBookButton}
          showOrderButton={showOrderButton}
          showConferenceMenuButton={showConferenceMenuButton}
          customButton={customButton}
          onOrderClick={onOrderClick}
        />
      </div>

      {roomInfo && <HeaderRoomInfo roomInfo={roomInfo} />}
    </div>
  );
};
