const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let isjumping = false //variavel para saber se está pulando ou não
let position = 0; //dinossauro começa embaixo


function hadleKeyUp( event){

    if(event.keyCode === 32){
        //console.log('Pressionou espaço')
        if(!isjumping){ //se ele não  estiver pulando, ele pula
        jump();
        }
    }

}

//responsável pelo pulo do dinossauro
function jump(){


    isjumping = true;

    let upInterval = setInterval(() => {

        if(position >= 150){

            clearInterval(upInterval);

        //descendo
        let downInterval = setInterval(() =>{

            if( position <= 0){ //se posição for menor ou = a zero limpa o intervalo de descida
             
                clearInterval(downInterval); //fazendo com que pare de descer
                isjumping = false; //quando terminar de pular muda para falso

            }else{
                position -= 20;
                dino.style.bottom = position + 'px';
            }
        })

        }else{
        //subindo
        position +=20;

        dino.style.bottom = position + 'px';
        }

    }, 20)

}

//gerando os cactus
function createCactus(){

    const cactus = document.createElement('div')
    let cactusPosition = 1000; //variavel para ver a posição do cactus
    let randomTime = Math.random() * 6000; //criando cactus aleatórios

    console.log(randomTime)

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus) //adicinar um filho

    //indo para esquerda
    let leftInterval = setInterval(() =>{

         
        //surgindo novos cactus       
        if( cactusPosition < -60){ //for menor que 60, saindo da tela

            clearInterval(leftInterval); //limpa o intervalo
            background.removeChild; //remove o elemento filho p/fora da tela
        }else if( cactusPosition > 0 && cactusPosition < 60 && position < 60 ){ 
         //Gamer over
 
           clearInterval(leftInterval); //para de ir para esquerda
           document.body.innerHTML = "<h1 class='game-over'> Fim do jogo</h1> "

        } else {//nao saiu da tela
            
            cactusPosition -= 10; //velocidade que vai se mover para esquerda,pode aumentar a dificuldade aqui
            cactus.style.left = cactusPosition + 'px'; //cactus a esquerda + px

        }

    }, 20);

    setTimeout(createCactus, randomTime);//seve p/execute uma determinada função em um determinado tempo

}
createCactus(); //criando cactus no início do jogo
document.addEventListener('keyup', hadleKeyUp);