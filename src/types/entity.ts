import { Icon } from "@/types/types";

export type ComfortsBlockToProps = {
    title: string;
    icons: Icon[];
    images: string[];
    imgStyle: ImgStyle;
    style: Styles;
    type?: string;
  };
  
  export type ImgStyle = {
    ammentiesImageFst: string;
    ammentiesImageScd: string;
  };
  
  export type Styles = {
    bgColor: string;
    text: string;
    headerColor: string;
  };
  
  export type MenuSection = {
    titleKey: string;
    pdfPath: string;
  };