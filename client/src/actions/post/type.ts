import { EntityAction } from "@typings/reduxType/action";
import {
  getAllPostingAction,
  getDetailSubTopicInfoAction,
  getDetailTopicInfoAction,
  getSubTopicInfoAction,
  getSubTopicListAction,
  getTopicListSiderBarAction,
  getTopicPostingInfoAction,
  resetWritePostingAction,
  resetWriteSubTopicAction,
  resetWriteTopicAction,
  writePostingInfoAction,
  writeSubTopicInfoAction,
  writeTopicInfoAction,
} from ".";

export const GET_TOPICLIST_SIDEBAR = {
  REQUEST: "REQUEST_GET_TOPICLIST_SIDEBAR",
  SUCCESS: "SUCCESS_GET_TOPICLIST_SIDEBAR",
  FAILURE: "FAILURE_GET_TOPICLIST_SIDEBAR",
} as const;

export const GET_SUBTOPIC_LIST = {
  REQUEST: "REQUEST_GET_SUBTOPIC_LIST",
  SUCCESS: "SUCCESS_GET_SUBTOPIC_LIST",
  FAILURE: "FAILURE_GET_SUBTOPIC_LIST",
} as const;

export const GET_DETAIL_TOPICPOSTING = {
  REQUEST: "REQUEST_GET_DETAIL_TOPICPOSTING",
  SUCCESS: "SUCCESS_GET_DETAIL_TOPICPOSTING",
  FAILURE: "FAILURE_GET_DETAIL_TOPICPOSTING",
} as const;

export const GET_DETAIL_SUBTOPICPOSTING = {
  REQUEST: "REQUEST_GET_DETAIL_SUBTOPICPOSTING",
  SUCCESS: "SUCCESS_GET_DETAIL_SUBTOPICPOSTING",
  FAILURE: "FAILURE_GET_DETAIL_SUBTOPICPOSTING",
} as const;

export const GET_TOPIC_POSTING = {
  REQUEST: "REQUEST_GET_TOPIC_POSTING",
  SUCCESS: "SUCCESS_GET_TOPIC_POSTING",
  FAILURE: "FAILURE_GET_TOPIC_POSTING",
} as const;

export const GET_SUBTOPIC_POSTING = {
  REQUEST: "REQUEST_GET_SUBTOPIC_POSTING",
  SUCCESS: "SUCCESS_GET_SUBTOPIC_POSTING",
  FAILURE: "FAILURE_GET_SUBTOPIC_POSTING",
} as const;

export const GET_ALL_POSTING = {
  REQUEST: "REQUEST_GET_ALL_POSTING",
  SUCCESS: "SUCCESS_GET_ALL_POSTING",
  FAILURE: "FAILURE_GET_ALL_POSTING",
} as const;
export const WRITE_POSTING = {
  REQUEST: "REQUEST_WRITE_POSTING",
  SUCCESS: "SUCCESS_WRITE_POSTING",
  FAILURE: "FAILURE_WRITE_POSTING",
} as const;

export const WRITE_TOPIC = {
  REQUEST: "REQUEST_WRITE_TOPIC",
  SUCCESS: "SUCCESS_WRITE_TOPIC",
  FAILURE: "FAILURE_WRITE_TOPIC",
} as const;

export const WRITE_SUBTOPIC = {
  REQUEST: "REQUEST_WRITE_SUBTOPIC",
  SUCCESS: "SUCCESS_WRITE_SUBTOPIC",
  FAILURE: "FAILURE_WRITE_SUBTOPIC",
} as const;

export const RESET_WRITE_TOPIC = "RESET_WRITE_TOPIC" as const;
export const RESET_WRITE_SUBTOPIC = "RESET_WRITE_SUBTOPIC" as const;
export const RESET_WRITE_POSTING = "RESET_WRITE_POSTING" as const;

export type T_GetTopicListSiderBarAction = EntityAction<
  typeof getTopicListSiderBarAction
>;
export type T_GetSubTopicListAction = EntityAction<
  typeof getSubTopicListAction
>;
export type T_GetAllPostingAction = EntityAction<typeof getAllPostingAction>;
export type T_GetTopicPostingAction = EntityAction<
  typeof getTopicPostingInfoAction
>;
export type T_GetDetailTopicPostingAction = EntityAction<
  typeof getDetailTopicInfoAction
>;
export type T_GetDetailSubTopicPostingAction = EntityAction<
  typeof getDetailSubTopicInfoAction
>;
export type T_GetSubTopicPostingAction = EntityAction<
  typeof getSubTopicInfoAction
>;
export type T_WritePostingIngoAction = EntityAction<
  typeof writePostingInfoAction
>;
export type T_WriteTopicIngoAction = EntityAction<typeof writeTopicInfoAction>;
export type T_WriteSubTopicIngoAction = EntityAction<
  typeof writeSubTopicInfoAction
>;
export type T_resetWriteTopicAction = ReturnType<typeof resetWriteTopicAction>;
export type T_resetWriteSubTopicAction = ReturnType<
  typeof resetWriteSubTopicAction
>;
export type T_resetWritePostingAction = ReturnType<
  typeof resetWritePostingAction
>;

export type POST_RETURN_ACTIONS =
  | T_GetAllPostingAction
  | T_GetSubTopicListAction
  | T_GetTopicListSiderBarAction
  | T_GetTopicPostingAction
  | T_GetSubTopicPostingAction
  | T_GetDetailSubTopicPostingAction
  | T_GetDetailTopicPostingAction
  | T_WritePostingIngoAction
  | T_WriteTopicIngoAction
  | T_resetWriteTopicAction
  | T_resetWriteSubTopicAction
  | T_resetWritePostingAction
  | T_WriteSubTopicIngoAction;
