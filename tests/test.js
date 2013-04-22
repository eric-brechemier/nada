/*
  Run a single unit test and catch errors

  Parameters:
    func - function(), the function to test
    log  - function( message ), the callback for the outcome of the test,
           a string message:
           * "SUCCESS" for success
           * "ERROR: " followed with the error message in case of error

  Returns:
    boolean, true for success, false in case of error
*/
function test( func, log ){

  try {
    func();
    log( "SUCCESS" );
    return true;
  } catch( e ) {
    log( "ERROR: " + e.message );
    return false;
  }
}
