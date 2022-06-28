const td = document.querySelectorAll('td') //lista de campos clicáveis 
const deuVelha = document.getElementById('velha')

let round = 0 //indica o round atual
const possiveisVitorias = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i <= td.length-1; i++){
    console.log(td[i].cellIndex)
}

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
        trocaFundo(item)
        confereVitoria()
        if(round == 9){ //caso dê velha
            round = 0
            iniciagame()
        }
    }
    else{
        item.classList.add('tremer')
    }
}

function trocaFundo(elemento){ //função que troca a cor de fundo de acordo com o round atual, para diferenciar qual jogador está jogando
    if(round % 2 == 1){
        elemento.innerText = 'x'
        elemento.style.color = 'yellow'
    }
    else{
        elemento.innerText = 'O'
        elemento.style.color = 'purple'
    }
}

function iniciagame(){// função que adiciona a classe 'livre' a cada campo e muda a cor de fundo
    td.forEach(item => {
        item.style.backgroundColor = '#ccc'
        item.innerText = ''
        item.classList.add('livre')
    })
}

function confereVitoria(){
    
}