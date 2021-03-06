/*
  Assert that given value is true or fail with given message

  Parameters:
    value - boolean, the value to check
    message - string, the error message for the exception

  Note:
  An exception is thrown for any value different from true,
  including all non-boolean values: numbers, strings, objects, arrays...
*/
function assert( value, message ) {
  if ( value !== true ) {
    throw new Error( message );
  }
}
