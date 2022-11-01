
const btn1 = document.querySelector("div.sinal > div.p1");
const btn2 = document.querySelector("div.sinal > div.p2");
const btn3 = document.querySelector("div.sinal > div.p3");
const botao = document.querySelector("button");
const h2 = document.querySelector("h2");
const painel = document.querySelector(".painel")
const painel2 = document.querySelector(".painel2")

const bandeira = document.querySelector(".bandeira")
const bandeira2 = document.querySelector(".bandeira2")

painel.style.display="none"
painel2.style.display="none"

bandeira2.style.display="none"


// CARRO
let carro = document.querySelector(".car img");

let carro2 = document.querySelector(".car2 img");

let correr = 400;
let correr2 = 400;

// variaveis do quiz
let titulo = document.querySelector("h1");
let instrucoes = document.querySelector("#instrucoes");
let aviso = document.querySelector("#aviso");
// let respostaEsta = document.querySelector("#respostaEsta");
let pontos = 0;
let placar = 0;


// PERGUNTA
let numQuestao = document.querySelector("#numQuestao");
let pergunta = document.querySelector("#pergunta");

// ALTERNATIVA
let a = document.querySelector("#a");
let b = document.querySelector("#b");
let c = document.querySelector("#c");

// article com a class questoes
let articleQuestoes = document.querySelector(".questoes");

// ol li com as alternativas
let  alternativas = document.querySelector("#alternativas");

const q0 = {
    numQuestao   : 0,
    pergunta     : "Quem inventou a lâmpada?",
    alternativaA : "Thomas Edison",
    alternativaB : "Henry Ford",
    alternativaC : "Santos Dumont",
    correta      : "Thomas Edison",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "Quantas casas decimais tem o número pi?",
    alternativaA : "Infinitas",
    alternativaB : "Duas",
    alternativaC : "Milhares",
    correta      : "Infinitas",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Quantos dias tem um ano Bixesto?",
    alternativaA : "365 Dias",
    alternativaB : "366 Dias",
    alternativaC : "362 Dias",
    correta      : "366 Dias",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Qual o nome do Brasil?",
    alternativaA : "Argentina",
    alternativaB : "Estados Unidos do Brasil",
    alternativaC : "República Federativa do Brasil",
    correta      : "República Federativa do Brasil",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual destes animais não é uma baleia?",
    alternativaA : "Orca",
    alternativaB : "Cachalote",
    alternativaC : "Jubarte",
    correta      : "Orca",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual o nome dado ao filo dos mamiferos?",
    alternativaA : "Moluscos",
    alternativaB : "Cordados",
    alternativaC : "Mamador",
    correta      : "Cordados",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "O que pesa mais 1kg de pena ou 1kg de chumbo?",
    alternativaA : "O chumbo",
    alternativaB : "A pena",
    alternativaC : "Os dois tem o mesmo peso",
    correta      : "Os dois tem o mesmo peso",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Qual o nome do melhor amigo de Bob Esponja",
    alternativaA : "Patrick",
    alternativaB : "Lula Molusco",
    alternativaC : "Garry",
    correta      : "Patrick",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quais são as cores primárias?",
    alternativaA : "Azul, Vermelho, Amarelo",
    alternativaB : "Azul, Vermelho, Verde",
    alternativaC : "Azul, Vermelho, Branco",
    correta      : "Azul, Vermelho, Amarelo",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "De onde é a invenção do chuveiro elétrico?",
    alternativaA : "Austrália",
    alternativaB : "Inglaterra",
    alternativaC : "Brasil",
    correta      : "Brasil",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "O que a palavra legend significa em português?",
    alternativaA : "Legenda",
    alternativaB : "Lenda",
    alternativaC : "Legendário",
    correta      : "Lenda",
}

const q11 = {
    numQuestao   : 11,
    pergunta     : "Qual o número mínimo de jogadores numa partida de futebol?",
    alternativaA : "10",
    alternativaB : "7",
    alternativaC : "9",
    correta      : "7",
}

const q12 = {
    numQuestao   : 12,
    pergunta     : "Qual a velocidade da luz?",
    alternativaA : "299 792 458 metros por segundo (m/s)",
    alternativaB : "150 000 000 metros por segundo (m/s)",
    alternativaC : "30 000 000 metros por segundo (m/s)",
    correta      : "299 792 458 metros por segundo (m/s)",
}

const q13 = {
    numQuestao   : 13,
    pergunta     : "Qual o maior animal terrestre?",
    alternativaA : "Baleia Azul",
    alternativaB : "Elefante africano",
    alternativaC : "Dinossauro",
    correta      : "Elefante africano",
}

