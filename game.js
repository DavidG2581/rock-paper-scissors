
choices = ["rock","paper","scissors"];

function getComputerChoice() {
    let random_number = Math.floor(Math.random()*100);
    console.log(random_number)
    if (random_number <= (100*.3333)){
        return choices[0]
    } else if (random_number>(100*.3333) && random_number <= (100*.6666)) {
        return choices[1]
    }else {
        return choices[2]
    }
}

document.getElementById('message').innerHTML = getComputerChoice();
