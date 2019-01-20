// http createServer -> server반환 -> server는 listen 메소드 가지고 있다.
//모듈이 존재한다(모듈 = 부품) -> 모듈 가져다 쓸 때 required함수 가져다 쓴다.

const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var sever = http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});
