function createNestedArr(jumlahRow, jumlahCol){
  let abj = 'abcdefghijklmnopqrstuvwxyz'
  let result = []
  for (let i = 0; i < jumlahRow; i++) {
    let row = []
    for (let i = 0; i < jumlahCol; i++) {
      let random = Math.floor(Math.random(0)*abj.length)
      row.push(abj[random])
    }
    result.push(row)
  }
  return result
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
