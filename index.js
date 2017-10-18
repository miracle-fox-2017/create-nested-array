function createNestedArr (jumlahRow, jumlahCol){
  let isi = 'abcdefghijklmnopq'
  let arr = [];
  for (let i = 0; i<jumlahRow;i++){
    arr.push([])
    for (let j = 0;j<jumlahCol;j++){
      arr[i].push(isi[Math.floor(Math.random()*isi.length)])
    }
  }
  console.log(arr)
}

createNestedArr(5,3);
createNestedArr(4,2);
