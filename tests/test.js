/*
  Run a single unit test and catch errors

  Parameters:
    func - function(), the function to test
           a string message:

  Returns:
    string, the outcome of the test:
    * "SUCCESS" for success
    * "ERROR: " followed with the error message in case of error
*/
function test( func ) {
  try {
    func();
    return "SUCCESS";
  } catch( e ) {
    return "ERROR: " + e.message;
  }
}
