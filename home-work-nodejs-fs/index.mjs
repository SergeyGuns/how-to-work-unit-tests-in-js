// nodemon --experimental-modules home-work-nodejs-fs/index.mjs

import fs from 'fs'
import http from 'http'
import URL from 'url'
import cities from './static/cities'
//
// console.log(cities)
const arr = [
  {
    asdf: 'asdf'
  }
]

const filterCitiesByMask = query => citi =>  ~citi.name.toUpperCase().indexOf(query.toUpperCase())

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
    let query = url.query.split('=')[1]
    let filteredCities = cities.filter(filterCitiesByMask(query))
    if(filteredCities.length > 100) filteredCities.splice(20, filteredCities.length-1)
    response.end(JSON.stringify(filteredCities))
  }
    // res.end(fs.readFileSync('./home-work-nodejs-fs/static/index.html'));
}).listen(3000)

