function carringOne(arg) {
  let res = 0
  if(arg) {
    res+=arg
    return arg => arg ? carringOne(res+arg) : res
  }
  return res
}

function carringMultiple(...arg) {
  let res = 0
  if(arg.length) {
    res += arg.reduce((acc, curr) => acc + curr, res)
    return (...arg) => arg.length ? carringMultiple(...arg,res) : res
  }
  return res
}
console.log(carringOne(1)(2)(3)(4)(5)())

console.log(carringMultiple(1,2,3,4)(1,2,3,4,5)(1,3,4,5)(2)())