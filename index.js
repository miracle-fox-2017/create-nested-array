function alphabet(jumlahRow, jumlahCol) {
  let text = '';
  let huruf = 'abcdefghijklmnopqrstuvwxyz';
  debugger;

  for (let i = 0; i < jumlahCol; i++){
      text += huruf.charAt(Math.floor(Math.random() * huruf.length));
  }

  return text;
}

function createNestedArr(jumlahRow, jumlahCol){
    let a = ''
    let arr = [];

    for (let i = 0; i < jumlahRow; i++) {
      let huruf = alphabet(jumlahRow, jumlahCol).split('');
      arr.push(huruf)
    }
    return arr;
}

console.log(createNestedArr(5, 3));
