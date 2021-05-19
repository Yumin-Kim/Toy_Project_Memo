import { all, call } from "redux-saga/effects";
import postSaga from "./post";

export default function* RootSaga() {
  yield all([call(postSaga)]);
}
