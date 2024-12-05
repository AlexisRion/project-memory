
function displayUsername() {
    document.getElementById('username').innerHTML = "USER";
}
function displayEmail() {
    document.getElementById('email').innerHTML = "email@email.fr";
}
//console.log(rightName);

export function cardChoiceUser () {
    let userCardChoice;
    switch (cardChoice.value) {
        case "Batman":
            userCardChoice = "./data/cardsBatman.json"
            console.log(userCardChoice);
            playAudio(failSound)
            //url("../img/assets/batman_logo.jpg")
            break;
    
        case "PawPatrol":
            userCardChoice = "./data/cardsPawPatrol.json"
            console.log(userCardChoice);
             playAudio(failSound)
            break;
        default :
            userCardChoice = "./data/cardsBatman.json"
            break;
    }
    return userCardChoice
}

const failSound = document.getElementById('failSound');

function playAudio(audio) {
    audio.play();
}
function pauseAudio(audio) {
  audio.pause();
}

displayUsername()
displayEmail()

document.getElementById('cardChoice').addEventListener('change', cardChoiceUser);