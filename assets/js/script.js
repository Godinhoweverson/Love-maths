// wait for the dom to finish loading before running the game
// get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function{
            if (this.getAttribute("data-type") === "submit") {
                alert("You Click submit!");
            } else {
                let gametype = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

function runGame() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswe() {

}

function displayAddtionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}