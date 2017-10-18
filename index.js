const createNestedArray = (jumRow, jumCol) => {
    let arrCol = [];
   
    for (let i = 0; i < jumCol; i++) {
        arrCol.push(createRowContent(jumRow));
    }

    return arrCol;
}



const createRowContent = (maxItem) => {
	let arrContent = [];

	for (let i = 0; i < maxItem; i++) {
		arrContent.push(
			String.fromCharCode(Math.floor((Math.random() * 25) + 65)).toLowerCase()
		);
	}

	return arrContent;
}


console.log(createNestedArray(4, 2));