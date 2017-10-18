'use strict'
let createNestedArr = (jumlahCol,jumlahRow)=>{
  let abjad = 'abcdefgijklmnopqrstuvwxyz'
  let nested = []

  for(let i  = 0; i < jumlahRow; i++){
    nested.push([])
  }
  //console.log(nested)
  for(let i = 0; i < nested.length; i++){
    for(let j = 0; j < jumlahCol; j++){
      let random = (Math.floor(Math.random() * abjad.length) + 1)-1;
      nested[i].push(abjad[random])
    }
  }
  console.log(nested)
}

console.log(createNestedArr(5,3))
