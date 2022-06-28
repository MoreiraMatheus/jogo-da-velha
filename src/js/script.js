const td = document.querySelectorAll('td') //lista de campos clicáveis 
const deuVelha = document.getElementById('velha') // tela final do jogo, ainda não programada
let playerAtual = 'X'
let vencedor = false

let round = 0 //indica o round atual
const possiveisVitorias = [ //combinações de vitória
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

td.forEach(item => {
    item.addEventListener('click', () =>{
        jogar(item)
    })
})

function jogar(item){
    // verifica se o campo já foi clicado ou não
    if(item.classList.contains('livre')){
        item.classList.remove('livre')
        round++
        XouO(item)
        vencedor = confereVitoria(playerAtual)
        console.log(vencedor)
        if(vencedor == true){
            resetgame()
        }
        if(round == 9 && vencedor == false){ //caso dê velha
            round = 0
            window.alert('deu velha')
            resetgame()
        }
    }
    else{
        item.classList.add('tremer')
    }
}

function XouO(elemento){ //função que adiciona "X" ou "O" na tela
    if(round % 2 == 1){
        playerAtual = 'X'
        elemento.classList.add('X')
        elemento.innerText = 'X'
        elemento.style.color = 'yellow'
    }
    else{
        playerAtual = 'O'
        elemento.classList.add('O')
        elemento.innerText = 'O'
        elemento.style.color = 'purple'
    }
}

function resetgame(){
    round = 0
    playerAtual = 'X'
    td.forEach(item => {
        item.style.backgroundColor = '#ccc'
        item.innerText = ''
        item.classList.add('livre')
        item.classList.remove('X')
        item.classList.remove('O')
    })
}

// estudar essa parte do código:
function confereVitoria(playerAtual){
    return possiveisVitorias.some(combination =>{
        return combination.every(index => {
            return td[index].classList.contains(playerAtual)
        })
    })
}

//Tasks:
//ver a possibilidade de tirar a variável round
//adicionar tela caso haja vencedor ou dê velha, essa tela será responsável por travar o jogo antes do reset, terá botão de "OK"