const q14 = {
    numQuestao   : 14,
    pergunta     : "Quem foi o primeiro homem a pisar na Lua? Em que ano aconteceu?",
    alternativaA : "Yuri Gagarin, em 1961",
    alternativaB : "Neil Armstrong, em 1969.",
    alternativaC : "Charles Conrad, em 1969",
    correta      : "Neil Armstrong, em 1969.",
}

const q15 = {
    numQuestao   : 15,
    pergunta     : "Que animal gruguleja?",
    alternativaA : "O Peru",
    alternativaB : "o Pavão",
    alternativaC : "A Cacatua",
    correta      : "O peru",
}
const q16 = {
    numQuestao   : 16,
    pergunta     : "Qual cidade brasileira é conhecida como a terra da garoa?",
    alternativaA : "São Paulo.",
    alternativaB : "Rio de Janeiro",
    alternativaC : "Sorocaba",
    correta      : "São Paulo.",
}
const q17 = {
    numQuestao   : 17,
    pergunta     : "Qual é o nome do macho da cabra?",
    alternativaA : "Cabro",
    alternativaB : "Cabrito",
    alternativaC : "Bode",
    correta      : "Bode",
}
const q18 = {
    numQuestao   : 18,
    pergunta     : "Quando a Netflix foi fundada ?",
    alternativaA : "1898",
    alternativaB : "1997",
    alternativaC : "1999",
    correta      : "1997",
}
const q19 = {
    numQuestao   : 19,
    pergunta     : "Qual o nome do primeiro filme da Pixar?",
    alternativaA : "Carros",
    alternativaB : "Toy Story",
    alternativaC : "Monstros S.A",
    correta      : "Toy Story",
}
const q20 = {
    numQuestao   : 20,
    pergunta     : "Qual foi a série mais assistida da Netflix em 2019?",
    alternativaA : "Stranger Things",
    alternativaB : "La Casa de Papel",
    alternativaC : "Sex Education",
    correta      : "Stranger Things",
}
const q21 = {
    numQuestao   : 21,
    pergunta     : "Quem inventou o WWW (World Wide Web), e quando?",
    alternativaA : "Tim Berners-Lee, 1990",
    alternativaB : "Vint Cerf 1943",
    alternativaC : "Charles Conrad, em 1969",
    correta      : "Tim Berners-Lee, 1990",
}
const q22 = {
    numQuestao   : 22,
    pergunta     : "Quem pintou o quadro Mona Lisa?",
    alternativaA : "Michelangelo",
    alternativaB : "Picasso",
    alternativaC : "Leonardo Da Vinci",
    correta      : "Leonardo Da Vinci",
}
const q23 = {
    numQuestao   : 23,
    pergunta     : "Qual fruta envenenada a Branca de Neve comeu?",
    alternativaA : "Maçã-Verde",
    alternativaB : "Maçã",
    alternativaC : "Limão",
    correta      : "Maçã",
}
const q24 = {
    numQuestao   : 24,
    pergunta     : " Qual é o nome agente secreto da ficção conhecido pelo número 007?",
    alternativaA : "James Bond",
    alternativaB : "Jason Bourne",
    alternativaC : "Chaves",
    correta      : "James Bond",
}
const q25 = {
    numQuestao   : 25,
    pergunta     : "Qual animal dorme de cabeça para baixo?",
    alternativaA : "Morcego",
    alternativaB : "Barata",
    alternativaC : "Cobra",
    correta      : "Morcego",
}
const q26 = {
    numQuestao   : 26,
    pergunta     : "Como se chamam os dois melhores amigos do personagem Harry Potter?",
    alternativaA : "Hermione e Rony",
    alternativaB : "Lunna e Gina",
    alternativaC : "Valdemort e Dumbledoor",
    correta      : "Hermione e Rony",
}
const q27 = {
    numQuestao   : 27,
    pergunta     : "Qual é o ponto turístico mais famoso de Paris?",
    alternativaA : "Museu do Louvre",
    alternativaB : "Torre Eiffel",
    alternativaC : "Rio Sena",
    correta      : "Torre Eiffel",
}
const q28 = {
    numQuestao   : 28,
    pergunta     : "Qual é o único mamífero que voa?",
    alternativaA : "Avestruz",
    alternativaB : "Gavião",
    alternativaC : "Morcego",
    correta      : "Morcego",
}
const q29 = {
    numQuestao   : 29,
    pergunta     : "Em qual esporte são usadas as mãos para fazer gol?",
    alternativaA : "Queimada",
    alternativaB : "Handebol",
    alternativaC : "Basquete",
    correta      : "Handebol",
}
const q30 = {
    numQuestao   : 30,
    pergunta     : "Onde está localizado o menor osso do corpo humano?",
    alternativaA : "Ouvido",
    alternativaB : "Olho",
    alternativaC : "Nariz",
    correta      : "Ouvido",
}
const q31 = {
    numQuestao   : 31,
    pergunta     : "Qual é o menor pássaro do mundo?",
    alternativaA : "Pardal",
    alternativaB : "Abelha colibri",
    alternativaC : "Tucano",
    correta      : "Abelha colibri",
}
const q32 = {
    numQuestao   : 32,
    pergunta     : "As pessoas de qual tipo sanguíneo são consideradas doadores universais?",
    alternativaA : "Tipo A",
    alternativaB : "Tipo ABO",
    alternativaC : "Tipo O",
    correta      : "Tipo O",
}
const q33 = {
    numQuestao   : 33,
    pergunta     : "Quem viveu, segundo a Bíblia, 969 anos?",
    alternativaA : "Jesus Cristo",
    alternativaB : "Matusalém",
    alternativaC : "Noé",
    correta      : "Matusalém",
}
const q34 = {
    numQuestao   : 34,
    pergunta     : "Complete o provérbio “A cavalo dado …”",
    alternativaA : "tem medo de água fria",
    alternativaB : "não se olha o rabo",
    alternativaC : "não se olha os dentes",
    correta      : "não se olha os dentes",
}
const q35 = {
    numQuestao   : 35,
    pergunta     : "Que país tem o formato de uma bota?",
    alternativaA : "Itália",
    alternativaB : "México",
    alternativaC : "Portugal",
    correta      : "Itália",
}
const q36 = {
    numQuestao   : 36,
    pergunta     : "Quais são as fases da Lua?",
    alternativaA : "Penumbral, lunar parcial, lunar total e cheia",
    alternativaB : "Nova, crescente, cheia e minguante",
    alternativaC : "ova, crescente, cheia, minguante e lua de sangue",
    correta      : "Nova, crescente, cheia e minguante",
}
const q37 = {
    numQuestao   : 37,
    pergunta     : "Kryptonita é a fraqueza de qual super-herói?",
    alternativaA : "Super-Homem",
    alternativaB : "Hulk",
    alternativaC : "Capitão América",
    correta      : "Super-Homem",
}
const q38 = {
    numQuestao   : 38,
    pergunta     : "Qual a especialidade do otorrinolaringologista?",
    alternativaA : "Tratamento das doenças relacionadas a nariz, ouvido e garganta",
    alternativaB : "Tratamento das doenças da pele",
    alternativaC : "Tratamento das doenças bucais",
    correta      : "Tratamento das doenças relacionadas a nariz, ouvido e garganta",
}
const q39 = {
    numQuestao   : 39,
    pergunta     : "Quantos braços tem um polvo?",
    alternativaA : "Oito",
    alternativaB : "Dez",
    alternativaC : "Sete",
    correta      : "Oito",
}
const q40 = {
    numQuestao   : 40,
    pergunta     : "Que personagem da mitologia grega era metade homem metade cavalo?",
    alternativaA : "Tártaro",
    alternativaB : "Centauro",
    alternativaC : "Górgona",
    correta      : "Centauro",
}


