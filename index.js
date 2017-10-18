function createNestedArr(jumlahRow, jumlahCol){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let nestArr = []

  for(let r=0; r<jumlahRow; r++){
    let row = []
    for(let c=0; c<jumlahCol; c++){
      row.push(alphabet[Math.floor(Math.random()*13)])
    }
    nestArr.push(row)
  }
  return nestArr
}

createNestedArr(5,3)
createNestedArr(4,2)
console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
