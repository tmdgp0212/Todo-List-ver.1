# Todo-List(ver.1)📝

Todo list 를 작성하고 관리하는 페이지 입니다. 리스트는 Local Storage에 보관되어집니다.

- 데모사이트 : [DEMO](https://tmdgp0212.github.io/Todo-List-ver.1/)

- 작업기간 : 22.09.16 ~ 22.09.17 (총 2일)

- 사용언어 : `html` `scss` `javascript`

- 목표 : LocalStorage에 데이터를 넣거나 꺼내올 수 있도록 한다

- 작업내용 : 
  - 투두리스트에 일정을 추가하거나 삭제 할 수 있도록 하였습니다
  - 일정은 LocalStorage에 보관되어 페이지가 리로드 되어도 데이터가 보존됩니다
  - 현재 날짜와 시간이 보여집니다
  
## 🧡페이지 소개

### 💛메인 화면

![main](https://user-images.githubusercontent.com/112364408/213081718-6c9aa912-6bde-4f7a-8246-0dec13e19aa2.png)

메인 화면입니다.
이미 저장된 데이터가 있다면 페이지에 재 접속 했을 때 저장 된 일정이 불러와집니다

### 💛마우스 호버

![hover](https://user-images.githubusercontent.com/112364408/213081816-a60b2e40-1b75-4e5b-b6c8-1dbfafbdfbdc.png)

일정에 마우스를 올리면 하이라이트가 나타나며 해당 일정을 삭제할 수 있는 아이콘이 노출됩니다

### 💛저장된 일정이 없을 때 

![notodo](https://user-images.githubusercontent.com/112364408/213081943-1e445306-2a09-41d3-8c5f-4495804463b9.png)

저장 된 일정이 없다면 화면 중앙에 위와 같은 문구가 노출 되며, 
클릭 시 일정을 추가할 수 있는 아래의 인풋요소가 focus됩니다

### 💛스크롤 생성

![scroll](https://user-images.githubusercontent.com/112364408/213082117-f3fce38b-32ed-4d49-b068-e633168efebe.png)

저장 된 일정의 길이가 화면의 높이를 넘어서면 스크롤이 활성화 됩니다

### 💛Storage에 데이터 저장

![storage](https://user-images.githubusercontent.com/112364408/213082319-9c4bf1cd-c7a2-45bc-a9ad-f43c27d19f6b.png)

일정은 local storage에 저장되어집니다

### 💛페이지 시연

![todo](https://user-images.githubusercontent.com/112364408/213082396-956d5b38-c235-4ffe-8531-ab7b3c71e722.gif)
