function nestedArr(jumlahRow,jumlahCol) {
  let rand='';
  let abjad = 'abcdefghijklmnopqrstuvwxyz';
  // let bung = []
  let arr = [];
   for(let i = 0; i < jumlahRow ; i++){
     arr.push([])
     for(let j = 0; j < jumlahCol ; j++){
       arr[i].push(abjad[Math.floor(Math.random() * 26)])
     }
   }
  return arr;
}
console.log(nestedArr(5,3))
