const colorChangeElement = document.getElementById("colorChangeElement");

document.addEventListener("keydown", function (event){
    if (event.key === "r"){
        colorChangeElement.style.backgroundColor = "red"
    } else if (event.key === "b"){
        colorChangeElement.style.backgroundColor = "blue"
    }
})