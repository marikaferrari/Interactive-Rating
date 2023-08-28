/* Generate a function connected to the buttons. Once a button has being clicked together with the SUBMIT button, 
it should show the rating in a new tab/in an alert window*/

/* 
Once any button is clicked, the rating number should be stored in a variable. 

1. Create 5 different variables which will take the input from each button (5); 
2. Create 5 variables which will determine the value of each button (5);

*/

const button1Input = document.querySelector("#button1");
button1Input.addEventListener("click", getRating);

const button2Input = document.querySelector("#button2");
button2Input.addEventListener("click", getRating);

const button3Input = document.querySelector("#button3");
button3Input.addEventListener("click", getRating);

const button4Input = document.querySelector("#button4");
button4Input.addEventListener("click", getRating);

const button5Input = document.querySelector("#button5");
button5Input.addEventListener("click", getRating);

// let button = [1, 2, 3, 4, 5];
//let feedback
/*case 1:
selectedButton = button3Input;
console.log(button[0]);
break;*/

function getRating() {
    switch(this) {
        case button1Input:
            console.log("1");
            break;
        case button2Input: 
            console.log("2");
            break;
        case button3Input:
            console.log("3");
            break;
        case button4Input: 
            console.log("4");
            break;
        case button5Input:
            console.log("5");
            break;
        default:
            console.log("Thank you for visiting!");
    }
    alert(`You selected ${this.textcontent} out of 5. We appreciate you taking the time to give a rating!`);
} 

document.querySelector("#submit").addEventListener("click", getRating);