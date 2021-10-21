// import functions and grab DOM elements
import pokemon from './pokemon-list.js';
import { getResults } from './utils.js';
// initialize global state
let pokemon1 = document.getElementById('input1');
const pokemonImg1 = document.getElementById('img1');
let pokemon2 = document.getElementById('input2');
const pokemonImg2 = document.getElementById('img2');
let pokemon3 = document.getElementById('input3');
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
    pokemon1 = pokemon[randomNum1];
    pokemonImg1.src = pokemon1['url_image'];
    pokemon2 = pokemon[randomNum2];
    pokemonImg2.src = pokemon2['url_image'];
    pokemon3 = pokemon[randomNum3];
    pokemonImg3.src = pokemon3['url_image'];
};

generatePokemon();
// set event listeners 
button.addEventListener('click', () =>{
    generatePokemon();
  
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
