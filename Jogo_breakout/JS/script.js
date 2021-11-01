//canvas
let canvas = document.getElementById('game-canvas');
let contexto_canvas = canvas.getContext("2d");

//bola
let x = canvas.width / 2;
let y = canvas.height - 30;
let raio_bola = 10
let dx = 3;
let dy = -3;

function draw_ball(){
    /*
    O método CanvasRenderingContext2D.beginPath() da API Canvas 2D  inicia um novo caminho (path), esvaziando a lista de sub-caminhos (sub-paths). 
    Use esse método quando você quiser criar um novo path.
    */
    contexto_canvas.beginPath(); //põe a "caneta" no papel

    /*
    O método arc() cria um arco circular centralizado em (x, y) com um raio. O caminho inicia-se no anguloInicial, e finaliza no anguloFinal, 
    e é desenhado no sentido antiHoario (o padrão é no sentido horario).
    */
    contexto_canvas.arc(x,y, raio_bola, 0, Math.PI * 2);

    /* 
    A propriedade CanvasRenderingContext2D.fillStyle da API do Canvas 2D especifica a cor ou o estilo para usar regiões internas. O valor inicial é #000 (preto).
    */
    contexto_canvas.fillStyle = "#808080";

    /*
    O método CanvasRenderingContext2D.fill() da API Canvas 2D preenche um dado path ou o path atual com o estilo atual de preenchimento 
    usando uma regra de controle diferente de zero, ou uma regra par-ímpar.
    */
    contexto_canvas.fill();

    /*
    O método CanvasRenderingContext2D.closePath() da API Canvas 2D faz o ponto da caneta (pen) mover-se de volta para o início do sub-caminho (sub-path) atual.
    Tenta adicionar uma nova linha (mas não a desenha realmente) que conecta o ponto atual até o ponto inicial. 
    Se a região (shape) já estiver fechada, ou tem somente um ponto na tela, esta função não funciona.
    */
    contexto_canvas.closePath(); //tira a "caneta" do papel
}

//jogador
let jogador_altura = 10;
let jogador_largura = 75;
let jogador_x = (canvas.width-jogador_largura)/2;
let seta_direita = false;
let seta_esquerda = false;

document.addEventListener("keydown", function(evento){
    if(evento.code == "ArrowRight"){
        seta_direita = true;
    }
    else if(evento.code == "ArrowLeft"){
        seta_esquerda = true;
    }
}, false);

document.addEventListener("keyup", function(evento){
    if(evento.code == "ArrowRight"){
        seta_direita = false;
    }
    else if(evento.code == "ArrowLeft"){
        seta_esquerda = false;
    }
}, false);

function draw_jogador(){
    contexto_canvas.beginPath();

    /*
    O método CanvasRenderingContext2D.rect() da Canvas 2D API cria um path (trajeto) para um retângulo na posição (x, y), cujo tamanho é 
    determinado pelo width (largura) e height (altura). Esses quatro pontos estão conectados por linhas retas e o sub-path (sub-trajeto) é marcado como fechado, para que você possa fill (preencher) ou stroke (contornar) o retângulo.
    */
    contexto_canvas.rect(jogador_x, canvas.height - jogador_altura, jogador_largura, jogador_altura);

    contexto_canvas.fillStyle = "#2F4F4F";
    contexto_canvas.fill();
    contexto_canvas.closePath();
}

//Tijolos
let linhas = 5;
let colunas = 3;
let tijolo_largura = 75;
let tijolo_altura = 20;
let padding = 10;
let tijolo_deslocamento_cima = 30;
let tijolo_deslocamento_esquerda = 30;

let cores = ["#0095DD", "#A52A2A", "#8A2BE2", "#00008B", "#006400", "#FF8C00", "#FF00FF", "#7CFC00", "#4B0082", "#40E0D0", "#FFFF00", "#000000", "#00FFFF",
"#A52A2A", "#FA8072", "#FF6347", "#9ACD32", "#A0522D", "#9932CC"];

let tijolos = [];
for(let l = 0; l < linhas; l++){
    tijolos[l] = [];
    for(let c = 0; c < colunas; c++){
        tijolos[l][c] = {x: 0, y: 0, status: 1, cor: cores[Math.floor(Math.random() * cores.length)]};
    }
}

function draw_tijolos(){
    for(let l = 0; l < linhas; l++){
        for(let c = 0; c < colunas; c++){
            if(tijolos[l][c].status == 1){
                let tijolo_x = (l * (tijolo_largura + padding)) + tijolo_deslocamento_esquerda;
                let tijolo_y = (c * (tijolo_altura + padding)) + tijolo_deslocamento_cima;

                tijolos[l][c].x = tijolo_x;
                tijolos[l][c].y = tijolo_y;

                contexto_canvas.beginPath();
                contexto_canvas.rect(tijolo_x,tijolo_y, tijolo_largura, tijolo_altura);
                contexto_canvas.fillStyle = tijolos[l][c].cor;
                contexto_canvas.fill();
                contexto_canvas.closePath();
            }
        }
    }
}

//lidando com a pontuação e colisão da bola com o bloco
let pontos = 0;

function colisao_bloco(){
    for(let l = 0; l < linhas; l++){
        for(let c = 0; c < colunas; c++){
            let b = tijolos[l][c];
            if(b.status == 1){
                if(x > b.x && x < b.x+tijolo_largura && y > b.y && y < b.y+tijolo_altura) {
                    dy = -dy;
                    b.status = 0;
                    pontos += 1;

                    if(pontos == linhas * colunas){
                        alert("Vitória");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function draw_pontos(){
    contexto_canvas.font = "16px Arial";
    contexto_canvas.fillStyle = "#000000";
    contexto_canvas.fillText("Pontos: " + pontos, 8, 20);
}

//vidas
let vidas = 3;

function draw_vidas(){
    contexto_canvas.font = "16px Arial";
    contexto_canvas.fillStyle = "#000000";
    contexto_canvas.fillText("Vidas: " + vidas, canvas.width-65, 20);
}

// desenhando o canvas (game loop)
function draw(){
    /*
    O método CanvasRenderingContext2D.clearRect() da API Canvas 2D limpa todos os pixels de um retângulo definido na posição (x, y) e 
    tamanho (width (largura), height (altura)) para uma cor preta transparente, apagando algum conteúdo anterior.
    */
    contexto_canvas.clearRect(0,0, canvas.width, canvas.height); //limpando o canvas inteiro a cada frame

    draw_tijolos();
    draw_ball();
    draw_jogador();
    draw_pontos();
    draw_vidas();
    colisao_bloco();

    //colisão da bola nas paredes
    if((x + dx) > (canvas.width-raio_bola) || (x + dx) < (raio_bola)) {
        dx = -dx;
    }
    if((y + dy) < raio_bola) {
        dy = -dy;
    }
    else if((y+dy) > (canvas.height-raio_bola)){
        if(x > jogador_x && x < (jogador_x + jogador_largura)){
            dy = -dy;
        }
        else{
            --vidas;
            if(!vidas){
                alert("Game Over");
                document.location.reload();
            }
            else{
                x = canvas.width/2;
                y = canvas.height -30;
                dx = 3;
                dy = -3;
                jogador_x = (canvas.width - jogador_largura)/2;
            }
        }
    }

    //movendo jogador
    if(seta_direita && jogador_x < canvas.width-jogador_largura){
        jogador_x += 7;
    }
    else if(seta_esquerda && jogador_x > 0){
        jogador_x -= 7;
    }

    x += dx;
    y += dy;

    requestAnimationFrame(draw); //ira chamar a função draw recursivamente (game loop)
}

draw()