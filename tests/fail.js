/*
  Fail a test by throwing an error with given message

  Parameters:
    message - string, the message describing the cause of failure

  Example:
    test( function() {
      fail( "Missing tests" );
    });
*/
function fail( message ) {
 throw new Error( message );
}
