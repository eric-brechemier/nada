/*
  Check whether given value is null or undefined
*/
function no( value ) {
  var undef; // do not trust global undefined, which can be set to a value
  return value === null || value === undef;
}
