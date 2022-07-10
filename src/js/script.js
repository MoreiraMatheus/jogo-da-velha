const teclas = document.querySelectorAll('td') //lista de campos clicáveis 
const telaResultado = document.getElementById('resultado') 
const placaranimado = document.getElementById('mostra-placar')
let playerAtual = 'X'
let vencedor = false
let round = 0
let placar = {
    X: 0, 
    O: 0,
    reset: function(){
        this.X = 0
        this.O = 0
    }}
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

teclas.forEach(item => {
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
        if(vencedor == true){
            resultado('vencedor')
        }
        else if(round == 9){ //caso dê velha
            round = 0
            resultado('velha')
        }
    }
    else{
        item.classList.add('tremer')
        setTimeout(()=>{
            item.classList.remove('tremer')
        }, 550)
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

function resetgame(resetPlacar=false){
    telaResultado.classList.remove('mostrar')
    telaResultado.classList.add('esconder')
    round = 0
    playerAtual = 'X'
    if(resetPlacar == true){
        placar.reset()
        placaranimado.innerHTML = `X:${placar.X} VS O: ${placar.O}`
    }
    console.log(placar)
    teclas.forEach(item => {
        item.style.backgroundColor = '#ccc'
        item.innerText = ''
        item.classList.add('livre')
        item.classList.remove('X')
        item.classList.remove('O')
    })
}

function confereVitoria(playerAtual){
    return possiveisVitorias.some(combination =>{
        return combination.every(index => {
            return teclas[index].classList.contains(playerAtual)
        })
    })
}

function resultado(tipo){
    telaResultado.classList.remove('esconder')
    telaResultado.classList.add('mostrar')
    if(tipo=='vencedor'){
        telaResultado.innerHTML = `<p>"${playerAtual}" foi o vencedor</p> <button onclick="resetgame()">OK</button>`
        if(playerAtual == 'X'){
            placar.X += 1
        }
        else{
            placar.O += 1
        }
        placaranimado.innerText = `X:${placar.X} VS O: ${placar.O}`
        console.log(placar)
    }
    else if(tipo=='velha'){
        telaResultado.innerHTML = '<p>Deu velha, empate!</p> <button onclick="resetgame()">OK</button>'
    }
}