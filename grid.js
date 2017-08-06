let array = [ [ 'x', 'O', 'O' ], [ 'O', 'O', 'O' ], [ 'O', 'O', 'O' ] ];



var diagonal = function(Array) {
    if(Array[0][0] == Array[1][1] && Array[0][0] == Array[2][2]) {
        return true; 
    }if(Array[0][2] == Array[1][1] && Array[0][2] == Array[2][0]) {
        return true;
    }

}

console.log(diagonal(array));

if(diagonal(array)) {
    console.log("nimeshinda");
}
