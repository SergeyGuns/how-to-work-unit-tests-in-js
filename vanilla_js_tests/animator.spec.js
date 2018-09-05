const animatorTest = (Animator) => {

  const blockForTest = {
    className: 'block block_element'
  }

  const animator = new Animator(blockForTest)

  animator.set(0)
  console.log(
  `expected class "block block_element state_0"
    blockForTest.className = ${blockForTest.className}`
    
  )
  console.log(`%c test done ${blockForTest.className === "block block_element state_0" ? 'OK':'fail'}`, 'background: #222; color: #bada55')
  console.log('expected class "block block_element state_0" blockForTest.className = '+ blockForTest.className)
  animator.set(1)  
  console.log('blockForTest.className = '+ blockForTest.className)

}

module.exports = {
  animatorTest:animatorTest
} 