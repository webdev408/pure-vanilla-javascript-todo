let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttonInnerHTML = this.innerHTML;
    switch (buttonInnerHTML) {
      case "W":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "A":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "S":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "D":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
      case "J":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "K":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
      case "L":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
}

// function add(num1, num2) {
//   return num1 + num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function calculator(num1, num2, operator) {
//   return operator(num1, num2);
// }
// calculator(4, 5, add);
// calculator(4, 5, multiply);
// calculator(6, 3, subtract);
