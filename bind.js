/*
  Wrap a function in a closure that configures given object as context

  Parameters:
    func - function, the function to wrap
    object - object, the object to provide as 'this' for the function

  Returns:
    function, a closure that calls the given function with provided parameters,
    with the given object configured as 'this', and returns the same value.

  Note:
  This function calls the apply() method of the given function, and its
  behavior changes depending on whether the function is in strict mode.

  When the provided function is not in strict mode:

    1) a null argument for context object defaults to the global object
    2) automatic boxing of arguments is performed

    Reference:
    https://developer.mozilla.org/en-US/docs/JavaScript/Reference
      /Functions_and_function_scope/Strict_mode#.22Securing.22_JavaScript
*/
function bind( func, object ) {
  return function() {
    return func.apply( object, arguments );
  };
}
