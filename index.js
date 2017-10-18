function getLetter() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  var random = Math.ceil((Math.random() * alphabet.length -1));
  return alphabet[random];
}

function nestedArray(jumlahRow, jumlahCol) {
    let arr = [];
    for(var i = 0 ; i < jumlahRow ; i++) {
      arr.push([]);
        for(var j = 0 ; j < jumlahCol ; j++) {
          arr[i].push(getLetter());
        }
      }
 return arr;
}

console.log(nestedArray(3,5));
console.log(nestedArray(3,4));
console.log(nestedArray(3,6));
