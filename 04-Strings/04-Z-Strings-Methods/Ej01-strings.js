/**
1. Write a JavaScript function to check whether an `input` is a string or not.
Test Data :
console.log(is_string('w3resource'));
true
console.log(is_string([1, 2, 4, 0]));
false
 */
console.log("Is a string?");
function is_string(string){
    if(typeof string === "string"){
        return true;
    } else {
        return false;
    }
}
console.log(is_string([1, 2, 4, 0]));

/**
2. Write a JavaScript function to check whether a string is blank or not.
Test Data :
console.log(is_Blank(''));
console.log(is_Blank('abc'));
true
false
 */
console.log("Is blank?");
function is_Blank(string1){
    if(string1.length === 0){
        return true;
    } else {
        return false;
    }
}
console.log(is_Blank(''));

/**
3. Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
 */
console.log("Split String");
function string_to_array(string2){
    return string2.split(" ");
}
console.log(string_to_array("Robin Singh"));

/**
4. Write a JavaScript function to extract a specified number of characters from a string.
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
 */
console.log("Extract Characters");
function truncate_string(string3, numChars){
    return string3.substring(0, numChars);
}
console.log(truncate_string("Robin Singh", 4));

/**
5. Write a JavaScript function to convert a string in abbreviated form.
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."
 */
console.log("Convert to Abbreviated");
function abbrev_name(string4){
    let result1 = string4.split(" ");
    return result1[0] + " " + result1[1].charAt(0) + ".";
}
console.log(abbrev_name("Robin Singh"));

/**
6. Write a JavaScript function to hide email addresses to protect from unauthorized user.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
 */
console.log("Hide email address");
function protect_email(string5){
    let splittedString = string5.split("@");
    let firstPart = splittedString[0];
    let halfFirstPart = firstPart.split("_");
    let first = halfFirstPart[0];
    let second = splittedString[1];
    return first + "...@" + second;
}
console.log(protect_email("robin_singh@example.com"));

/**
7. Write a JavaScript function to parameterize a string
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"
Click me to see the solution
 */
console.log("Parametrize a String");
function string_parameterize(string7){
    return string7.replaceAll(" ", "-").toLowerCase();
}
console.log(string_parameterize("Robin Singh from USA."));

/**
8. Write a JavaScript function to capitalize the first letter of a string
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"
 */
console.log("Capitalize first letter");
function capitalize(string8){
    return string8.charAt(0).toUpperCase() + string8.slice(1);
}
console.log(capitalize('js string exercises'));

/**
9. Write a JavaScript function to capitalize the first letter of each word in a string.
Test Data :
console.log(capitalize_Words('js string exercises'));
"Js String Exercises"
 */
console.log("Capitalize first letter of each word");
function capitalize_Words(string9){
    let arr = string9.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    let str2 = arr.join(" ");
    return str2;
}
console.log(capitalize_Words('js string exercises'));

/**
10. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter 
and converts upper case letters to lower case, and lower case letters to upper case.
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */
console.log("Lower case to upper case and vs");
let res = '';
function swapcase(string10){
    for(let i = 0; i < string10.length; i++){
        let c = string10[i];
        if(c == c.toUpperCase()){
            res = res + c.toLowerCase();
        } else if(c == c.toLowerCase()){
            res = res + c.toUpperCase();
        } else {
            res = res +c
        }
    }
    return res;
}
console.log(swapcase('AbCde'));