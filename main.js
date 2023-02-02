//one way. split into numbers and join individual numbers?
function sumOfIntegersInString(s){
  const searchNumber = s.split(/[^0-9]/gi)
  let total = 0
  for (let i = 0; i < searchNumber.length; i++) {
    total += Number(searchNumber[i])
  }
  return total
}

//
function sumOfIntegersInString(s){
  return s.replace(/[^0-9]/g, ' ').split(' ').reduce((a,b) => a + +b,0)
}
