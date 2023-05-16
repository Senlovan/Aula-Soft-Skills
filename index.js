// 1) const todayDate = new Date() / 600; // data em segundos

// const units = new Date(todayDate * 1000).toLocaleDateString(navigator.language, {hour: '2-digit', minute:'2-digit', second: '2-digit'}).substring(12, 20)

// console.log(units) 



//fizz buzz
// for (var i = 1;i < 101; i++) {
//     if (i% 15 == 00) console.log("fizz Buzz");
//     else if(i%3 ==0) {
//         console.log("Fizz");
//     }else if (i%5 == 0) {
//         console.log("Buzz");
//     }else console.log(i);
// }


// let interwins = 0;
// let gremioWins = 0;
// let empates = 0;
// let grenais = 0;

// while (true) {
//   let interGols = parseInt(prompt("Número de gols marcados pelo inter:"));
//   let gremioGols = parseInt(prompt("Número de gols marcados pelo Grêmio:"));
//   if (interGols > gremioGols) {
//     console.log("Inter Venceu!");
//     interwins++;
//   } else if (gremioGols > interGols) {
//     console.log("Grêmio venceu!");
//     gremioWins++;
//   } else {
//     console.log("Empate!");
//     empates++;
//   }
//   grenais++;

//   let response = parseInt(prompt("Novo GRENAL 1.SIM 2.NÃO?"));
//   if (response !== 1) {
//     break;
//   }
// }
// console.log((grenais + " GRENAIS"));
// console.log("Inter:" + interwins);
// console.log("Grêmio:"+gremioWins);
// console.log("Empates:"+empates);

// if(interwins>gremioWins){
//     console.log("Inter venceu mais");
// } else if(gremioWins>interwins){
//     console.log("Grêmio venceu mais");
// } else {
//     console.log("Não houve vencedor")
// }



// // Ler o valor inteiro N
// const N = parseInt(prompt('Digite a quantidade de linhas de saída:'), 10);

// let contador = 1; // Variável para acompanhar os números a serem impressos
// let linha = ''; // Variável para construir a linha de saída

// // Loop para imprimir as linhas
// for (let i = 0; i < N; i++) {
//   linha = ''; // Reinicializar a variável 'linha' a cada iteração

//   // Construir a linha de saída
//   for (let j = 0; j < 3; j++) {
//     linha += contador + ' ';
//     contador++;
//   }

//   linha += 'PUM';

//   console.log(linha);
//   contador++; // Avançar o contador para o próximo conjunto de números
// }


  

