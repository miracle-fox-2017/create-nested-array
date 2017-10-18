function createNestedArr(jumlahRow, jumlahCol) {
    var alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var setArr = [];
    for (var i = 0; i < jumlahRow; i++) {
        setArr.push([]);
        for (var j = 0; j < jumlahCol; j++) {
            setArr[i].push(alfa[Math.floor(Math.random() * alfa.length-1)]);
        }
    }
    return setArr;
}
console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));