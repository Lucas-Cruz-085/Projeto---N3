let valor = 0; //Cria variavel com valor inicial de 0

const display = document.getElementById ("valor");
const btnAdicionar = document.getElementById("incremento");
const btnRetirar = document.getElementById("decremento");
const btnReset = document.getElementById("reset");


//getElementById -> vincula os botoes pelo ID na tag HTML
//display.textCotent = valor ---> atualiza o número na tela
//addEventListner("click") ---> Diz oque acontece quando é CLICADO

function atualizaDisplay(){
    display.textContent=valor;
}

btnAdicionar.addEventListener("click",function(){
    valor++;
    atualizaDisplay();
});

btnRetirar.addEventListener("click",function(){
    valor--;
    atualizaDisplay();
});

btnReset.addEventListener("click",function(){
    valor = 0;
    atualizaDisplay();
});