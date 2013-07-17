/*
  Extract the start of a string before given substring

  Parameters:
    string - string, the string from which to extract the start
    substring - string, the substring to look for

  Returns:
    string, the start of the string before first occurrence of given substring,
    or the empty string when the substring is not found in the string.

  Note:
    When the substring is the empty string, the empty string is returned.
*/
function substringBefore( string, substring ) {
  var position = string.indexOf( substring );
  if ( position === -1 ) {
    return "";
  }
  return string.slice( 0, position );
}
