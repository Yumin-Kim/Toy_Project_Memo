import loadable, { LoadableComponent } from "@loadable/component";
import { RouteProps } from "react-router-dom";
// 카테고리 항목 component exact []
const Home = loadable(
  () => import(/* webpackchunkFilename : Home */ "@pages/Home")
);
const User = loadable(
  () => import(/* webpackchunkFilename : User */ "@pages/User/userInfo")
);
const NotFound = loadable(
  () => import(/* webpackchunkFilename : NotFound */ "@pages/NotFound")
);
type categotyTitle = [
  "회원관리",
  "보유 차량 관리",
  "거래 / 기타 현황 ",
  "시세관리",
  "기타 관리",
  "딜러 회원 관리"
];
type subText = ["팔아줘관리", "직거래관리", "바꿔줘관리"];

export interface ICategorySubItem {
  title: string;
  path: string;
  component: LoadableComponent<unknown>;
}

export interface ICategorySubInnerItem {
  readonly categoryTitle: Required<subText>[number];
  readonly subInnerItems: ICategorySubItem[];
}

export interface ICategoryItem {
  title: Required<categotyTitle>[number];
  subTitle: ICategorySubItem[] | ICategorySubInnerItem[];
  path?: Pick<RouteProps, "path">;
}

export const asyncCategoryData: ReadonlyArray<ICategoryItem> = [
  {
    title: "회원관리",
    subTitle: [
      { title: "회원 목록", component: User, path: "/user/list" },
      { title: "접속자 집계", component: Home, path: "/user/conntectuser" },
      {
        title: "접속자 검색",
        component: NotFound,
        path: "/user/conntectuser/search",
      },
      {
        title: "메일 발송 및 설정",
        component: User,
        path: "/user/email/config",
      },
      { title: "SMS 발송 및 설정", component: User, path: "/user/sms/config" },
      {
        title: "회원 보안 프로그램 관리",
        component: User,
        path: "/user/secrity",
      },
    ],
  },
  {
    title: "보유 차량 관리",
    subTitle: [
      { title: "차량 등록", component: NotFound, path: "/carinfo/register" },
      { title: "매물 관리", component: NotFound, path: "/carinfo/salelist" },
      {
        title: "분류 관리",
        component: NotFound,
        path: "/carinfo/classification",
      },
      {
        title: "메일 진열 차량 관리",
        component: NotFound,
        path: "/carinfo/main",
      },
      {
        title: "삭제 상품 목록 관리",
        component: NotFound,
        path: "/carinfo/deletelist",
      },
    ],
  },
  {
    title: "거래 / 기타 현황 ",
    subTitle: [
      {
        categoryTitle: "팔아줘관리",
        subInnerItems: [
          {
            title: "거래 차량 등록",
            path: "/business/sale/car",
            component: NotFound,
          },
          {
            title: "경매 현황",
            path: "/business/sale/auction",
            component: NotFound,
          },
          {
            title: "견적 명세서 관리",
            path: "/business/sale/receipt",
            component: NotFound,
          },
          {
            title: "거래 현황 관리",
            path: "/business/sale/state",
            component: NotFound,
          },
          {
            title: "이용 후기 관리",
            path: "/business/sale/review",
            component: NotFound,
          },
        ],
      },
      {
        categoryTitle: "직거래관리",
        subInnerItems: [
          {
            title: "거래 차량 등록",
            path: "/business/directsale/register",
            component: NotFound,
          },
          {
            title: "문의 사항 관리",
            path: "/business/directsale/inquiry",
            component: NotFound,
          },
          {
            title: "광고 현황",
            path: "/business/directsale/advertisement",
            component: NotFound,
          },
          {
            title: "이용 후기 관리",
            path: "/business/directsale/review",
            component: NotFound,
          },
        ],
      },
      {
        categoryTitle: "바꿔줘관리",
        subInnerItems: [
          {
            title: "거래 차량 등록",
            path: "/business/change/register",
            component: NotFound,
          },
          {
            title: "요청 관리",
            path: "/business/chage/requestment",
            component: NotFound,
          },
          {
            title: "이용 후기 관리",
            path: "/business/chage/review",
            component: NotFound,
          },
        ],
      },
    ],
  },
  {
    title: "시세관리",
    subTitle: [
      { title: "차량등록", path: "/realpricing/register", component: NotFound },
      {
        title: "시세정보 관리",
        path: "/realpricing/sale",
        component: NotFound,
      },
      {
        title: "회원 별 시세 관리",
        path: "/realpricing/userinfo",
        component: NotFound,
      },
    ],
  },
  {
    title: "기타 관리",
    subTitle: [
      {
        title: "이벤트 현황 및 정보 관리",
        path: "/service/event",
        component: NotFound,
      },
      {
        title: "당첨자 관리",
        path: "/service/sale",
        component: NotFound,
      },
      {
        title: "멤버십 관리",
        path: "/service/membership",
        component: NotFound,
      },
      {
        title: "KB관리",
        path: "/service/kbservice",
        component: NotFound,
      },
      {
        title: "질문 관리",
        path: "/service/question",
        component: NotFound,
      },
      {
        title: "제안 / 문의 관리",
        path: "/service/suggest",
        component: NotFound,
      },
    ],
  },
  {
    title: "딜러 회원 관리",
    subTitle: [
      {
        title: "딜러 회원 별 고객 후기 관리",
        path: "/dealer/review",
        component: NotFound,
      },
      {
        title: "딜러 회원 별 소개글 관리",
        path: "/dealer/intro",
        component: NotFound,
      },
      {
        title: "딜러 회원 별 판매 차량 관리",
        path: "/dealer/sale",
        component: NotFound,
      },
      {
        title: "딜러 회원 관리",
        path: "/dealer/info",
        component: NotFound,
      },
    ],
  },
];
const RESTFULAPIName = [
  "user",
  "carinfo",
  "business",
  "realpricing",
  "service",
  "dealer",
] as const;
interface CategoryRouteConfigure extends RouteProps {
  routes?: RouteProps;
}
interface IRESTRouteObject {
  catgorytitle: typeof RESTFULAPIName[number];
  subCategory: Array<Omit<ICategorySubItem, "title">>;
}

//delete사용 하여 배열안에 객체 손상 >> 깊은 복사 시도 해도 spread 문법 사용해도 완전히 깊은 복사는 안됨
export const filterCategoryObjToRoutingSwitch = asyncCategoryData.reduce(
  (prev, cur, index) => {
    const data = {} as IRESTRouteObject;
    data.catgorytitle = RESTFULAPIName[index];
    if ("title" in cur.subTitle[0]) {
      data.subCategory = (cur.subTitle as ICategorySubItem[]).reduce(
        (prev, cur) => {
          prev.push({ path: cur.path, component: cur.component });
          return prev;
        },
        [] as Array<Omit<ICategorySubItem, "title">>
      );
    } else {
      data.subCategory = (cur.subTitle as ICategorySubInnerItem[]).reduce(
        (ItemInnerItemsprev, ItemInnerItemscur, index) => {
          const parseElement = ItemInnerItemscur.subInnerItems.reduce(
            (subInnerprev, cur, index) => {
              ItemInnerItemsprev.push({
                component: cur.component,
                path: cur.path,
              });
              return subInnerprev;
            },
            [] as Array<Omit<ICategorySubItem, "title">>
          );
          return ItemInnerItemsprev;
        },
        [] as Array<Omit<ICategorySubItem, "title">>
      );
    }
    prev.push(data);
    return prev;
  },
  [] as IRESTRouteObject[]
);
//////////////////////////////////////////////////////////////////////////////////////////////
