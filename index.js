function createNestedArr(jumlahRow, jumlahCol) {
    //create random alphabets
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    
    let nestArr = [];
for(let j = 0; j < jumlahRow; j++){

    let isi = '';
    for (let i = 0; i < jumlahCol; i++) {
        isi += abc.charAt(Math.floor(Math.random() * abc.length));
    }
    
    nestArr.push(isi.split(''))



}
console.log(nestArr)
}

//Driver code
createNestedArr(5, 3)