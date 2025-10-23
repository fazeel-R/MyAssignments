//*Learn how Promises can simulate tasks like fetching data, where you can use a simple condition (e.g.,
//const data = true) instead of actually fetching data from a server Expected Completion Time: */
const data = true;
function fetchDataFromDatabase() {
    return new Promise((resolve, reject) => {
        console.log("Data is being fetched......")
        setTimeout(() => {
            if (data) {
                resolve("Data Found")
            }
            else{
                reject("Error No Data Found")
            }
        },3000)

    })
}
let promise =new fetchDataFromDatabase();
promise.then(()=>{
    console.log("Data fetched successfully!")
})
.catch((reason)=>{
    console.log("Data not found!")
})




