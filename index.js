function createNestedArr(jumlahRow, jumlahCol){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var arrAlphabet = alphabet.split('')
  // console.log(arrAlphabet)
  var nestedArr = []
  for(var i=0; i < jumlahCol; i++){
    nestedArr.push([])
    // console.log(nestedArr)
    for(var j = 0; j < jumlahRow; j++){
      nestedArr[i].push(alphabet.charAt(Math.floor(Math.random() *alphabet.length)))
    }
  }
  return nestedArr

}
console.log(createNestedArr(3,5));
console.log(createNestedArr(4,2));
