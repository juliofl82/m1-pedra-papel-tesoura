/* Desenvolva seu código abaixo */
function playRockPaperScissor(player1, player2) {
    const pedra = 'Pedra';
    const tesoura = 'Tesoura';
    const papel = 'Papel';
    
    if ((player1 == pedra && player2 == tesoura) || (player1 == tesoura && player2 == papel) || (player1 == papel && player2 == pedra)) {
        return 'Jogador 1 venceu!';
    } else if (player1 === player2) {
        return 'Empate!';
    } else {
        return 'Jogador 2 venceu!';
    }
}
console.log(playRockPaperScissor(player1, player2));
