function createNestedArr(row, col){

	let result = []
	let temp = []
	let size = row*col
	let a=0

	for(let i=0;i<size;i++){
		temp[i]=String.fromCharCode(Math.random()*(122-97)+97);
	}

	for(let i=0; i<row; i++){
		result[i] = []
		for(let j=0; j<col; j++){
			result[i].push(temp[a])
			a++
		}
	}

	return result
}



console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));