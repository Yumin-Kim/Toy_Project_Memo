# 2021 05 16 간단한 포스팅 사이트 제작

- 해당 사이트 마크 다운 툴을 사용 포스팅을 할 수 있도록 제작
- 포스팅 게시 할때도 마크업 한 자료를 보여줄 계획이다

---

### 진행 상황

- 프론트
  - 프론트는 간단하게 UI 구성 완료
  - Redux , Redux-Saga 추가해야함
  - RestfulAPI개발
- 백엔드
  - 백엔드 DB연결밖에 진행 되지 않았다

# RESTAPI 설계

```
<Route
path="/:category/detail/:subcategory/:id"
component={DetailInfo}
/>
<Route path="/:category/detail/:id" component={DetailInfo} />
<Route path="/:category/:subcategory" component={Category} />
<Route path="/:category" component={Category} />
```

- **/api/category**
  - GET /:category
    - 선택 카테고리 정보 제공
  - GET /:category/detail/:id
    - 선택 카테고리의 원하는 포스팅 선택한후 정보 제공
  - GET /:category/:subcategory
    - 선택 카테고리의 세부 카테고리 조회
  - GET /:category/detail/:subcategory/:id
    - 선택 카테고리의 세부 카테고리 선택 포스팅 선택한후 정보 제공
  - POST /write
    - 작성글 저장 api
    - body로 전달
- **/api/todo**
  - GET /list?limit={}&offset={}
    - todo전송
  - POST /list
    - body 정보 전송
  - DELETE /list?id={}
    - id조회후 글 삭제
  - PATCH /list
    - body 정보 전송 >> body 정보에 따라 수정
