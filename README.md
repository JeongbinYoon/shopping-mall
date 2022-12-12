# 쇼핑몰
## 기획 의도
쇼핑몰 형태의 주문 결제 흐름 파악과 시슴템을 구현해보고 전반적인 삼품 데이터를 처리하는 것을 경험해보고자 백엔드 개발자 1명과 함께 협업하였다.

자세한 백엔드 사항은 👉 https://github.com/yeonwoo2/shopping-mall

## 사용 기술
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white"/>  <img src="https://img.shields.io/badge/Recoil-333?style=flat&logo=Recoil&logoColor=white"/> 


# 구현 사항
+ 로그인 / 회원가입
+ 메인 페이지
+ 상품 정보
+ 주문 결제
+ 마이페이지

***

> ### 로그인 / 회원가입<br/>
로그인, 회원가입 폼의 유효성 체크를 위해 React-hook-form을 사용했다. 각 input 마다 에러메시지를 담아 필요한 경우 보여준다. 로그인 버튼 클릭시 유효성 체크가 진행되는 동안 로딩스피너를 보여준다. 로딩 스피너는 애니메이션을 적용하여 돌아가게 하였다. 로그인이 성공하면 메인페이지로 이동한다. 유저의 아이디, 비밀번호와 토큰은 recoil을 사용하여 관리하였다.
<br/>
<br/>
<img src="https://user-images.githubusercontent.com/86540140/207032187-1bcfd438-d5f4-4698-83d1-c6cb6ba8ef82.jpeg" width="700"><br/>
<img src="https://user-images.githubusercontent.com/86540140/207032199-34e87c1f-b6a4-4f83-92e0-0d02184ac633.jpeg" width="350">
<img src="https://user-images.githubusercontent.com/86540140/207032196-05f24bc1-83b9-46bc-8709-1106a592c204.jpeg" width="350"><br/>
<br/>

***로그인 관련 api** <br/>
api 요청하는 파일을 따로 관리하여 필요한 경우 import 후 사용하게 하였다. <br/><br/>
<img src="https://user-images.githubusercontent.com/86540140/207037142-e4f245db-4d7f-48b7-83ba-8ed3e44a2488.png" width="500"><br/>


<br/>
<br/>

> ### 메인 페이지
메인페이지에서는 가장 상단에 할인하는 상품을 슬라이더로 나타내었다. 아래 나열되어 있는 신상품들 또한 3초마다 자동으로 슬라이드가 되도록 설정하였다. <br/>
베스트 상품은 20개를 나열하였고 상품마다 붙어있는 HOT, 당일발송 태그는 해당 아이템의 카테고리에 들어오는 데이터에 따라 결정된다.
<br/><br/>
<img src="https://user-images.githubusercontent.com/86540140/207033315-40c3ea1e-0665-4d40-bb6f-457f85d2c72e.png" width="760"><br/>
<br/>

***상품 로드 관련 api** <br/>
상품아이디를 포함하여 POST 요청한 후 데이터를 받아온다.<br/>
<img src="https://user-images.githubusercontent.com/86540140/207041130-32164b48-b611-4f9a-b00b-90dce55a21bc.png" width="500"><br/>


<br/>
<br/>

> ### 상품 정보
메인 페이지에서 상품을 선택하면 상품 정보 페이지로 넘어온다. 받아온 상품 데이터를 통해 화면을 구성한다. 상품의 사이즈와 색상을 선택하면 하단에 바로 선택한 상품이 추가되고 주문하기 클릭시 주문 옵션 데이터를 저장한다.
<br/><br/>
<img src="https://user-images.githubusercontent.com/86540140/207041690-bb123759-d1b3-47eb-ab01-80e0d7a41521.png" width="760"><br/>
<br/>

***상품 데이터 타입** <br/>
<img src="https://user-images.githubusercontent.com/86540140/207042101-c4f8747e-1205-407b-aaa1-3b1d1eada792.png" width="300"><br/>

<br/>
<br/>

> ### 리뷰
<img src="https://user-images.githubusercontent.com/86540140/207033659-7a869331-2e15-4c8a-a42f-406ab35c7aa8.png" width="760"><br/>

<br/>
<br/>

> ### 주문결제
주문하기 버튼을 클릭하면 선택한 상품들을 결제할 수 있는 페이지로 이동한다. 사용자 정보를 입력하고 유효성 체크를 진행한다. <br/>
결제하기 클릭시 모든 정보가 유효하면 결제 모듈을 띄운다. 결제 라이브러리는 부트페이를 사용했으며 부트페이뿐만 아니라 백엔드로 데이터를 넘겨 데이터베이스에 저장한다.
<br/><br/>
<img src="https://user-images.githubusercontent.com/86540140/207033761-f19c4549-81e9-493e-a6db-237676bb7a42.jpeg" width="760"><br/>

<br/>
<br/>

> #### 주소 찾기
주소 찾기는 Kakao Daum 우편번호 서비스를 이용했으며 리액트, 타입스크립트 환경에서 사용할 수 있도록 적용하였다.
<br/><br/>
<img src="https://user-images.githubusercontent.com/86540140/207033832-5b2f295c-da09-43e3-b204-40c11508363b.jpeg" width="760"><br/>


