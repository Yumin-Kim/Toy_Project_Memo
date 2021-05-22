import {
  ReturnPostingBoard,
  SubTopicEntity,
  TopicListSiderBarInfo,
} from "@typings/Entity";

export interface PostStore {
  sideBarCategoryInfos: TopicListSiderBarInfo[] | null;
  selectSubCategoryListInfos: SubTopicEntity[] | null;
  mainPostingInfos: ReturnPostingBoard[] | null;
  categoryListInfos: ReturnPostingBoard[] | null;
  subCategoryListInfos: ReturnPostingBoard[] | null;
  detailCateogoryInfo: ReturnPostingBoard | null;
  detailSubCateogoryInfo: ReturnPostingBoard | null;
  writePosingMessage: null | "idle..." | "sucess" | "Failure" | "Request...";
  writeCateogoryMessage: null | "idle..." | "sucess" | "Failure" | "Request...";
  writeSubCateogoryMessage:
    | null
    | "idle..."
    | "sucess"
    | "Failure"
    | "Request...";
}
