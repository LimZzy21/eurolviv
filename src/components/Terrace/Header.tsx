import { useTranslation } from "react-i18next";
import { HeaderButtons } from "../Buttons/Ruff/HeaderButtons";

export const TerraseHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full lg:h-[1157px] h-[808px] flex items-center justify-center flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-[#252526] via-transparent to-[#25252600] z-[-9]"></div>
      <div className="absolute inset-0 bg-[#25252659] z-[-9]"></div>

      <img loading="lazy"
        src={
          "https://www.figma.com/file/utxDpDAE3Ua28t2GxjQihO/image/afb341a54c55d79be5eaec708addc0b9c51c319a"
        }
        alt="headerImg"
        className="lg:h-[1157px] absolute inset-0 w-full h-full object-cover object-[20%_40%] z-[-10]"
      />

      <h4 className="font-cofo-medium text-[#FFFFFF] leading-[22.68px]  underline text-sm decoration-transparent items-center xl:mb-4">
        <span className="font-blessed  block text-center text-[14px] xl:text-3xl ml-2 xl:inline">
          {t("terrase.header.title")}
        </span>
      </h4>
      <div className="flex flex-col items-center">
        <h1 className="uppercase font-cofo xl:text-[198px] text-[64px] font-normal text-[#FFFFFF] xl:leading-[154.83px] leading-[52.13px] tracking-[-0.09em] text-center underline decoration-transparent ">
          {t("terrase.header.title2")}
        </h1>

        <h4 className="font-cofo lg:text-[18px] text-[14px]  w-[300px] lg:w-[737px] text-white leading-[22.68px] text-center uppercase  lg:mt-[53px] mt-[30px]">
          {t("terrase.header.desc")}
        </h4>

        <HeaderButtons />
      </div>
    </div>
  );
};
