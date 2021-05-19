import { PostStore } from "@typings/reduxType/post";
import { POST_RETURN_ACTIONS } from "@actions/post/index";
import {
  GET_TOPICLIST_SIDEBAR,
  GET_ALL_POSTING,
  GET_TOPIC_POSTING,
} from "../actions/post/type";

const postInitialState: PostStore = {
  sideBarCategoryInfos: null,
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
    case GET_TOPICLIST_SIDEBAR.REQUEST:
      return state;
    case GET_TOPICLIST_SIDEBAR.SUCCESS:
      return {
        ...state,
        sideBarCategoryInfos: [...action.payload],
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
      console.log(action.payload);

      return state;

    default:
      return state;
  }
};

export default postReducer;
