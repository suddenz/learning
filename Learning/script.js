//Javascript source code
'use strict';

function comprare(a, b) {
	if(a > b) return -1;
	if(a == b) return 0;
	if (a < b) return 1;
}

let arr = [5, 2, 1, -10, 8];

arr.sort(comprare);

console.log( arr ); // 8, 5, 2, 1, -10