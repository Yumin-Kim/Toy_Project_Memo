import {
  getTopicListSiderBarAction,
  T_GetTopicListSiderBarAction,
  getAllPostingAction,
  T_GetAllPostingAction,
  T_GetTopicPostingAction,
  getTopicPostingInfoAPI,
} from "@actions/post";
import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { getTopicPostingInfoAction } from "../actions/post/index";

function* getsiderBarCategorySagaFunc(action: T_GetTopicListSiderBarAction) {
  try {
    if (action.type === "REQUEST_GET_TOPICLIST_SIDEBAR") {
      const { data } = yield call(getTopicListSiderBarAction.API);
      yield put(getTopicListSiderBarAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(getTopicListSiderBarAction.ACTION.FAILURE(error));
  }
}

function* watchGetSideBarCategory() {
  yield takeLatest(
    getTopicListSiderBarAction.ACTION.REQUEST,
    getsiderBarCategorySagaFunc
  );
}

function* getAllPostingSagaFunc(action: T_GetAllPostingAction) {
  try {
    if (action.type === "REQUEST_GET_ALL_POSTING") {
      const { data } = yield call(getAllPostingAction.API, action.payload);
      yield put(getAllPostingAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(getAllPostingAction.ACTION.FAILURE(error));
  }
}

function* watchGetAllPosting() {
  yield takeLatest(getAllPostingAction.ACTION.REQUEST, getAllPostingSagaFunc);
}

function* getTopicPostingSagaFunc(action: T_GetTopicPostingAction) {
  try {
    if (action.type === "REQUEST_GET_TOPIC_POSTING") {
      const { data } = yield call(
        getTopicPostingInfoAction.API,
        action.payload
      );
      yield put(getAllPostingAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(getAllPostingAction.ACTION.FAILURE(error));
  }
}

function* watchGetTopicPosting() {
  yield takeLatest(
    getTopicPostingInfoAction.ACTION.REQUEST,
    getTopicPostingSagaFunc
  );
}

export default function* postSaga() {
  yield all([
    fork(watchGetSideBarCategory),
    fork(watchGetAllPosting),
    fork(watchGetTopicPosting),
  ]);
}
