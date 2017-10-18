function createNestedArr(jumlahRow, jumlahCol) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arr = [];
    for (let i = 0; i < jumlahRow; i++) {
        let row = [];
        for (let j = 0; j < jumlahCol; j++) {
            row.push(alphabet[Math.floor(Math.random() * 26)])
        }
        arr.push(row)
    }
    return arr;
}

console.log(createNestedArr(5, 3))
console.log(createNestedArr(4, 2))