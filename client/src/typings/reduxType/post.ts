import { ReturnPostingBoard, TopicListSiderBarInfo } from "@typings/Entity";

export interface PostStore {
  sideBarCategoryInfos: TopicListSiderBarInfo[] | null;
  mainPostingInfos: ReturnPostingBoard[] | null;
  categoryListInfos: ReturnPostingBoard[] | null;
  subCategoryListInfos: ReturnPostingBoard[] | null;
  detailCateogoryInfo: ReturnPostingBoard | null;
  detailSubCateogoryInfo: ReturnPostingBoard | null;
  writePosingMessage: null | string;
  writeCateogoryMessage: null | string;
  writeSubCateogoryMessage: null | string;
}
