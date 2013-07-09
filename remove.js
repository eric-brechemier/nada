/*
  Remove all items with given value from given array

  Parameters:
    array - array, the array to modify
    value - any, the value to remove from the array (including duplicates)
*/
function remove( array, value ) {
  var i;
  for ( i = array.length; i >= 0; i-- ) {
    if ( array[ i ] === value ){
      array.splice( i, 1 );
    }
  }
}
