const td = document.querySelectorAll('td') //lista de campos clicáveis 
let round = 0 //indica o round atual
let grade = [
    [[],[],[]],
    [[],[],[]],
    [[],[],[]]
]

td.forEach(item => {
    const dados = item // variável usada para inserrir o elemento dentro EventListner
    item.addEventListener('click', () =>{
        // verifica se o campo já foi clicado ou não
         if(item.classList.contains('livre')){
            item.classList.remove('livre')
            round++
            trocaFundo(dados)
            if(round == 9){ //caso dê velha
                resetFundo() 
                round = 0
                window.alert('deu velha') 
            }
        }
        else{
            jaClicou(dados)
        }
    })
})

function trocaFundo(elemento){ //função que troca a cor de fundo de acordo com o round atual, para diferenciar qual jogador está jogando
    if(round % 2 == 1){
        console.log(`Round:${round} numero impar`)
        elemento.style.backgroundColor = 'blue'
    }
    else{
        console.log(`Round:${round} numero par`)
        elemento.style.backgroundColor = 'red'
    }
}

function resetFundo(){ // função que adiciona a classe 'livre' a cada campo e muda a cor de fundo
    td.forEach(item => {
        item.style.backgroundColor = '#ccc'
        item.classList.add('livre')
    })
}

function jaClicou(elemento){
    elemento.classList.add('tremer')
    console.log('campo já selecionado')
}