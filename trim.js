/*
  Trim given string (remove whitespace on both ends)

  Parameter:
    string - string, the string to trim

  Returns:
    string, a copy of the given string with all the whitespace characters
    found at the start and end of the string removed.
*/
function trim( string ) {
  // Details of the regular expression used below:
  // Replace any substring matching:
  //   ^ the start of the string
  //   \s+ followed with one or several white-space characters
  //   | or
  //   \s+ one or several white-space characters
  //   $ followed with the end of the string
  // with:
  //   an empty string
  return string.replace( /^\s+|\s+$/g, "" );
}
