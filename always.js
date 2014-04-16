/*
  Create a function which always returns the given value

  Parameter:
    value - any, any value

  Returns:
    function, a function which always returns the given value,
    whatever the input
*/
function always( value ) {
  return function() {
    return value;
  };
}
