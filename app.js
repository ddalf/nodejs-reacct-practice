//express에서 권장하는 entry 파일 이름 - app.js
var express = require('express');
var app = express();
app.get('/login',function(req, res){
  res.send('<h1>login please</h1>');
}); //사용자가 접속 시 get방식 접속한 사용자 받기 위해서 호출 -> / : 홈페이지로 접속한 사용자
app.listen(3000, function(){
  console.log('Connected 3000 port!');
});
