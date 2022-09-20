/* http로 서버 띄우기: express를 써야할 이유를 체감하기 위해 */
const http = require("http"); // http는 내장모듈이기때매 npm으로 설치 불필요
const app = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}) // 한글깨짐처리. 브라우저에게 한글로 해석하라는 응답을 준다. (정상응답코드, html텍스트 utf-8로 해석해라)

    //console.log(req.url)// http createServer에서는 콜백함수로 req, res를 받을수있고 라우팅하는방법은 req.url을 이용해서 가능 이거 콘솔 찍고 localhost:3001들어가보면 / 뜸. ->루트경로(:3001/) 이후 url을 파싱할수있다. 
    if (req.url == "/"){
        res.end("루트입니다.") // http res에선 send없음 end사용
    } else if (req.url == "/login"){
        res.end("로그인입니다.")
    }
}); 

app.listen(3001, ()=>{
    console.log("http로 가동된 서버입니다.")
});
// 여기까지 하고 실행시키면 한글 깨져서 나옴. if로 url분기처리 하는것도 지저분하고~ -> express를 쓰는 이유




/* express로 서버 띄우기 */

// // require명령어로 express라는 모듈을 다운받음
// const express = require("express"); 

// // express를 실행시켜서 app변수안에 넣어줌
// const app = express(); 

// // listen 명령어로 서버띄우는데 (포트번호, 콜백함수)
// app.listen(3000,() => {console.log("서버가동");}); 

// // app.<http 메서드>(경로, 실행할동작)
// app.get("", (req, res) => {
//     res.send("여기는 루트입니다") // 응답으로 보내줄 메세지
// }); 
// // "/"아니면 ""(루트 url)로 get 요청시 동작하겠다. 요청이 뭔지 알아야 하기 때문에 파라미터로 req, res받는다

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인입니다")
// });


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