const nestedArr = (col, row) => {
  const arrResult = [];

  const random = (row) => {
    let randomText = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < row; i++) {
      randomText += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    }
    
    return randomText;
  }

  for (let i = 0; i < 3; i++) {
    arrResult.push([random(row)]);
  }

  console.log(arrResult);
}

nestedArr(5, 3);
