// getting the count the target char

let empName = "Fazeel";
let targetChar = 'e';
let lenghtOfStr = empName.length;
let count =0;
//console.log(lenghtOfStr);
for(i=0; i<lenghtOfStr; i++){
    if(empName.charAt(i)==targetChar){
        count++
    }
}

console.log(count)