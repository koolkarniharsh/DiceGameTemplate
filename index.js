let play1 = false;
let play2 = false;

function onReset(){
    let imageSrc = "images/dice6.png";
    document.querySelector(".img1").setAttribute("src",imageSrc);
    document.querySelector(".img2").setAttribute("src",imageSrc);
    document.querySelector(".container").firstElementChild.innerHTML = ("Roll the dice!")
}

// function onRoll(){
//     let value1 = Math.ceil(Math.random() * 6);
//     let image1 = "images/dice"+value1+".png";
//     document.querySelector(".img1").setAttribute("src",image1);
//
//     let value2 = Math.ceil(Math.random() * 6);
//     let image2 = "images/dice"+value2+".png";
//     document.querySelector(".img2").setAttribute("src",image2);
//
//     if(value1 > value2){
//         document.querySelector(".container").firstElementChild.innerHTML = ("🏳 Player 1 wins!")
//     }else if (value2 > value1){
//         document.querySelector(".container").firstElementChild.innerHTML = ("Player 2 wins! 🏳")
//     }else {
//         document.querySelector(".container").firstElementChild.innerHTML = ("Draw!")
//     }
// }

function onRollDie(classOfImage){
    let value = Math.ceil(Math.random() * 6);
    let imageSrc= "images/dice"+value+".png";
    document.querySelector("."+classOfImage).setAttribute("src",imageSrc);
    if(classOfImage === "img1"){
        play1 = true;
    }else {
        play2 = true;
    }
    if(play1 && play2){
        checkForWinner();
    }
}

function checkForWinner(){
    let images = document.getElementsByTagName("img");
    let player1 = images[0].getAttribute("src").slice(11,12);
    let player2 = images[1].getAttribute("src").slice(11,12);

    play1 = play2 = false;

    if(player1 > player2){
        document.querySelector(".container").firstElementChild.innerHTML = ("🏳 Player 1 wins!")
    }else if (player2 > player1){
        document.querySelector(".container").firstElementChild.innerHTML = ("Player 2 wins! 🏳")
    }else {
        document.querySelector(".container").firstElementChild.innerHTML = ("Draw!")
    }
}
