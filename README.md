# To Do List

```
redux를 통해 전역상태관리 연습하고자 개발 한 ToDoList입니다.

'할 일' 과 '태그' 두 가지 상태를 관리합니다.

ATOMIC 디자인 패턴을 이용하여 개발했습니다.
```

## _Feat_

- [x] 할 일 입력 폼에는 제목, 상세설명, 태그, 마감 목표일을 입력할 수 있습니다.
- [x] 마감 목표일은 달력 UI를 이용합니다.
- [x] 입력폼에서 "제출하기" 버튼을 누르면 목록에서 추가된 할 일을 확인할 수 있습니다.
- [x] 목록에서 바로 체크박스를 누르면 완료여부를 체크할 수 있습니다.
- [x] 목록에서 "수정" 버튼을 누르면 해당 투두를 수정 할 수 있습니다.
- [x] 목록에서 "삭제" 버튼을 누르면 삭제 됩니다.
- [x] 완료한 할 일 목록을 필터하여 볼 수 있습니다.
- [x] 완료한 할 일들은 일괄 삭제가 가능합니다.
- [x] 할 일 입력 폼에서 태그를 여러개 입력할 수 있습니다.
- [x] 같은 이름의 태그는 중복입력이 안됩니다.
- [x] 할 일 목록에서 태그는 색상으로 구분되어야 합니다.
- [x] 목록에서 서로 다른 할 일에 같은 태그가 있다면, 같은 색으로 표시됩니다.
- [x] 입력할 때 validation 처리.
- [x] 입력 중 뒤로가기 또는 브라우저를 닫으려고 할 때 입력된 내용 삭제 알림창.
- [x] 할 일 삭제시 진짜로 삭제할 것인지 한번 더 물어보고 삭제됩니다.
- [x] 브라우저창을 닫았다가 다시 열어도 데이터가 남아있습니다.

## _Tech Stack_

<div>
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652190-f113fe0f-6432-481e-9c9b-b1869ddc67c7.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/146652259-5c3b7a73-854c-40cc-bedd-f9a36f7ba664.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/148469158-5150ccf7-c857-4fa6-90ee-4d22fc4ffd6c.png">
  <img width="40" height="40" src="https://user-images.githubusercontent.com/82315118/153709482-4c2766f3-ac4e-4af5-a55b-dab205f6f885.png">
</div>

<hr>

## _Schedule_

***`22/03/2`***<br>
***1. 프로젝트 이름 변경 및 간소화***
> gh-pages 제거

***`22/02/27`***<br>
***1. 태그 공란시 ToDoCard에 태그 div 출력되는 오류 해결***

***2. 수정 완료 후 모달 자동으로 닫히게 수정***

<br>

***`22/02/23`***<br>
***1. 삭제 버튼 클릭시 재확인 팝업 출력***
<br>

***`22/02/22`***<br>
***1. Input 유효성 검사 추가***
> 태그 길이가 10이 넘어가면 ... 으로 줄임

***2. window함수 추가***
> 작성중 나가기를 누르면 경고창 활성화
<br>

***`22/02/20`***<br>
***1. ToDoCreator 컴포넌트 개발***
> \- PublicInput, InputForm 하위 컴포넌트 개발

***2. constants STRING 생성***

***3. Tag 분리 util 함수 개발***

***4. ATOMIC design을 이용한 컴포넌트 설계***

***5. ToDoCard 컴포넌트 개발***
> \- ToDoDetails 하위 컴포넌트 개발

***6. Filter 기능 구현***

***7. 모달 컴포넌트 개발***

***8. Gh-pages 빌드***
<br>

***`22/02/19`***<br>
***1. PublicBtn 컴포넌트 개발***
<br>

***`22/02/14`***<br>
***1. Tag 데이터 스키마 정의***
> \- combine reducer를 통한 스토어 재정의
<br>

***`22/02/13`***<br>
***1. 개발환경 설정 #2***
> \- 리덕스 스토어 설정 (리듀서, 액션, 슬라이스, 퍼시스트)
<br>

***2. To Do 데이터 스키마 정의***

***`22/02/12`***<br>
***1. 개발환경 설정 #1***
> \- 예상 필요 모듈 설치<br> - 타입스크립트 개발 환경 설정