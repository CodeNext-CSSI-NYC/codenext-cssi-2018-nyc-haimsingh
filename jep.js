function make2(array1, array2) {
	let empty = []
	if (array1.length >= 2) {
		empty.push(array1[0]);
		empty.push(array1[1]);
	} else if (array1.length == 1) {
		empty.push(array1[0]);
		empty.push(array2[0]);
	} else {
		empty.push(array2[0]);
		empty.push(array2[1]);
	}
	console.log(empty);
}

make2([1], [2, 3]);
make2([4, 5], [])