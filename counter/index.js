// // 

// //create a variable that stores the count
// //put an onclick action that observes and increment the count
// //change the count id in the html to reflect the new count
 let count = 0;

const increase = () =>{
  count = count + 1;
  document.getElementById("count").textContent = count
}

let saving = document.getElementById("Previous")


const save = () => {
  alert(`The saved value for this trip is ${count}`)
  let seperator = +count + " - ";
  saving.textContent += seperator;
  count = 0
  document.getElementById("count").textContent = count
} 

// // let points = 3;

// // const addPoints = () => {
// //    points+=3
// // }


// // const subPoints = () => {
// //   points-=1
// // }


// // addPoints()


// const wrong = () => {
//   document.getElementById("error").innerText = 'something went wrong'
// }

// let firstNumber = Math.floor((Math.random() * 10) + 2);
// let secondNumber = Math.floor((Math.random() * 10) + 2);

// const sum = firstNumber + secondNumber

// console.log(sum)


