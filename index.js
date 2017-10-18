'use strict'

function createdNestedArr(jumlahRow, jumlahColumn){
	let huruf = 'abcdefghijklmnopqrstuvwxyz'
	let arr = []

	
	for(var i = 0; i < jumlahColumn; i++){
		
		let arrTampung = []
		for(var j = 0; j < jumlahRow; j++){
			arrTampung.push(huruf[Math.floor(huruf.length * Math.random())])
		}
		arr.push(arrTampung)
	}

	return arr
}

console.log(createdNestedArr(3,5))
console.log(createdNestedArr(2,4))
