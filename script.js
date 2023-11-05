var clickedForBirthdate = false;
var clickedForEducation = false;

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById("birthdate").addEventListener("click", function() {
    if (!clickedForBirthdate) {
        this.style.backgroundColor = "#412DD6";
        this.style.color = "#C8F9EC";
        clickedForBirthdate = true;
    } else {
        const randomBackgroundColor = getRandomColor();
        const randomColor = getRandomColor();
        this.style.backgroundColor = randomBackgroundColor;
        this.style.color = randomColor;
    }
});
document.querySelector("#education").addEventListener("click", function() {
    if (!clickedForEducation) {
        this.style.backgroundColor = "#100112";
        this.style.color = "#00E1D9";
        clickedForEducation = true;
    } else {
        const randomBackgroundColor = getRandomColor();
        const randomColor = getRandomColor();
        this.style.backgroundColor = randomBackgroundColor;
        this.style.color = randomColor;
    }
});

var image = document.querySelector("img");
let newImage = null;

function addImage() {
    newImage = document.createElement("img");
    newImage.src = "images/Irpin.jpg";
    newImage.width = 700;
    newImage.height = 500;
    document.body.appendChild(newImage);
}

function increaseImageSize() {
    newImage.style.width = (newImage.width + 50) + "px";
    newImage.style.height = (newImage.height + 50) + "px";
}

function decreaseImageSize() {
    newImage.style.width = (newImage.width - 50) + "px";
    newImage.style.height = (newImage.height - 50) + "px";
}

function deleteImage() {
    newImage.parentNode.removeChild(newImage);
}

document.getElementById("addButton").addEventListener("click", addImage);
document.getElementById("increaseButton").addEventListener("click", increaseImageSize);
document.getElementById("decreaseButton").addEventListener("click", decreaseImageSize);
document.getElementById("deleteButton").addEventListener("click", deleteImage);

