/*
  Copy an array

  Parameter:
    array - an array, not null or undefined

  Returns:
    array, a shallow copy of given array
*/
function copy(array){
  return [].concat(array);
}
