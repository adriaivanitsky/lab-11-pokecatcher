// import functions and grab DOM elements
import pokemon from './pokemon-list.js';
import { showPokemon, pickPokemon } from './utils.js';
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
    let poke1 = pokemon[randomNum1];
    showPokemon(poke1.id);
    pokemonImg1.src = poke1.url_image;
    let poke2 = pokemon[randomNum2];
    showPokemon(poke2.id);
    pokemonImg2.src = poke2.url_image;
    let poke3 = pokemon[randomNum3];
    showPokemon(poke3.id);
    pokemonImg3.src = poke3.url_image;
    pokemon1.value = poke1.id;
    pokemon2.value = poke2.id;
    pokemon3.value = poke3.id;
};

generatePokemon();
let totalPlays = 0;
// set event listeners 
button.addEventListener('click', () =>{
    const chosen = document.querySelector('input[type=radio]:checked');
    pickPokemon(Number(chosen.value));
    generatePokemon();
    totalPlays++;
    if (totalPlays >= 10){
        window.location.replace('./resultspage/index.html'); 
    }
});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
