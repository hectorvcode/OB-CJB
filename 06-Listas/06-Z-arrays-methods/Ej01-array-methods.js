/**
1. Write a JavaScript function to check whether an `input` is an array or not. Go to the editor
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
 */
console.log("Is this an array?");
function is_array(arr1){
    return Array.isArray(arr1);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

/**
2. Write a JavaScript function to clone an array. Go to the editor
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
 */
console.log("Clonning an array");
function array_Clone(arr2){
    return [...arr2]
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

