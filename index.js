function nested(row,col){
    let hasil=[];
    let input = 'bhjacbjkhrvjrbjhbrjbvkjarbklarbvklbk'
    for(let i=0;i<row;i++){
        hasil.push([])
    }
    function random(arr){
      let num=0;
      num = Math.floor(Math.random()*arr.length);
      // console.log(num);
      return arr[num];
    }
    // console.log(random(input));
    // console.log(hasil);
    for(let j=0;j<col;j++){
      for(let i=0;i<hasil.length;i++){
        hasil[i].push(random(input))
      }
    }

    return hasil;
}
console.log(nested(5,3));