//  CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14 ,q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40];


const questoesAleatorio = [];

rand = Math.floor(Math.random() * 25);

let numero = document.querySelector("#numero");
let total = document.querySelector("#total");

numero.textContent = q1.numQuestao;

let totalDeQuestoes = (questoes.length) -1
console.log("Total Questoes " + totalDeQuestoes);
total.textContent = totalDeQuestoes;


// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.style.background="green";
numQuestao.textContent = q1.numQuestao;
pergunta.textContent = q1.pergunta;
a.textContent = q1.alternativaA;
b.textContent = q1.alternativaB;
c.textContent = q1.alternativaC;

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute("value", "1A");
b.setAttribute("value", "1B");
c.setAttribute("value", "1C");
let contador = 1
// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao){
    contador ++;
    numero.textContent = contador;
    numQuestao.textContent = contador;
    pergunta.textContent = questoes[nQuestao].pergunta;
    a.textContent = questoes[nQuestao].alternativaA;
    b.textContent = questoes[nQuestao].alternativaB;
    c.textContent = questoes[nQuestao].alternativaC;
    a.setAttribute("value", nQuestao+"A");
    b.setAttribute("value", nQuestao+"B");
    c.setAttribute("value", nQuestao+"C");
}


function bloquearAlternativas(){
    a.classList.add("bloqueado");
    b.classList.add("bloqueado");
    c.classList.add("bloqueado");
}


bloquearAlternativas();

function desbloquearAlternativas(){
    a.classList.remove("bloqueado");
    b.classList.remove("bloqueado");
    c.classList.remove("bloqueado");
}

let carrovez = true;

