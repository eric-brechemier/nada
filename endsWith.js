/*
  Check whether a string ends with a given substring

  Parameters:
    string - string, the string where to look
    substring - string, the substring to look for

  Returns:
    boolean, true if the substring is found at the end of given string,
    false otherwise
*/
function endsWith( string, substring ){
  var position = string.lastIndexOf( substring );
  return position >= 0 && position + substring.length === string.length;
}
