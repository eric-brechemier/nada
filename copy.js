/*
  Copy an array

  Parameter:
    array - an array, not null or undefined

  Returns:
    array, a shallow copy of given array
*/
function copyArray(array){
  return [].concat(array);
}
