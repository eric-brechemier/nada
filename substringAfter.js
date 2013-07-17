/*
  Extract the end of a string after given substring

  Parameters:
    string - string, the string from which to extract the end
    substring - string, the substring to look for

  Returns:
    string, the end of the string after the first occurrence of given substring
    or the empty string when the substring is not found in the string.
*/
function substringAfter( string, substring ) {
  var position = string.indexOf( substring );
  if ( position === -1 ) {
    return "";
  }
  return string.slice( position + substring.length );
}
