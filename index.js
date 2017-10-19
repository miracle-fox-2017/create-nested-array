function nestedArray(jumlahRow,jumlahCol){
  let arr = [];
  let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(let i = 0; i < jumlahCol; i ++){
    let row = [];
    for(let y = 0; y < jumlahRow; y++){
      row.push(alpha.charAt(Math.floor(Math.random()*alpha.length)))
    }
    arr.push(row)
  }
  return arr
}
console.log(nestedArray(5,3));
