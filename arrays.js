var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var arrayAdd = "foo";

/*Should have (2) Parameters: An existing array and elements to add to it 
Should add elements to the beginning of the array
Should return a NEW array*/
function addElementToBeginningOfArray(chocolateBars, arrayAdd){
  chocolateBars = [arrayAdd, ...chocolateBars];
  return chocolateBars;
}addElementsToBeginningOfArray(chocolateBars,arrayAdd);

/*Should have (2) Parameters: An existing array and elements to add to it 
Should add elements to the beginning of the array
Should MODIFY the original array*/
function destructivelyAddElementToBeginningOfArray(chocolateBars, arrayAdd){
  chocolateBars.unshift(arrayAdd);
  return chocolateBars;
}destructivelyAddElementToBeginningOfArray(chocolateBars,arrayAdd);

function addElementToEndOfArray(chocolateBars, arrayAdd){
  chocolateBars = [chocolateBars, ...arrayAdd];
  return chocolateBars;
}addElementToEndOfArray(chocolateBars,arrayAdd);

// function destructivelyAddElementToEndOfArray(chocolateBars, arrayAdd){
//   chocolateBars.push(arrayAdd);
//   return chocolateBars;
// }destructivelyAddElementToEndOfArray(chocolateBars, arrayAdd);

// function accessElementInArray(chocolateBars, index){
//   return chocolateBars[index];  
// }accessElementInArray([3]);

// function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
//   chocolateBars.shift();
//   return chocolateBars;
// }destructivelyRemoveElementFromBeginningOfArray(chocolateBars);

// function removeElementFromBeginningOfArray(chocolateBars){
//   chocolateBars.slice(0);
//   return chocolateBars;
// }removeElementFromBeginningOfArray(chocolateBars);