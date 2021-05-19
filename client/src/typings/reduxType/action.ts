import { takeLatest, put, call, ForkEffect } from "redux-saga/effects";

export type ApiEndPoint<R, P extends any[]> = (...p: P) => Promise<R>;
export interface IEntity<R, S, F> {
  REQUEST: R;
  SUCCESS: S;
  FAILURE: F;
}

export const createEntityAction = <R, S, F, PARAM extends any[], DATA>(
  entitiy: IEntity<R, S, F>,
  api: ApiEndPoint<DATA, PARAM>
) => ({
  ACTION: {
    REQUEST: (data: DATA) => ({ type: entitiy.REQUEST, payload: data }),
    SUCCESS: (data: ReturnType<ApiEndPoint<DATA, PARAM>>) => ({
      type: entitiy.SUCCESS,
      payload: data,
    }),
    FAILURE: (error: any) => ({ type: entitiy.FAILURE, payload: error }),
  },
  API: api,
});
export const createAction = <R, S, F, PARAM extends any[], DATA>(
  entitiy: IEntity<R, S, F>,
  api: ApiEndPoint<DATA, PARAM>
) => ({
  ACTION: {
    REQUEST: (data: PARAM[number]) => ({
      type: entitiy.REQUEST,
      payload: data,
    }),
    SUCCESS: (data: DATA) => ({
      type: entitiy.SUCCESS,
      payload: data,
    }),
    FAILURE: (error: Error) => ({ type: entitiy.FAILURE, payload: error }),
  },
  API: api,
});

export interface IEntityAction {
  ACTION: {
    REQUEST: (...p: any[]) => any;
    SUCCESS: (...p: any[]) => any;
    FAILURE: (...p: any[]) => any;
    [key: string]: (...p: any[]) => any;
  };
  API: ApiEndPoint<any, any> & APITYPE<any, any>;
}

export type EntityAction<T extends IEntityAction> = ReturnType<
  T["ACTION"][keyof T["ACTION"]]
>;

///////////////////
//CUSTOM
///////////////////
type APITYPE<PARAM, DATA> = (params: PARAM) => Promise<DATA>;

export const createActionFactory = <R, S, F, PARAM, DATA>(
  actionType: IEntity<R, S, F>,
  API: APITYPE<PARAM, DATA>
) => ({
  ACTION: {
    REQUEST: (requestData: PARAM) => ({
      type: actionType.REQUEST,
      payload: requestData,
    }),
    SUCCESS: (data: DATA) => ({ type: actionType.SUCCESS, payload: data }),
    FAILURE: (data: any) => ({ type: actionType.FAILURE, payload: data }),
  },
  API,
});

type AxiosGetType<DATA> = () => Promise<DATA>;

export const createActionAxiosGetVerion = <R, S, F, DATA>(
  actionType: IEntity<R, S, F>,
  API: AxiosGetType<DATA>
) => ({
  ACTION: {
    REQUEST: () => ({ type: actionType.REQUEST }),
    SUCCESS: (data: DATA) => ({ type: actionType.SUCCESS, payload: data }),
    FAILURE: (data: any) => ({ type: actionType.FAILURE, payload: data }),
  },
  API,
});
type AxiosGetType_PARAM<PARMA, DATA> = (parma: PARMA) => Promise<DATA>;
export const createActionAxiosGetVerionToAPIPARMA = <R, S, F, PARAM, DATA>(
  actionType: IEntity<R, S, F>,
  API: AxiosGetType_PARAM<PARAM, DATA>
) => ({
  ACTION: {
    REQUEST: (param: PARAM) => ({ type: actionType.REQUEST, payload: param }),
    SUCCESS: (data: DATA) => ({ type: actionType.SUCCESS, payload: data }),
    FAILURE: (data: any) => ({ type: actionType.FAILURE, payload: data }),
  },
  API,
});
// export const testAPI = async (params: LoginAdmin) => (await axios.post<T_AdminInfo>('/admin', params)).data;

// export const testActions = createActionFactory(LOGIN, testAPI);

// export type TESTACTION = EntityAction<typeof testActions>;

export function* SagaProcesingAcion<
  R,
  S,
  F,
  PARAM,
  DATA,
  T extends IEntityAction
>(
  actionType: IEntity<R, S, F>,
  api: APITYPE<PARAM, DATA>,
  actionFunc: EntityAction<T>
): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(typeof actionType.REQUEST, SagaworkerFunc);

  function* SagaworkerFunc(actions: EntityAction<T>) {
    try {
      const data: DATA = yield call(api, actions.payload);
      yield put(actionFunc.ACTION.SUCCESS(data));
    } catch (error) {
      yield put(actionFunc.ACTION.FAILURE(error));
    }
  }
}
