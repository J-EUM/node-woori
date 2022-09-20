



// require명령어로 express라는 모듈을 다운받음
const express = require("express"); 

// express를 실행시켜서 app변수안에 넣어줌
const app = express(); 

// listen 명령어로 서버띄우는데 (포트번호, 콜백함수)
app.listen(3000,() => {console.log("서버가동");}); 

// app.<http 메서드>(경로, 실행할동작)
app.get("", (req, res) => {
    res.send("여기는 루트입니다") // 응답으로 보내줄 메세지
}); 
// "/"아니면 ""(루트 url)로 get 요청시 동작하겠다. 요청이 뭔지 알아야 하기 때문에 파라미터로 req, res받는다

app.get("/login", (req, res) => {
    res.send("여기는 로그인입니다")
});


/* 
터미널
>>> node app.js
터미널에서 node 명령어로 app.js파일을 js로 읽어줌
node는 js파일을 v8엔진을 사용해서 코드를 해석하는 명령어다. v8엔진: 자바스크립트 컴파일러같은거!
바로 실행하면 
Error: Cannot find module 'express'

npm->노드패키지매니저로 설치해준다
>>> npm install express -s(--save)
-s 옵션을 줘야 package.json파일로 설치한 모듈들 관리가 쉽다
npm install을 하면 node_modules에 express모듈이 설치되면서 그걸 가동하기 위해 필요한 모듈들까지 다 설치됨
node_modules가 있어서 require를 통해 express모듈을 찾을수 있음

깔면 node_modules, packaage-lock.json, package.json 생김
이제 node app.js하면
서버실행됨.
*/