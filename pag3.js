let params = new URLSearchParams(location.search);
let risposteGiuste = params.get("risposteGiuste");
let totaleRisposte = params.get("totaleRisposte");

const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");
let x = canvas.width/10;
let y = canvas.height/10;
ctx.translate(x,y);
const totalQuestions = 10;
const correctAnswers = 8;
const wrongAnswers = 2;
const correctPercentage = (correctAnswers / totalQuestions) * 100;
const wrongPercentage = 100 - correctPercentage;

// Seleziona i div dove inserire le percentuali
const correctDiv = document.getElementById('correct-percentage');
const wrongDiv = document.getElementById('wrong-percentage');

// Imposta il contenuto dei div con le percentuali
correctDiv.innerHTML = `<div><span>Correct</span></div> <b>${correctPercentage}%</b> <div id="ciao">${correctAnswers} / ${totalQuestions} questions</div>`;
wrongDiv.innerHTML = `<div><span>Wrong</span></div> <b>${wrongPercentage}%</b><div id="ciao">${wrongAnswers} / ${totalQuestions} questions</div>`;

ctx.beginPath();
ctx.arc(150, 150, 150, 0, (correctPercentage / 100) * 2 * Math.PI);
ctx.strokeStyle = "#00FFFF";
ctx.lineWidth = 50; 
ctx.stroke();
ctx.beginPath();
ctx.arc(150, 150, 150, 0, (correctPercentage / 100) * 2 * Math.PI, 2 * Math.PI);
ctx.strokeStyle = "#900080";
ctx.lineWidth = 50; 
ctx.stroke();
ctx.fillStyle = "white";  // imposta il colore del testo
ctx.font = "12px sans-serif";  // imposta il font del testo
ctx.textAlign = "center";  // allinea il testo al centro
ctx.textBaseline = "middle";  // posiziona il testo al centro verticalmente
//  const maxCharsPerLine = 25;

// // // Dividi il testo in parole
//  const words = ctx.fillText(`Congratulations! You passed the exam. We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)`, 150, 150).split(' ');

// // let line = '';

// // // Per ogni parola, verifica se può essere aggiunta alla linea corrente senza superare il numero massimo di caratteri per linea
// // for (const word of words) {
// //   if (line.length + word.length > maxCharsPerLine) {
// //     // Se non ci sta, stampa la linea corrente e inizia una nuova linea
// //     ctx.fillText(line, 150, 150);
// //     line = '';
// //   }
// //   // Aggiungi la parola alla linea corrente
// //   line += `${word} `;
// // }

// // // Stampa la ultima linea, se presente
// // if (line.length > 0) {
// //   ctx.fillText(line, 150, 150);
// // }
// // const words = `Congratulations! You passed the exam. We'll send you the certificate in few minutes. Check your email (including promotions / spam folder)`.split(' ');
// let num1 = 150;
// let num2 = 150;

// for (const word of words) {
//   if (line.length + word.length > maxCharsPerLine) {
//     // Se non ci sta, stampa la linea corrente e inizia una nuova linea
//     ctx.fillText(line, num1, num2);
//     line = '';
//     y += 20;  // Aggiorna la posizione per la nuova riga
//   }
//   // Aggiungi la parola alla linea corrente
//   line += `${word} `;
// }

// // Stampa la ultima linea, se presente
// if (line.length > 0) {
//   ctx.fillText(line, num1, num2);
// }
const words = ctx.fillText(`Congratulations! You passed the exam.`, 150, 150).split(' ');


