const createNestedArr=(row,col)=>{
    let hasil=[];
    const kamus="-abcdefghijklmnopqrstuvwxyz-";
    const generateRand=()=>{
        const random=Math.ceil(Math.random() * 27);
        return random;
    }
    for(var i=0;i < row;i++){   // Create Array Structure
        hasil.push([]);
    }
    for(var j=0;j < hasil.length;j++){
        for(var k=0;k < col;k++){
            hasil[j].push(kamus[generateRand()]);
        }
    }
    return hasil;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
