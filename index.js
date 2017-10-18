let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let createNestedArr = (jumlahCol, jumlahRow) => {
	let result = [];
	for (let i = 0 ; i<jumlahRow ; i++){
		let newArr = [];
		for (let j = 0 ; j<jumlahCol ; j++){
			newArr.push(alphabet[Math.floor(Math.random() * 26)])
		}
		result.push(newArr);
	}
	return result;
}


console.log(createNestedArr(5,3))
console.log("-----------------------------------------------------------------------------------------------------")
console.log(createNestedArr(4,2))
