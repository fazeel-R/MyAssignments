let score = 67;

switch (true) {
    case score>=90:
        console.log("Grade A")        
        break;

    case score>=80 && score<90:
        console.log("Grade B")
        break;
    case score>=70 && score<80:
        console.log("Grade C")
        break;
    case score>=60 && score<70:
        console.log("Grade D")
        break;
    case score<60:
        console.log("Grade F")
        break;

    default:
        console.log("No grade found")  ;
        break;
}