let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg")

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>
{
    let option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
} 

const drawGame = () =>
{
    console.log("game was a draw")
}

const showWinner = (userWin,userChoice,compChoice) =>
{
    if(userWin)
    {
        console.log(`User Won This Round`)
        msg.innerText = `User Won This Round`
        msg.style.backgroundColor = "green"
        console.log(`user chose ${userChoice} & comp chose ${compChoice}`)
    }
    else
    {
        console.log(`Computer Won This Round`)
        msg.innerText = `computer Won This Round`
        msg.style.backgroundColor = "red"
        console.log(`user chose ${userChoice} & comp chose ${compChoice}`)
    }
}

const playGame = (userChoice) => 
{
    console.log(`user choice is = ${userChoice}`);

    const compChoice = genCompChoice();

    console.log(`Computer choice is = ${compChoice}`);

    if(userChoice === compChoice)
    {
        drawGame();
        msg.innerText = `This Round was a Draw`
        msg.style.backgroudColor = "yellow"
    }
    else
    {
        let userWin = true;
        if (userChoice === "rock")
        {
            userWin =compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            userWin =compChoice === "scissors" ? false : true;
        }
        else
        {
            userWin =compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((choice) =>
{
    choice.addEventListener("click", () =>
    {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});