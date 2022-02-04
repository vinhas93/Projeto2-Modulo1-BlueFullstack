const prompt = require("prompt-sync")();

// Jogo Jokenpô: Utilizando os conceitos aprendidos até estruturas de repetição, crie um programa que jogue
// pedra, papel e tesoura (Jokenpô) com você.
// - Permitir que eu decida quantas rodadas iremos fazer;
// - Ler a minha escolha (Pedra, papel ou tesoura);
// - Decidir de forma aleatória a decisão do computador;
// - Mostrar quantas rodadas cada jogador ganhou;
// - Determinar quem foi o grande campeão de acordo com a quantidade de vitórias de cada um (computador e jogador);
// - Perguntar se o Jogador quer jogar novamente, se sim inicie volte a escolha de quantidade de rodadas,
// se não finalize o programa.

console.log(`\t\tJokenpô\n`);
let nome = prompt("Por favor, digite o seu nome: ");
console.log()

let start;
let pontosPc = 0;
let pontosJogador = 0;

do {
  let partida = +prompt("Quantas partidas gostaria de Jogar?  ");
  let respJogador;
  let respPc;
  let opcoes = ["pedra", "papel", "tesoura"];
  let pont;

  for (let i = 0; i < partida; i++) {
    console.log(`
    Escolha: 

1)Pedra    2)Papel    3)Tesoura`);

    do {
      respJogador = prompt("R:").toLowerCase();
      if (
        respJogador != "pedra" &&
        respJogador != "papel" &&
        respJogador != "tesoura"
      ) {
        console.log(`Não entendi`);
      }
    } while (
      respJogador != "pedra" &&
      respJogador != "papel" &&
      respJogador != "tesoura"
    );

    respPc = opcoes[Math.floor(Math.random() * 3)];

    console.clear();
    console.log(`
---------------------------------------------------------------------
${i + 1}ª rodada  ->  ${nome} com ${respJogador}  X   Pc com ${respPc}
`);

    teste(respJogador, respPc);

    console.log(`
---------------------------------------------------------------------
              Placar ${i + 1}ª rodada

${nome} = ${pontosJogador}     Pc = ${pontosPc}
    `);
  }

  do {
    console.log(`
Jogar de novo?
    
  1)Sim         2)Não
    `);
    start = prompt("R:").toLowerCase();

    if (start == 1 || start == "sim") {
      console.log(`
Deseja manter a pontuação?
      
  1)Sim         2)Não
      `);
      pont = prompt("");

      if (pont == 2 || pont == "nao") {
        pontosJogador = 0;
        pontosPc = 0;
      }
    } else if (start != 1 || start !== 2 || start != "sim" || start != "nao"|| pont != 1 || pont != "sim") {
      console.log(`Não entendi`);
    }
  }while (start != 1 && start !== 2 && start != "sim" && start != "nao")

} while (start !== 2 && start != "nao");

console.log(`Muito bem ${nome}, até a próxima.`);

function teste(a, b) {
  if (
    (a === "pedra" && b === "papel") ||
    (a === "papel" && b === "tesoura") ||
    (a === "tesoura" && b === "papel")
  ) {
    return (
      pontosPc++,
      console.log(`
  
  Hahahahahahahahahah você não tem chances!
  `)
    );
  } else if (a == b) {
    console.log(`
  
  Se safou por pouco ein
  `);
  } else {
    return (
      pontosJogador++,
      console.log(`

  Hmpf... Golpe de sorte!
  `)
    );
  }
}
