/*
  Check whether given value is null or undefined

  Parameter:
    value - any, the value to check

  Returns:
    boolean, false when the value is null or undefined,
    false otherwise
*/
function no( value ) {
  var undef; // do not trust global undefined, which can be set to a value
  return value === null || value === undef;
}
