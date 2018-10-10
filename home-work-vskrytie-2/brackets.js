const str1 = '({[]()()})'
const str2 = '({[]})'
const str3 = '(()(()))'
const str4 = '(()))(()))'
const str5 = '(()))][[]]](()))'
const str6 = '(()[]{}()()[]{})'

function brackets (str) {
  const pairs = {')':'(', '}':'{', ']':'['}
  return !str.split('').reduce((accum, currValue)=> {
    if(pairs[currValue] === accum[accum.length-1] ) {
      return accum.slice(0,-1)
    }
    return accum.concat(currValue)
  }).length
}

console.log(brackets(str1),'===',true)
console.log(brackets(str2),'===',true)
console.log(brackets(str3),'===',true)
console.log(brackets(str4),'===',false)
console.log(brackets(str5),'===',false)
console.log(brackets(str6),'===',true)