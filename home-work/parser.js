const objParserToHtml = (data, space = '') => {
  // console.log(data)
  return `${space}<${data.tag}${data.attributes ? 
    Object.keys(data.attributes).map(attr=> ` ${attr}="${data.attributes[attr]}"`) 
    :
    ''}>${data.childs.map((child)=>{
      if(typeof child === 'string') {
        return child
      } else {
        return '\n' + objParserToHtml(child, data.tag!=='html'?space+'  ':space)
      }
    }).join('')}${!~['li','title'].indexOf(data.tag)?'\n'+space:''}</${data.tag}>`

  //you code
  
}

module.exports = {
  objParserToHtml:objParserToHtml
}