// import functions and grab DOM elements
import pokemon from './pokemon-list.js';
// initialize global state
const pokemon1 = document.getElementById('input1');
const pokemonImg1 = document.getElementById('img1');
const pokemon2 = document.getElementById('input2');
const pokemonImg2 = document.getElementById('img2');
const pokemon3 = document.getElementById('input3');
const pokemonImg3 = document.getElementById('img3');
const button = document.getElementById('select-pokemon');
const generatePokemon = () => {
    let randomNum1 = Math.floor(Math.random() * pokemon.length);
    let randomNum2 = Math.floor(Math.random() * pokemon.length);
    let randomNum3 = Math.floor(Math.random() * pokemon.length);
    while (
        randomNum1 === randomNum2 ||
      randomNum1 === randomNum3 ||
      randomNum2 === randomNum3
    ) {
        randomNum1 = Math.floor(Math.random() * pokemon.length);
        randomNum2 = Math.floor(Math.random() * pokemon.length);
        randomNum3 = Math.floor(Math.random() * pokemon.length);
    }
    // console.log(pokemon[randomNum1], randomNum2, randomNum3)
};
generatePokemon();
// set event listeners 
button.addEventListener('click', () =>{
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
