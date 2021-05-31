# 2021 05 16 간단한 포스팅 사이트 제작

- 해당 사이트 마크 다운 툴을 사용 포스팅을 할 수 있도록 제작
- 포스팅 게시 할때도 마크업 한 자료를 보여줄 계획이다

# 수정 사항

- 블로그 V1 개발후 사이트에 올림
- 수정 해야할 부분
- main페이지 무한스크롤 기능 추가
- write했을때 모든 영역 초기화
- 글추가 카테고리 비밀번호 추가해서 막기 -프로젝트 추가시 다른UI보이게 작성
- 게시글 삭제 기능 구현
- todo리스트 개발
  -offset limit 사용하는 부분 전반적인 수정 필요
- git소스가 있는 포스팅이면 링크 연결할 수 있게 개발
- 카테고리 순서 변경 가능하게 구현
- codesandbox 연결할 수 있게 API확인

* 추가나 수정 할것들은 다른 UI로 개선

- 포스팅 옮기는 순서
  - 19년도 만든 자료 옮기기
  - 피그마 react자료 옮기기
  - C,C++영역 정리
  - JSP 프로젝트

* 서버 변경하기
  - 너무 느려 다른 서버 이용해야함

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

  - GET /
    - 기본 PostingBorad정보 제공
    - return PostingBoradInfo[]

  * GET /category/list
    - 카테고리 정보 전송
    * Topics 테이블 과 PostingBorad 테이블을 통해서 정보 가공후에 전달
    * return IReturnCategoryListInfo[]
  * GET /:category
    - 선택 카테고리 정보 제공
    * pathname으로 전달 받은 값을 Topic테이블에서 findOnegn id찾기 그후 매핑 테이블을 통해 id값을 찾은 후 postingBoard에서 찾아서 가공후 전달
      - 조회 Topic테이블 ID값이 SubTopic에 id가 있는지 조회
      - 조회 SubTopic의 ID값을 postingBoard의 매핑 테이블과 조회
      - 조회 결과로 Topic , SubTopic의 title , 조회 한후 정보 가공
    * return ReturnIncludeSubCategoryInfo[]
  * GET /:category/detail/:id
    - 선택 카테고리의 원하는 포스팅 선택한후 정보 제공
    * id값을 통해서 Postingboard테이블에서 조회한 후 전송
    * return PostingBoradInfo
  * GET /:category/:subcategory
    - 선택 카테고리의 세부 카테고리 조회
    * pathname의 Category를 통해id값을 알아내고 SubTopic테이블의 topicID조회후 매핑 테이블을 통해 postingBoard알아낸후 전달
    * SubTopic title값도 같이 전달
    * return IncludeSubCategoryPosingBoradInfo[]
  * GET /:category/detail/:subcategory/:id
    - 선택 카테고리의 세부 카테고리 선택 포스팅 선택한후 정보 제공
    * return PostingBoardInfo
  * POST /write/posting
    - 작성글 저장 api
    - body로 전달 >> DTOPostingWrite
    * return {operation : "sucess"}

  - POST /write/category

    - body DTOCategoryWrite
    - return {operation : "sucess"}

  - POST /write/subcategory
    - body DTOSubCategoryWrite
    - return {operation : "sucess"}

---

- **/api/todo**
  - GET /list?limit={}&offset={}
    - todo전송
    * return ReturnTodoList[]
  - POST /list
    - body 정보 전송 >>DTOTodoWrite
    * 추가된 항목값 전송
    * return ReturnTodoList
  - DELETE /list?id={}&offset={}
    - id조회후 글 삭제
    * offset , id 값을 통해 offset다음 값을 전송한다.
    * return ReturnTodoList
  - PATCH /list?id={}
    - body 정보 전송 >> Partial< DTOTodoWrite>
    * id 값으로 해당 컬럼 수정후 수정된 정보 전달
    * return ReturnTodoList
