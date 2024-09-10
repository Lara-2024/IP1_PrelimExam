document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    let wins = 0;
    let losses = 0;

    const userChoiceDisplay = document.getElementById('player1');
    const computerChoiceDisplay = document.getElementById('player2');
    const outcomeDisplay = document.getElementById('outcome');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    const resetButton = document.getElementById('reset');

    const buttons = document.querySelectorAll('.choice-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);

            userChoiceDisplay.textContent = `Player 1: ${userChoice}`;
            computerChoiceDisplay.textContent = `Player 2: ${computerChoice}`;
            outcomeDisplay.textContent = `${result}`;

            if (result === 'You win!') {
                wins++;
                winsDisplay.textContent = wins;
            } else if (result === 'You lose!') {
                losses++;
                lossesDisplay.textContent = losses;
            }
        });
    });

    resetButton.addEventListener('click', () => {
        wins = 0;
        losses = 0;
        winsDisplay.textContent = wins;
        lossesDisplay.textContent = losses;
        userChoiceDisplay.textContent = 'Player 1: ';
        computerChoiceDisplay.textContent = 'Player 2: ';
        outcomeDisplay.textContent = '';
    });

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(user, computer) {
        if (user === computer) {
            return 'It\'s a draw!';
        }
        if (
            (user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')
        ) {
            return 'You win!';
        }
        return 'You lose!';
    }
});

