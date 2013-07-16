/*
  Check whether a string starts with a given substring

  Parameters:
    string - string, the string where the search is done
    substring - string, the substring to look for

  Returns:
    boolean, true when the substring is found at the start of the given string,
    false otherwise
*/
function startsWith( string, substring ){
  return string.indexOf( substring ) === 0;
}
