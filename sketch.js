/*O jogo tem o objetivo de educar e incentivar o descarte consciente de resíduos  dos variados tipo, seja eles: vidro, pilhas, eletrônicos, entre outros. Voltado para os anos iniciais do ensino fundamental, que compreende o 1º ao 5º ano,  o jogo tem interface simples assim como sua jogabilidade, permitindo, dessa forma, uma fácil compreensão e assimilação da ideia central. 
Sorteando imagens aleatórias, de resíduos, o jogador/a deverá levar com o mouse ou teclado(está sendo decidido), a imagem até sua lixeira correspondente.*/  

var x = 50;var y = 100; var t = 100; var r = 100; 
var a = 50, b = 50;
var c = 1;
var img; var img2; var img03; var img4; var img5;
var opcao = 1;
var tela = 0, vida = 5, ponto = 0;
var tempo = 0, tempoS= 0, tempoM=0;
var rate = 1;

function preload() {
  img = loadImage('img06.jpg');
  img2 = loadImage('img05.jpg');
  img3 = loadImage('img07.jpg');
  img4 = loadImage('img08.jpg');
  img5 = loadImage('img09.png');
  
}


function setup() {
  createCanvas(500, 500);
  
  frameRate(rate);

}


function draw() {
 background(190,190,190);
  
  if(tela == 0)
    menu();
  if(tela == 1)
    jogo();
  if(tela == 2)
    instrucao();
  if(tela==3)
    creditos();

 }

function menu(){
  image(img,-58,4);

  rect(x,y,170,45);
  textSize(25);
  text("Jogar",100,130);
  text("Instruções",80,230);
  text("Créditos",73,330)
}

 function jogo(){
  image(img3,0,0);
  image(img5,150,150,85,85);
  textSize(20);
  text('Vidas: '+ vida, 30,60);
  text('Pontos: '+ ponto, 30,90);
   
   tempo = tempo + 1 ;
   tempoS = parseInt(tempo/rate);
   //tempoM = tempoS/60;
     
   text('Tempo: '+ tempoS + ' segundos', 30,120);
 
  for(a=20;a<=width;a=a+80){
  
    rect(a, 380, 70, 100);
    
   }
 
  }
 

function instrucao(){
  
  image(img2, 20, 40);
  fill(50)
  strokeWeight(4);
  stroke(51);
  rect(50, 235, 400, 100);
  textSize(9)
  fill(244);
  text('O jogador/a deverá levar o lixo mostrado na tela até uma lixeira correspondente ao tipo do resíduo.'+ '\n'+ 'A cor verde é para vidros, azul para papeis, amarela para metais e vermelha plástico.',55,250);
}

function creditos(){
  image(img4, 0, 0);
  rect(50, 350, 400, 100)
  textSize(11.3);
  text('O jogo foi planejado e desenvolvido pelo aluno Thiago Bezerra Marques'+ '\n'+ 'graduado do Bacharelado em Ciência e Tecnologia da Universidade Federal do' +'\n'+ 'Rio Grande do Norte.' ,50,365);
 
}
  
function keyPressed(){
    if(key=="ArrowUp" && y > 130){
     y=y-100;
    opcao=opcao-1;
    console.log(opcao)
  }
    if(key=="ArrowDown" && y < 300){
    
      y=y+100;
    opcao=opcao+1;
    console.log(opcao)
  }
if(key == 'Enter'){
  tela = opcao;
}

}