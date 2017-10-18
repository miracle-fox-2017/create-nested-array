function createNestedArr(jumlahRow, jumlahCol) {
	let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	let arr = []

	for (let i = 0; i < jumlahRow; i++ ) {
		let row = []
		for (let j = 0; j < jumlahCol; j++) {
			row.push(alphabet[Math.floor(Math.random() * alphabet.length)])
		}
		arr.push(row)
	}
	return arr
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))