// function credit(purchase){
//     if(purchase >=1500){
//         console.log("Disount")
//     }else{
//         console.log("No discoutnt")
//     }
// }
// credit(1900)

// let balance = 360;

// for (let i =1; balance >= 50;i++){
//     console.log(balance);
//     balance -=50

// }

// Initialize the initial amount and the amount to subtract per request
let initialAmount = 1050;  // Replace with your desired initial amount
const amountToSubtract = 200;  // Replace with the amount you want to subtract per request

// Function to make a request and subtract the amount
function makeRequest() {
  if (initialAmount >= amountToSubtract) {
    initialAmount -= amountToSubtract;
    console.log(`Request successful! Remaining amount: ${initialAmount}`);
  } else {
    console.log("Insufficient funds.");
  }
}

// Example usage: Make 5 requests using a loop
for (let i = 0; initialAmount>=200; i++) {
  makeRequest();
}
