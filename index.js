
function createNestedArr (jumlahRow, jumlahCol){
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var nestedArr = [];
  for(let i = 0; i < jumlahRow; i++){
    nestedArr.push([]);
    for(let j = 0; j < jumlahCol; j++){
      nestedArr[i].push(alphabet[Math.ceil(Math.random()*alphabet.length-1)]);
    }
  }
  console.log(nestedArr);
}

createNestedArr(5,3);
createNestedArr(4,2);
