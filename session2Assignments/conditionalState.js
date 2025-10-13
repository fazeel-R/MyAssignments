//Learn how to use if-else and switch-case statements in JavaScript to make decisions in a program.

let browser = "Chrome";

if(browser == "Chrome"){
    console.log("Launching Chrome browser")
}
else{
    console.log("Launching Default browser")
}

//Switch
let testType = 'Sanity'

switch (testType) {
    case 'Smoke':
        console.log('Running Smoke Tests');
        break;

    case 'Sanity':
        console.log("Running Sanity Tests");
        break;

    case 'Regression':
        console.log("Running Regression Tests");
        break;

    default:
        console.log("No tests found")
        break;
}