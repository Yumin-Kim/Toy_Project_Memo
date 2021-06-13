import { PostStore } from "@typings/reduxType/post";
import {
  GET_SUBTOPIC_LIST,
  Mapping_PATHNAME,
  RESET_ALL_POSTING,
  RESET_WRITE_POSTING,
  REWRITE_POSTING,
} from "../actions/post/type";
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
import { TopicListSiderBarInfo } from "@typings/Entity";

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
  rewriteStatusMessage: null,
  updateDetailInfo: null,
  prevPathname: null,
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
    case GET_TOPICLIST_SIDEBAR.SUCCESS: {
      const englishCatgory: TopicListSiderBarInfo[] = [];
      const regExpActionPayload = action.payload
        .reduce((prev, cur, index) => {
          prev.push({ ...cur });
          return prev;
        }, [] as TopicListSiderBarInfo[])
        .filter(element => {
          if (element.title) {
            const data = element.title.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*/i);
            if (data) {
              if (data[0] !== "") {
                return element;
              } else {
                englishCatgory.push({ ...element });
              }
            }
          }
        });

      return {
        ...state,
        sideBarCategoryInfos: [
          ...regExpActionPayload.sort(),
          ...englishCatgory.sort(),
        ],
      };
    }
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
      if (state.mainPostingInfos) {
        return {
          ...state,
          mainPostingInfos: [...state.mainPostingInfos, ...action.payload],
        };
      } else {
        return {
          ...state,
          mainPostingInfos: [...action.payload],
        };
      }
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

    case REWRITE_POSTING.REQUEST:
      return {
        ...state,
        rewriteStatusMessage: "Request...",
        detailSubCateogoryInfo: null,
        detailCateogoryInfo: null,
      };
    case REWRITE_POSTING.SUCCESS:
      return {
        ...state,
        updateDetailInfo: { ...action.payload },
        rewriteStatusMessage: "sucess",
      };
    case REWRITE_POSTING.FAILURE:
      return {
        ...state,
        rewriteStatusMessage: "Failure",
      };

    case GET_DETAIL_TOPICPOSTING.REQUEST:
      return {
        ...state,
        detailSubCateogoryInfo: null,
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
        detailSubCateogoryInfo: null,
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
    case Mapping_PATHNAME:
      return {
        ...state,
        prevPathname: action.payload,
      };
    case RESET_ALL_POSTING:
      return {
        ...state,
        mainPostingInfos: [],
      };
    default:
      return state;
  }
};

export default postReducer;
