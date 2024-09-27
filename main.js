const nextBtn = document.getElementById('next') // VARIAVEL PARA O BOTAO NEXT
const prevBtn = document.getElementById('prev') // VARIAVEL PARA O BOTAO PREV 
let description = document.querySelectorAll('.list .text-description') // VAR CONTENDO UM ARRAY DE TODOS OS ELEMENTOS .text-description DENTRO DO CONTAINER PAI .list
let resizeImg = document.querySelectorAll('.back-img') // VAR EM ARRAY PARA TODOS OS ITEMS QUE CONTEM A CLASSE .card
let sliderLine = document.querySelectorAll('.slider-bar')
let numberslide = document.getElementById('position-number')

let active = 0    // VAR PARA DEFINIR POSICOES DE ARRAY 
let firstPosition = 0 // VAR PARA DEFINIR POSICOES DE ARRAY 
let lastPosition = description.length - 1// VAR PARA DEFINIR POSICOES DE ARRAY 

nextBtn.addEventListener('click', function(){ // EVENTO DE CLICK, ASSIM QUE O BOTAO FOR CLICADO IRA REPRODUZIR AS FUNCOES

    nextCard();
    nextTextEffect();
    nextResize();
    nextSlideBar();
})

prevBtn.addEventListener('click', function(){  // EVENTO DE CLICK, ASSIM QUE O BOTAO FOR CLICADO IRA REPRODUZIR AS FUNCOES
    
    prevCard();
    prevTextEffect();
    prevResize();
    prevSlideBar();
})



function nextCard() {
    let cards = document.querySelectorAll('.card') // SELECIONA TODAS AS CLASSES QUE CONTEM .card EM UMA NODELIST ( ARRAY )
    let movecard = document.querySelector('section') // SELECIONA O CONTAINER PAI PARA ALTERAR A POSIÇÃO DOS ITENS INTERNOS (.card)

    movecard.appendChild(cards[0]); // MOVE O PRIMEIRO ELEMENTO PARA O FINAL DO ARRAY 

}

function prevCard() {
    let cards = document.querySelectorAll('.card')  // SELECIONA TODAS AS CLASSES QUE CONTEM .card EM UMA NODELIST ( ARRAY )
    let movecard = document.querySelector('section') // SELECIONA O CONTAINER PAI PARA ALTERAR A POSIÇÃO DOS ITENS INTERNOS (.card)


    movecard.insertBefore(cards[6], cards[0]) // MOVE O ULTIMO ITEM (cards[6]) PARA ANTES DO ITEM (card[0])
}

function nextTextEffect() {
    let removeEffect = document.querySelector('.text-description.text-effect') // SELECIONA O PRIMEIRO ELEMENTO COM A CLASSE .text-effect

    removeEffect.classList.remove('text-effect') // REMOVE A CLASSE NO PRIMEIRO ELEMENTO QUE APARECER ATIVO

    active = active + 1 > lastPosition ? 0 : active + 1  // CONDIÇÃO TERNÁRIA PARA ATUALIZAR O VALOR DA VAR active NO ESCOPO GLOBAL, PARA MODIFICAR CADA CLASSE CORRETA
    //  active(0) = se active(0) + 1 for maior que lastPosition (6), então o valor da var active volta para o 0, se for menor, soma mais 1.

    description[active].classList.add('text-effect') // ADICIONA A CLASSE NA POSÇÃO DO VALOR ATUAL DA VAR active.
}

function prevTextEffect() {
    let removeEffect = document.querySelector('.text-description.text-effect') //SELECIONA O PRIMEIRO ELEMENTO COM A CLASSE .text-effect

    removeEffect.classList.remove('text-effect') // REMOVE A CLASSE NO PRIMEIRO ELEMENTO QUE APARECER ATIVO

    active = active - 1 < firstPosition ? lastPosition : active - 1 // CONDIÇÃO TERNÁRIA PARA ATUALIZAR O VALOR DA VAR active NO ESCOPO GLOBAL, PARA MODIFICAR CADA CLASSE CORRETA
    //  active(0) = se active(0) - 1 for menor que firstPosition (0), então o valor da var active volta para lastPosition, se for maior, subtrai 1.

    description[active].classList.add('text-effect')
}

function nextResize() {
    let removeimg = document.querySelector('.back-img.resize-img') // SELECIONA O PRIMEIRO ELEMENTO QUE CONTEM A CLASSE ATIVA

    removeimg.classList.remove('resize-img') // REMOVE A CLASSE

    resizeImg[active].classList.add('resize-img') // ADICIONA A CLASSE NA POSICAO ACTIVE DEFINIDA NA FUNCAO ANTERIOR, A QUAL JOGOU O VALOR PARA O ESCOPO GLOBAL.
}

function prevResize() {
    let removeimg = document.querySelector('.back-img.resize-img') // SELECIONA O PRIMEIRO ELEMENTO QUE CONTEM A CLASSE ATIVA

    removeimg.classList.remove('resize-img') // REMOVE A CLASSE

    resizeImg[active].classList.add('resize-img') // ADICIONA A CLASSE NA POSICAO ACTIVE DEFINIDA NA FUNCAO ANTERIOR, A QUAL JOGOU O VALOR PARA O ESCOPO GLOBAL.
}

function nextSlideBar() {
    if (active > 0){ // ADICIONA AS CLASSES SE O VALOR DA VAR ACTIVE FOR MAIOR QUE NA POSIÇÃO ACTIVE.
        sliderLine[active].classList.add('select')
    }
    else if (active === 0 ){ 
        for (let i = 1; i < 7; i++){
            sliderLine[i].classList.remove('select')
        } // REMOVE A CLASSE NA POSICAO LET I SE ACTIVE FOR IGUAL A 0
    }

    numberslide.innerHTML = '0'+(active + 1)
}

function prevSlideBar() {
    if (active === 6){ // SE ACTIVE FOR IGUAL A 6, ADICIONA A CLASSE EM TODAS AS POSICOES DA VAR I.
        for (let i = 1; i < 7; i++){
            sliderLine[i].classList.add('select')
        }
    }
    else if (active < 6){ // SE ACTIVE FOR MENOR QUE 6, REMOVE A CLASSE UM POR UM.
        sliderLine[active + 1].classList.remove('select')
    }

    numberslide.innerHTML = '0'+(active + 1)
}
