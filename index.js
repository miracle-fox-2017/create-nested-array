function createdNestedArr(jumlahRow, jumlahCol) {
  var arrCol = []
  for(var i = 0; i < jumlahRow; i++) {
    var arrRow = []
    for(var j = 0; j < jumlahCol; j++) {
      arrRow.push(String.fromCharCode(Math.floor(Math.random() * (122 - 97) + 97)))
    }
    arrCol.push(arrRow)
  }
  return arrCol
}

console.log(createdNestedArr(5, 3));
console.log(createdNestedArr(4, 2));
