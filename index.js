function createNestedArr(jumlahRow, jumlahCol) {
  let word = 'abcdefghijklmnopqrstuvwxyz';
  let nestArr = [];

  for (let i = 0; i < jumlahRow; i++) {
    let collum = [];
    for (let j = 0; j < jumlahCol; j++) {
      collum.push(word.charAt(Math.floor(Math.random() * word.length)));
    }

    nestArr.push(collum);
  }

  console.log(nestArr);
}

createNestedArr(5, 3);
createNestedArr(4, 2);
