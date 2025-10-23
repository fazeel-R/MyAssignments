// Learn how to use callbacks to handle asynchronous tasks in JavaScript. 

let browser = "Chrome";

function checkBrowserVersion(callback) {
    setTimeout(callback, 3000)
}

function callback() {
    console.log(`Browser version using callback is ${browser}`);
}

checkBrowserVersion(callback);