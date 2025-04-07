import { TerrasesInitialState } from "../types/types";
import * as imgs from "./exportsImg";

export const initialTerraseState: TerrasesInitialState = {
  terases: [
    {
      imgs: [imgs.mainFst, imgs.mainScd, imgs.mainTrd, imgs.mainFth, imgs.preview],
      title: "terasesState.mainTerrase.title",
      preview: [imgs.mainFst, imgs.preview],
      descOne: [
        { text: "terasesState.mainTerrase.desc.0" },
        { text: "terasesState.mainTerrase.desc.1", isBold: true },
        { text: "terasesState.mainTerrase.desc.2" },
        { text: "terasesState.mainTerrase.desc.3", isBold: true },
        { text: "terasesState.mainTerrase.desc.4" },
      ],
      descTwo: [
        { text: "terasesState.mainTerrase.descTwo.0" },
        { text: "terasesState.mainTerrase.descTwo.1", isBold: true },
        { text: "terasesState.mainTerrase.descTwo.2" },
        { text: "terasesState.mainTerrase.descTwo.3", isBold: true, isEng: true },
      ],
      titleTwo: "terasesState.mainTerrase.titleTwo",
      descThree: [
        { text: "terasesState.mainTerrase.descTree.0" },
        { text: "terasesState.mainTerrase.descTree.1", isBold: true },
        { text: "terasesState.mainTerrase.descTree.2" },
      ],
    },
    {
      imgs: [imgs.upperFst, imgs.upperScd, imgs.upperThd, imgs.upperFhd, imgs.previewUpper],
      title: "terasesState.upperTerrase.title",
      preview: [imgs.previewUpper, imgs.upperFst],
      descOne: [
        { text: "terasesState.upperTerrase.desc.0" },
        { text: "terasesState.upperTerrase.desc.1", isBold: true },
        { text: "terasesState.upperTerrase.desc.2", isEng: true },
      ],
      titleTwo: "terasesState.upperTerrase.titleTwo",
      descTwo: [
        { text: "terasesState.upperTerrase.descTwo.0" },
        { text: "terasesState.upperTerrase.descTwo.1", isBold: true },
      ],
      descThree: [
        { text: "terasesState.upperTerrase.descThree.0", isBold: true  },
        { text: "terasesState.upperTerrase.descThree.1"},
      ],
    },
    {
      imgs: [imgs.lowerFst, imgs.lowerScd, imgs.lowerTrd, ],
      title: "terasesState.lowerTerrase.title",
      preview: [imgs.lowerFst, imgs.lowerTrd,],
      descOne: [
        { text: "terasesState.lowerTerrase.desc.0" },
        { text: "terasesState.lowerTerrase.desc.1", isBold: true },
        { text: "terasesState.lowerTerrase.desc.2" },
        { text: "terasesState.lowerTerrase.desc.3", isBold: true },
        { text: "terasesState.lowerTerrase.desc.4",  },
      ],
      titleTwo: "terasesState.lowerTerrase.titleTwo",
      descTwo: [
        { text: "terasesState.lowerTerrase.descTwo.0" },
        { text: "terasesState.lowerTerrase.descTwo.1", isBold: true },
        { text: "terasesState.lowerTerrase.descTwo.2"},
        { text: "terasesState.lowerTerrase.descTwo.3", isBold: true},
      ],
      descThree: [
        { text: "terasesState.lowerTerrase.descThree.0" },
        { text: "terasesState.lowerTerrase.descThree.1", isBold: true },
      ],
    },
  ],
};
