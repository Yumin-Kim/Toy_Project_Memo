import {
  DTOCategoryWrite,
  DTOPostingWrite,
  DTOSubCategoryWrite,
} from "@typings/DTO";
import {
  ReturnPostingBoard,
  SubTopicEntity,
  TopicListSiderBarInfo,
} from "@typings/Entity";
import {
  createActionAxiosGetVerion,
  createActionAxiosGetVerionToAPIPARMA,
} from "@typings/reduxType/action";
import axios from "axios";
import {
  GET_ALL_POSTING,
  GET_DETAIL_SUBTOPICPOSTING,
  GET_DETAIL_TOPICPOSTING,
  GET_SUBTOPIC_POSTING,
  GET_TOPICLIST_SIDEBAR,
  GET_TOPIC_POSTING,
  RESET_WRITE_TOPIC,
  WRITE_POSTING,
  WRITE_SUBTOPIC,
  WRITE_TOPIC,
  RESET_WRITE_SUBTOPIC,
  GET_SUBTOPIC_LIST,
  RESET_WRITE_POSTING,
} from "./type";

// axios.defaults.baseURL = "https://kimminblog.herokuapp.com/api";
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
/////////////////////////
export const getSubTopicListAPI = async (
  topicId: number
): Promise<SubTopicEntity[]> => {
  return await axios.get(`/category/list/subcategory/${topicId}`);
};

export const getSubTopicListAction = createActionAxiosGetVerionToAPIPARMA(
  GET_SUBTOPIC_LIST,
  getSubTopicListAPI
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
/////////////////////////
export const getSubTopicPostingInfoAPI = async ({
  topic,
  subTopic,
}: {
  topic: string;
  subTopic: string;
}): Promise<ReturnPostingBoard[]> => {
  return await axios.get(`/category/info/${topic}/${subTopic}`);
};

export const getSubTopicInfoAction = createActionAxiosGetVerionToAPIPARMA(
  GET_SUBTOPIC_POSTING,
  getSubTopicPostingInfoAPI
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
/////////////////////////
export const getDetailTopicPostingInfoAPI = async ({
  topic,
  topicId,
}: {
  topic: string;
  topicId: number;
}): Promise<ReturnPostingBoard> => {
  return await axios.get(`/category/info/${topic}/detail/${topicId}`);
};

export const getDetailTopicInfoAction = createActionAxiosGetVerionToAPIPARMA(
  GET_DETAIL_TOPICPOSTING,
  getDetailTopicPostingInfoAPI
);
/////////////////////////
/////////////////////////
export const getDetailSubTopicPostingInfoAPI = async ({
  topic,
  subTopic,
  topicId,
}: {
  topic: string;
  subTopic: string;
  topicId: number;
}): Promise<ReturnPostingBoard> => {
  return await axios.get(
    `/category/info/${topic}/detail/${subTopic}/${topicId}`
  );
};

export const getDetailSubTopicInfoAction = createActionAxiosGetVerionToAPIPARMA(
  GET_DETAIL_SUBTOPICPOSTING,
  getDetailSubTopicPostingInfoAPI
);
/////////////////////////
/////////////////////////
export const writePostingInfoAPI = async (
  dtoPostingWrite: DTOPostingWrite
): Promise<{ operation: string }> => {
  return await axios.post(`/category/write`, dtoPostingWrite);
};

export const writePostingInfoAction = createActionAxiosGetVerionToAPIPARMA(
  WRITE_POSTING,
  writePostingInfoAPI
);
/////////////////////////
/////////////////////////
export const writeTopicInfoAPI = async (
  dtoCategorywrite: DTOCategoryWrite
): Promise<{ operation: string }> => {
  return await axios.post(`/category/write/category`, dtoCategorywrite);
};

export const writeTopicInfoAction = createActionAxiosGetVerionToAPIPARMA(
  WRITE_TOPIC,
  writeTopicInfoAPI
);
/////////////////////////
/////////////////////////
export const writeSubTopicInfoAPI = async (
  dtoSubCategorywrite: DTOSubCategoryWrite
): Promise<{ operation: string }> => {
  return await axios.post(`/category/write/subcategory`, dtoSubCategorywrite);
};

export const writeSubTopicInfoAction = createActionAxiosGetVerionToAPIPARMA(
  WRITE_SUBTOPIC,
  writeSubTopicInfoAPI
);
/////////////////////////
export const resetWriteTopicAction = () => ({
  type: RESET_WRITE_TOPIC,
});
export const resetWriteSubTopicAction = () => ({
  type: RESET_WRITE_SUBTOPIC,
});
export const resetWritePostingAction = () => ({
  type: RESET_WRITE_POSTING,
});
