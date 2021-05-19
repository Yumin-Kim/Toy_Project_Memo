import { ReturnPostingBoard, TopicListSiderBarInfo } from "@typings/Entity";
import {
  createActionAxiosGetVerion,
  createActionAxiosGetVerionToAPIPARMA,
  createActionFactory,
  EntityAction,
} from "@typings/reduxType/action";
import axios from "axios";
import {
  GET_ALL_POSTING,
  GET_TOPICLIST_SIDEBAR,
  GET_TOPIC_POSTING,
} from "./type";

axios.defaults.baseURL = "http://localhost:3000/api";
interface BasicqueryString {
  offset: number;
  limit: number;
}
interface IGetTopicBasicqueryString extends BasicqueryString {
  topic: string;
}
/////////////////////////
export const getTopicListSiderBarAPI = async (): Promise<
  TopicListSiderBarInfo[]
> => {
  return await axios.get("/category/list");
};

export const getTopicListSiderBarAction = createActionAxiosGetVerion(
  GET_TOPICLIST_SIDEBAR,
  getTopicListSiderBarAPI
);

/////////////////////////
export const getAllPostingAPI = async ({
  offset,
  limit,
}: BasicqueryString): Promise<ReturnPostingBoard[]> => {
  return await axios.get(`/category?offset=${offset}&limit=${limit}`);
};

export const getAllPostingAction = createActionAxiosGetVerionToAPIPARMA(
  GET_ALL_POSTING,
  getAllPostingAPI
);

/////////////////////////
export const getTopicPostingInfoAPI = async ({
  offset,
  topic,
  limit,
}: IGetTopicBasicqueryString): Promise<ReturnPostingBoard[]> => {
  return await axios.get(
    `/category/info/${topic}?offset=${offset}&limit=${limit}`
  );
};

export const getTopicPostingInfoAction = createActionAxiosGetVerionToAPIPARMA(
  GET_TOPIC_POSTING,
  getTopicPostingInfoAPI
);
/////////////////////////

export type T_GetTopicListSiderBarAction = EntityAction<
  typeof getTopicListSiderBarAction
>;
export type T_GetAllPostingAction = EntityAction<typeof getAllPostingAction>;
export type T_GetTopicPostingAction = EntityAction<
  typeof getTopicPostingInfoAction
>;
export type POST_RETURN_ACTIONS =
  | T_GetAllPostingAction
  | T_GetTopicListSiderBarAction
  | T_GetTopicPostingAction;
