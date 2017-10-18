function createNestedArr (jumlahRow, jumlahCol) {
  // your code here
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let setArr = [];

  for (let i = 0; i < jumlahRow; i++) {
    setArr.push([]);
    for (let j=0; j<jumlahCol; j++ ) {
      setArr[i].push(alphabet[Math.floor(Math.random() * 26)]);
    }
  }
  return setArr;
} 
// createNestedArr(5,3) // 5 ke bawah 3 ke samping 
console.log(createNestedArr(5, 3));