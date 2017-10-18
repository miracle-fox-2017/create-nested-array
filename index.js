function alphaRandom(){
  let huruf = 'abcdefghijklmnopqrstuvwxyz'
  return huruf.charAt(Math.floor(Math.random() * huruf.length));
}

function nestedArray(angka1, angka2){
  let hasil = [];
  for (var rows = 0; rows < angka1; rows++) {
    let row = [];
    for (var col = 0; col < angka2; col++) {
      row.push(alphaRandom())
    }
    hasil.push(row)
  }
  return hasil
}
console.log(nestedArray(5, 3));
