//Question 1

function greetUser(name) {
    document.getElementById("output").innerText = "Hello, " + name + ", how are you doing today?";
}

greetUser("Denys");

//Question 2

function greetMessage() {
    document.getElementById("message").innerText = "Hello, World!";
}

//Question 3

function calculate() {
    const num1 = +document.getElementById("number1").value; 
    const num2 = +document.getElementById("number2").value; 
    document.getElementById("result").innerText = "Sum: " + (num1 + num2); 
}

//Question 4

function updateTitle() {
    const newTitle = document.getElementById("text").value;
    document.getElementById("title").innerText = newTitle; 
}


//Question 5
function combinevalues() {
    const value1 = document.getElementById("value1").value;
    const value2 = document.getElementById("value2").value;
    document.getElementById("combinedText").innerText = value1 + " " + value2;
}
//Question 6

function changeBackground() {
    document.getElementById("colorBox").style.backgroundColor = "blue";
}
