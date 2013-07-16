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
  //   \s* optionally followed with one or several white-space characters
  //   ( followed with group 1:
  //     [^]*? optionally one or several of any character including newlines,
  //           in a non-greedy way (matching as little characters as possible)
  //   ) end of group 1
  //   \s* optionally followed with one or several white-space characters
  //   $ followed with the end of the string
  // with:
  //   $1 the group 1
  //
  // Note:
  // /./ matches any character except newline characters.
  // /[^]/ matches any character including newline characters.
  //
  // Reference:
  // Special Characters in Regular Expressions
  // in Mozilla Developer Network
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions
  return string.replace( /^\s*([^]*?)\s*$/, "$1" );
}
