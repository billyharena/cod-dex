

function changeColor(){

    let stone = document.getElementById("stone");
    let randomNumber = Math.floor((Math.random() * (9 - 1) + 1));
    document.querySelector("p").innerText = randomNumber;
    
    if(randomNumber == 1)
        stone.style.backgroundColor = "red";
    else if(randomNumber == 2)
        stone.style.backgroundColor = "orange";
    else if(randomNumber == 3)
        stone.style.backgroundColor = "yellow";
    else if(randomNumber == 4)
        stone.style.backgroundColor = "green";
    else if(randomNumber == 5)
        stone.style.backgroundColor = "blue";
    else if(randomNumber == 6)
        stone.style.backgroundColor = "#4169e1";
    else if(randomNumber == 7)
        stone.style.backgroundColor = "#00008b";
    else if(randomNumber == 8)
        stone.style.backgroundColor = "purple";
    else
        stone.style.backgroundColor = "black";
}