var drums = document.querySelectorAll(".drum");

for(var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        keyClick(this.textContent);
        buttonAnimation(this.textContent);
    });
}

document.addEventListener("keydown", function (keyEvent) {
    keyClick(keyEvent.key);
    buttonAnimation(keyEvent.key);
});
function keyClick(button) {
    switch(button) {
        case "w":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;
        default:
            console.log("Invalid click");
    }
}
function buttonAnimation(button) {
    var activeButton = document.querySelector(("." + button));
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
  
}