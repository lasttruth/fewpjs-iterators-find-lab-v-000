const testVar = {}
const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]
function testFunc() {
  return "hi"
}


superbowlWin = (y)=> {
  let result = y.find(y => y.result === "W"
  )
  return !!result ? result.year : undefined
}
