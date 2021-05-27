import {
  getTopicListSiderBarAction,
  getAllPostingAction,
  writePostingInfoAction,
  writeTopicInfoAction,
  writeSubTopicInfoAction,
  getSubTopicInfoAction,
  getDetailTopicInfoAction,
  getDetailSubTopicInfoAction,
  RewritePostingAction,
} from "@actions/post";
import {
  T_GetAllPostingAction,
  T_GetDetailSubTopicPostingAction,
  T_GetDetailTopicPostingAction,
  T_GetSubTopicListAction,
  T_GetSubTopicPostingAction,
  T_GetTopicListSiderBarAction,
  T_GetTopicPostingAction,
  T_ReWriteSubTopicIngoAction,
  T_WritePostingIngoAction,
  T_WriteSubTopicIngoAction,
  T_WriteTopicIngoAction,
} from "@actions/post/type";
import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getTopicPostingInfoAction } from "@actions/post/index";
import { getSubTopicListAction } from "../actions/post/index";

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
  yield takeEvery(
    getTopicListSiderBarAction.ACTION.REQUEST,
    getsiderBarCategorySagaFunc
  );
}
function* getSubCategoryListSagaFunc(action: T_GetSubTopicListAction) {
  try {
    if (action.type === "REQUEST_GET_SUBTOPIC_LIST") {
      const { data } = yield call(getSubTopicListAction.API, action.payload);
      yield put(getSubTopicListAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(getSubTopicListAction.ACTION.FAILURE(error));
  }
}

function* watchGetSubCategoryList() {
  yield takeLatest(
    getSubTopicListAction.ACTION.REQUEST,
    getSubCategoryListSagaFunc
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
  yield takeEvery(getAllPostingAction.ACTION.REQUEST, getAllPostingSagaFunc);
}

function* getTopicPostingSagaFunc(action: T_GetTopicPostingAction) {
  try {
    if (action.type === "REQUEST_GET_TOPIC_POSTING") {
      const { data } = yield call(
        getTopicPostingInfoAction.API,
        action.payload
      );
      yield put(getTopicPostingInfoAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(getTopicPostingInfoAction.ACTION.FAILURE(error));
  }
}

function* watchGetTopicPosting() {
  yield takeLatest(
    getTopicPostingInfoAction.ACTION.REQUEST,
    getTopicPostingSagaFunc
  );
}
function* writePostingSagaFunc(action: T_WritePostingIngoAction) {
  try {
    if (action.type === "REQUEST_WRITE_POSTING") {
      const { data } = yield call(writePostingInfoAction.API, action.payload);
      yield put(writePostingInfoAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(writePostingInfoAction.ACTION.FAILURE(error));
  }
}

function* watchWritePosting() {
  yield takeLatest(writePostingInfoAction.ACTION.REQUEST, writePostingSagaFunc);
}

function* writeTopicSagaFunc(action: T_WriteTopicIngoAction) {
  try {
    if (action.type === "REQUEST_WRITE_TOPIC") {
      const { data } = yield call(writeTopicInfoAction.API, action.payload);
      yield put(writeTopicInfoAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(writeTopicInfoAction.ACTION.FAILURE(error));
  }
}

function* watchWriteTopic() {
  yield takeLatest(writeTopicInfoAction.ACTION.REQUEST, writeTopicSagaFunc);
}

function* writeSubTopicSagaFunc(action: T_WriteSubTopicIngoAction) {
  try {
    if (action.type === "REQUEST_WRITE_SUBTOPIC") {
      const { data } = yield call(writeSubTopicInfoAction.API, action.payload);
      yield put(writeSubTopicInfoAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(writeSubTopicInfoAction.ACTION.FAILURE(error));
  }
}

function* watchWriteSubTopic() {
  yield takeLatest(
    writeSubTopicInfoAction.ACTION.REQUEST,
    writeSubTopicSagaFunc
  );
}
function* rewritePostinngSagaFunc(action: T_ReWriteSubTopicIngoAction) {
  try {
    if (action.type === "REQUEST_REWRITE_POSTING") {
      const { data } = yield call(RewritePostingAction.API, action.payload);
      yield put(RewritePostingAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(RewritePostingAction.ACTION.FAILURE(error));
  }
}

function* watchReWritePosting() {
  yield takeLatest(
    RewritePostingAction.ACTION.REQUEST,
    rewritePostinngSagaFunc
  );
}
function* GetSubTopicPostingSagaFunc(action: T_GetSubTopicPostingAction) {
  try {
    if (action.type === "REQUEST_GET_SUBTOPIC_POSTING") {
      const { data } = yield call(getSubTopicInfoAction.API, action.payload);
      yield put(getSubTopicInfoAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(getSubTopicInfoAction.ACTION.FAILURE(error));
  }
}

function* watchGetSubTopicPosting() {
  yield takeLatest(
    getSubTopicInfoAction.ACTION.REQUEST,
    GetSubTopicPostingSagaFunc
  );
}
function* detailTopicPostingSagaFunc(action: T_GetDetailTopicPostingAction) {
  try {
    if (action.type === "REQUEST_GET_DETAIL_TOPICPOSTING") {
      const { data } = yield call(getDetailTopicInfoAction.API, action.payload);
      yield put(getDetailTopicInfoAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(getDetailTopicInfoAction.ACTION.FAILURE(error));
  }
}

function* watchDetailTopicPosting() {
  yield takeLatest(
    getDetailTopicInfoAction.ACTION.REQUEST,
    detailTopicPostingSagaFunc
  );
}
function* detailSubTopicPostingSagaFunc(
  action: T_GetDetailSubTopicPostingAction
) {
  try {
    if (action.type === "REQUEST_GET_DETAIL_SUBTOPICPOSTING") {
      const { data } = yield call(
        getDetailSubTopicInfoAction.API,
        action.payload
      );
      yield put(getDetailSubTopicInfoAction.ACTION.SUCCESS(data));
    }
  } catch (error) {
    yield put(getDetailSubTopicInfoAction.ACTION.FAILURE(error));
  }
}

function* watchDetailSubTopicPosting() {
  yield takeLatest(
    getDetailSubTopicInfoAction.ACTION.REQUEST,
    detailSubTopicPostingSagaFunc
  );
}

export default function* postSaga() {
  yield all([
    fork(watchGetSubCategoryList),
    fork(watchGetSideBarCategory),
    fork(watchGetAllPosting),
    fork(watchGetTopicPosting),
    fork(watchDetailSubTopicPosting),
    fork(watchDetailTopicPosting),
    fork(watchGetSubTopicPosting),
    fork(watchWriteSubTopic),
    fork(watchWriteTopic),
    fork(watchWritePosting),
    fork(watchReWritePosting),
  ]);
}
