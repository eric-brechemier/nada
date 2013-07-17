/*
  Check whether a substring is found in given string

  Parameters:
    string - string, the string where to look
    substring - string, the substring to look for

  Returns:
    boolean, true when the substring is found anywhere in the given string,
    false otherwise
*/
function contains( string, substring ) {
  return string.indexOf( substring ) >= 0;
}
