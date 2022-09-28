//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application

// let contador = 0;
// let interval = setInterval(() => {
//     const fourthDigit = Math.floor(contador/1000 % 10)
//     const thirdDigit = Math.floor(contador/100 % 10)
//     const secondDigit = Math.floor(contador/10 % 10)
//     const firstDigit = Math.floor(contador % 10)
//     console.log (fourthDigit,thirdDigit,secondDigit,firstDigit)
//     contador ++;
   
// }, 1000);

// function reload() {
//     // aqui estoy deteniendo el contador
// clearInterval (interval); 
// // aqui deberia reiniciar el contador con el setInterval y no se como hacerlo
// }

// function stop() {
//     clearInterval (interval);
//     }

 ReactDOM.render(<Home />, document.querySelector("#app"))