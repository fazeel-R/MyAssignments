// To reverse the string using the loops and check if it is a palidrom

let word = "madam";
let reverse = "";
let lenghtOfStr = word.length
// let char = word.split("");
// console.log(char)
console.log(lenghtOfStr);

//for loop
for(i=lenghtOfStr-1; i>=0; i--){
    reverse+= word.charAt(i)

}
console.log(`The reversed string is: ${reverse}`);

// To check if the reverse is palidrom

if(reverse === word){
    console.log("It’s a palindrome!")
}
else{
    console.log("Not a palindrome!")
}