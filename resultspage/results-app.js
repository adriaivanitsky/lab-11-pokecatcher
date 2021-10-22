
//use array .map to display results
import pokemonList from '../pokemon-list.js';
import { pickPokemon, getResults, findById } from '../utils.js';

const results = getResults();

const main = document.getElementById('main');

for (let item of results){
    const pokemon = findById(item.id, pokemonList);
    const container = document.createElement('div');
    container.classList.add('results-container');
    const img = document.createElement('img');
    img.src = pokemon.url_image;
    const header = document.createElement('h3');
    header.textContent = pokemon.name;
    const div = document.createElement('div');
    div.classList.add('results-body');
    const p = document.createElement('p');
    const resultsSpan1 = document.createElement('span');
    resultsSpan1.textContent = `shown: ${item.shown}`;
    const resultsSpan2 = document.createElement('span');
    resultsSpan2.textContent = `picked: ${item.picked}`;
    p.append(resultsSpan1, resultsSpan2);
    p.classList.add('results-text');
    div.append(img, p);
    container.append(header, div);
    main.append(container);
}

pickPokemon(1);

// const names = results.map((item)=>{
//     const pokemon = findById(item.id, pokemonList);
//     return pokemon.name;
// });

