/*
  Run the given function and return the result

  This function is useful to create a private scope for the declaration
  of a module:
  var module = privately(function(){
    // private scope
    ...
  });
  as a replacement to the complex Immediately Invoked Function Expression [1]:
  var module = (function(){
    // private scope
    ...
  }());
  or confusing alternatives such as:
  var module = !function(){
    // private scope
    ...
  };
  or even:
  var module = new function(){
    // private scope
    ...
  };

  Parameter:
    func - function(), the function to run, called without arguments

  Returns:
    any, the result of the function called

  Reference:
  [1] Immediately-Invoked Function Expression (IIFE)
  2010-11-15, by Ben Alman
  http://benalman.com
    /news/2010/11/immediately-invoked-function-expression/
*/
function privately( func ){
  return func();
}
