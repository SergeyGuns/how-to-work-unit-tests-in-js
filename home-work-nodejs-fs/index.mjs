// nodemon --experimental-modules home-work-nodejs-fs/index.mjs

import fs from 'fs'
import http from 'http'
import URL from 'url'

//
const arr = [
  {
    asdf: 'asdf'
  }
]

http.createServer((request,response)=>{
  const url = URL.parse(request.url)

  console.log(url.parse(request.url))
  if(url.pathname === '/'|| url.pathname === '/index.html') {
    response.end(fs.readFileSync('./home-work-nodejs-fs/static/index.html'))
  }

  if(~url.pathname.indexOf('/json')) {
    console.log(url.pathname)
    response.writeHead(200, {
      'Content-Type': 'application/json'
    });
    // response.write();
    response.end(JSON.stringify(arr))
  }
    // res.end(fs.readFileSync('./home-work-nodejs-fs/static/index.html'));
}).listen(3000)

