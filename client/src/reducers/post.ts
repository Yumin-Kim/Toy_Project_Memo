import { PostStore } from "@typings/reduxType/post";
import { GET_SUBTOPIC_LIST, RESET_WRITE_POSTING } from "../actions/post/type";
import {
  GET_TOPICLIST_SIDEBAR,
  GET_ALL_POSTING,
  GET_TOPIC_POSTING,
  POST_RETURN_ACTIONS,
  WRITE_POSTING,
  WRITE_TOPIC,
  WRITE_SUBTOPIC,
  GET_DETAIL_TOPICPOSTING,
  GET_DETAIL_SUBTOPICPOSTING,
  GET_SUBTOPIC_POSTING,
  RESET_WRITE_TOPIC,
  RESET_WRITE_SUBTOPIC,
} from "@actions/post/type";

const postInitialState: PostStore = {
  sideBarCategoryInfos: null,
  selectSubCategoryListInfos: null,
  mainPostingInfos: null,
  categoryListInfos: null,
  subCategoryListInfos: null,
  detailCateogoryInfo: null,
  detailSubCateogoryInfo: null,
  writePosingMessage: null,
  writeCateogoryMessage: null,
  writeSubCateogoryMessage: null,
};

const postReducer = (
  state = postInitialState,
  action: POST_RETURN_ACTIONS
): PostStore => {
  switch (action.type) {
    case RESET_WRITE_TOPIC:
      return {
        ...state,
        writeCateogoryMessage: "idle...",
      };
    case RESET_WRITE_SUBTOPIC:
      return {
        ...state,
        writeSubCateogoryMessage: "idle...",
      };
    case RESET_WRITE_POSTING:
      return {
        ...state,
        writePosingMessage: "idle...",
      };
    case GET_TOPICLIST_SIDEBAR.REQUEST:
      return state;
    case GET_TOPICLIST_SIDEBAR.SUCCESS:
      return {
        ...state,
        sideBarCategoryInfos: [...action.payload],
      };
    case GET_SUBTOPIC_LIST.REQUEST:
      return state;
    case GET_SUBTOPIC_LIST.SUCCESS:
      return {
        ...state,
        selectSubCategoryListInfos: [...action.payload],
      };
    case GET_SUBTOPIC_LIST.FAILURE:
      return {
        ...state,
        selectSubCategoryListInfos: [],
      };
    case GET_ALL_POSTING.FAILURE:
      return state;
    case GET_ALL_POSTING.SUCCESS:
      return { ...state, mainPostingInfos: [...action.payload] };
    case GET_ALL_POSTING.FAILURE:
      return state;

    case GET_TOPIC_POSTING.REQUEST:
      return state;
    case GET_TOPIC_POSTING.SUCCESS:
      return {
        ...state,
        categoryListInfos: [...action.payload],
      };
    case GET_TOPIC_POSTING.FAILURE:
      return state;
    case WRITE_POSTING.REQUEST:
      return {
        ...state,
        writePosingMessage: "Request...",
      };
    case WRITE_POSTING.SUCCESS:
      return {
        ...state,
        writePosingMessage: "sucess",
      };
    case WRITE_POSTING.FAILURE:
      return {
        ...state,
        writePosingMessage: "Failure",
      };
    case WRITE_TOPIC.REQUEST:
      return {
        ...state,
        writeCateogoryMessage: "Request...",
      };
    case WRITE_TOPIC.SUCCESS:
      return {
        ...state,
        writeCateogoryMessage: "sucess",
      };
    case WRITE_TOPIC.FAILURE:
      return {
        ...state,
        writeCateogoryMessage: "Failure",
      };
    case WRITE_SUBTOPIC.REQUEST:
      return {
        ...state,
        writeSubCateogoryMessage: "Request...",
      };
    case WRITE_SUBTOPIC.SUCCESS:
      return {
        ...state,
        writeSubCateogoryMessage: "sucess",
      };
    case WRITE_SUBTOPIC.FAILURE:
      return {
        ...state,
        writeSubCateogoryMessage: "Failure",
      };
    case GET_DETAIL_TOPICPOSTING.REQUEST:
      return {
        ...state,
      };
    case GET_DETAIL_TOPICPOSTING.SUCCESS:
      return {
        ...state,
        detailCateogoryInfo: { ...action.payload },
      };
    case GET_DETAIL_TOPICPOSTING.FAILURE:
      return {
        ...state,
      };
    case GET_DETAIL_SUBTOPICPOSTING.REQUEST:
      return {
        ...state,
      };
    case GET_DETAIL_SUBTOPICPOSTING.SUCCESS:
      return {
        ...state,
        detailSubCateogoryInfo: { ...action.payload },
      };
    case GET_DETAIL_SUBTOPICPOSTING.FAILURE:
      return {
        ...state,
      };
    case GET_SUBTOPIC_POSTING.REQUEST:
      return {
        ...state,
      };
    case GET_SUBTOPIC_POSTING.SUCCESS:
      return {
        ...state,
        subCategoryListInfos: [...action.payload],
      };
    case GET_SUBTOPIC_POSTING.FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default postReducer;