function verificarSeAcertou(nQuestao,resposta){
    var numeroDaQuestao = nQuestao.value;
    console.log("Questao " + numeroDaQuestao);
    
    let respostaEscolhida = resposta.textContent;
    console.log("Resp Escolhida" + respostaEscolhida);
    
    let certa = questoes[numeroDaQuestao].correta;
    console.log("Resp Correta " + certa);
    
    if(respostaEscolhida == certa){
    pontos += 10;
    semafaro();
    if(carrovez == true){
        numQuestao.style.background="green";
        Corrida();
    }else{
        numQuestao.style.background="red";
        Corrida2();
        
    }
}else{
    semafaro();
    console.log(numQuestao.style.background)
    carrovez = !carrovez;
    if(numQuestao.style.background == "green"){
        bandeira.style.display="none"
        bandeira2.style.display="block"
        numQuestao.style.background="red";
    }else{
        numQuestao.style.background="green";
        bandeira2.style.display="none"
        bandeira.style.display="block"
    }
}

console.log(carrovez)
//     setTimeout(function(){
//         alert("oi");
//     },500);
//     let test2 = carro.offsetLeft;
//     const test = setInterval(function(){
//     correr = correr + 2;
//     carro.style.left=`${correr}px`;
//     console.log(carro.offsetLeft)
//     if(carro.offsetLeft > (test2 + 100)){
//         clearInterval(test) 
//     }
// }, 10)

// ATUALIZAR PLACAR
// placar = pontos;
// instrucoes.textContent = "Pontos " + placar;

// BLOQUEAR A ESCOLHA DE OPCOES
bloquearAlternativas();

// for (let i = 0; i < questoes.length; i++) {
    questaoSorteado = questoes[numeroDaQuestao];
    console.log(questaoSorteado)
    questoesAleatorio.push(questaoSorteado);
    console.log(questoesAleatorio)
    questoes.splice(numeroDaQuestao, 1);
    console.log(questoes)
// }

setTimeout(function(){
    var proxima = Math.floor(Math.random() * questoes.length);
    
    if(proxima > totalDeQuestoes){
        articleQuestoes.style.display="none"
        alternativas.style.display="none"
        console.log("Fim do Jogo!");
        // fimDoJogo();
    } else{
        proximaQuestao(proxima);
    }
}, 100 )
desbloquearAlternativas();
}


function fimDoJogo(){
    instrucoes.textContent = "Fim de Jogo!";
    numQuestao.textContent = "";

    let pont = "";
    pontos == 0 ? pont = "ponto" : pont = "pontos";

    pergunta.textContent = "Voce conseguiu " + pontos + " " + pont;

    aviso.textContent = "Voce conseguiu " + pontos + " " + pont;

    a.textContent = "";
    b.textContent = "";
    c.textContent = "";

    a.setAttribute("value", "0");
    b.setAttribute("value", "0");
    c.setAttribute("value", "0");

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = "none";

    setTimeout(function(){
        pontos = 0; // ZERAR PLACAR
        location.reload();
    }, 8000)
}



// let repostas= {};

 // inicio semafaro
function semafaro(){
        btn1.style.background="black"
        btn2.style.background="black"
        btn3.style.background="black"
        setTimeout(function(){
        // btn1.style.borderColor="red"
        btn1.style.background="red"
    }, 300);
        setTimeout(function(){
        // btn2.style.borderColor="yellow"
        btn2.style.background="yellow"
    }, 600);
    setTimeout(function(){
    // btn3.style.borderColor="green"
    btn3.style.background="green"
}, 900);
    setTimeout(function(){
    // btn2.style.borderColor="red"
    // btn3.style.borderColor="red"
    btn1.style.background="red"
    btn2.style.background="red"
    btn3.style.background="red"
}, 1200);
};
// --- fim semafaro

function Corrida(){
    setTimeout(function(){
        let test2 = carro.offsetLeft;
        let test3 = 1026;
        const test = setInterval(function(){
            correr = correr + 2;
            carro.style.left=`${correr}px`;
            console.log(carro.offsetLeft)
            if(carro.offsetLeft > (test2 + 102)){
                clearInterval(test) 
            }
            if(carro.offsetLeft == (test3)){
                setTimeout(function(){
                painel.style.display="block"
                console.log(carro.offsetLeft);
                fimDoJogo();
                }, 2000);
            }
        }, 10)
    },1300);
}

function Corrida2(){
    setTimeout(function(){
        let test2 = carro2.offsetLeft;
        let test3 = 1026;
        const test = setInterval(function(){
            correr2 = correr2 + 2;
            carro2.style.left=`${correr2}px`;
            console.log(carro2.offsetLeft)
            if(carro2.offsetLeft > (test2 + 102)){
                clearInterval(test) 
            }
            if(carro2.offsetLeft == (test3)){
                setTimeout(function(){
                painel2.style.display="block"
                console.log(carro.offsetLeft);
                }, 2000);
            }
        }, 10)
    },1300);
}




