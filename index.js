function createNestedArr(jumlahRow,jumlahCol) {
  //code
  let arr = [];
  let str = 'abcdefghijklmn'
  for (let i = 0; i < jumlahRow; i++) {
    let tamp = [];
    let spl = str.split('')
    for (var j = 0; j < jumlahCol; j++) {
      tamp.push(spl[Math.floor((Math.random()*spl.length))])
    }
    arr.push(tamp)
  }
  console.log(arr);
}
createNestedArr(5,3);
//output3x5
console.log('-------');
//output4x2
createNestedArr(4,2);
