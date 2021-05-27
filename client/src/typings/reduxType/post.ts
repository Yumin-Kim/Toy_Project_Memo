import {
  ReturnPostingBoard,
  SubTopicEntity,
  TopicListSiderBarInfo,
} from "@typings/Entity";

type StatusType = null | "idle..." | "sucess" | "Failure" | "Request...";

export interface PostStore {
  sideBarCategoryInfos: TopicListSiderBarInfo[] | null;
  selectSubCategoryListInfos: SubTopicEntity[] | null;
  mainPostingInfos: ReturnPostingBoard[] | null;
  categoryListInfos: ReturnPostingBoard[] | null;
  subCategoryListInfos: ReturnPostingBoard[] | null;
  detailCateogoryInfo: ReturnPostingBoard | null;
  detailSubCateogoryInfo: ReturnPostingBoard | null;
  writePosingMessage: StatusType;
  writeCateogoryMessage: StatusType;
  writeSubCateogoryMessage: StatusType;
  rewriteStatusMessage: StatusType;
  updateDetailInfo: ReturnPostingBoard | null;
  prevPathname: string | null;
}
