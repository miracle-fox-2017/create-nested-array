//random number function
let randAlphabet = () => {
  let alpabet = "abcdefghijklmnopqrstuvwxyz";
  //random number antara 0 sd 25
  let random = Math.floor(Math.random() * 25);
  return alpabet[random];
}

//function generate nested array
let createNestedArr = (jumlahCol, jumlahRow) => {
  //code here
  let result = [];
  for(let i = 0; i<jumlahRow; i++){
    result.push([]);
    for(let j = 0; j<jumlahCol; j++){
      result[i].push(randAlphabet());
    }
  }
  return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
