module.exports = function solveSudoku(matrix) {
   for (var i = 0; i < 9; i++){
    for (var j = 0; j < 9; j++){
	if(matrix[i][j] === 0){
	var num = getArr(matrix, i, j);
	 }else{continue;}
	  for (var i1 = 0; i1 < num.length; i1++) {
                matrix[i][j] = num[i1];
                if (solveSudoku(matrix)) {
                    return matrix;
                }
            }
            matrix[i][j] = 0;
            return false;
	 }
	 }
	return matrix;
	console.log(matrix);
 }

function getArr(mat,n1,n2){  
  var arr = [];
   let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 arr.length = 0;
  	  for (let k = 0; k < 9; k++){
		 if(mat[n1][k] !== 0){
		  arr.push(mat[n1][k]);
	   }
	         }
	  for (let k = 0; k < 9; k++){
		 if(mat[k][n2] !== 0){
		 arr.push(mat[k][n2]);
		 	     } 
				 }
      var sq1 = Math.floor(n1/3);
	 var sq2 = Math.floor(n2/3);
	 	  for (let i1 = 3*sq1; i1 < 3*sq1+3 ; i1++){
      for (let j1 = 3*sq2; j1 < 3*sq2+3; j1++){
		  if(mat[i1][j1] !== 0){
		 arr.push(mat[i1][j1]);
		      }
	  }
	  }
 var newArr = num.filter(function(el){ return arr.indexOf(el) < 0; });
		 return newArr;
	 }
	 