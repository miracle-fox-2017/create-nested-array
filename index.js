function createNestedArr (row,col){


  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')



  const grid = Array(row).fill().map(()=>Array(col))
  let r =0;
  let c =0;


  for(let i =0; i < row*col; i++){
    let index = Math.floor(Math.random() * alphabet.length );
    grid[r][c] = alphabet[index]
    if(r <=col){
      r++
    }else{
      r = 0
      c++
    }
  }

  return grid
}


console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
