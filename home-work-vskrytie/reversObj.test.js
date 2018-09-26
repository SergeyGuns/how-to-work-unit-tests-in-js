const reversObj =  require("./reversObj").reversObj
const obj = {
  curr: 1,
  next: {
    curr: 2,
    next: {
      curr: 3,
      next: {
        curr: 4
      }
    }
  }
}

const revObj = {
  curr: 4,
  next: {
    curr: 3,
    next: {
      curr: 2,
      next: {
        curr: 1
      }
    }
  }
}



test('reversObj test', () => {
  expect(reversObj(obj)).toEqual(reversObj(revObj))
})