// IMPORT MODULES under test here:
// import { example } from '../example.js';
import pokemon from '../pokemon-list.js';
import { findById, getResults } from '../utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('findById should return item from pokemon array with matching id', (expect => {
    const expected = {
        '_id':'5cef3501ef6005a77cd4fd17',
        'pokemon':'bulbasaur',
        'id':1,
        'species_id':1,
        'height':7,
        'weight':69,
        'base_experience':64,
        'type_1':'grass',
        'type_2':'poison',
        'attack':49,
        'defense':49,
        'hp':45,
        'special_attack':65,
        'special_defense':65,
        'speed':45,
        'ability_1':'overgrow',
        'ability_2':'NA',
        'ability_hidden':'chlorophyll',
        'color_1':'#78C850',
        'color_2':'#A040A0',
        'color_f':'#81A763',
        'egg_group_1':'monster',
        'egg_group_2':'plant',
        'url_image':'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
        'generation_id':1,
        'evolves_from_species_id':'NA',
        'evolution_chain_id':1,
        'shape_id':8,
        'shape':'quadruped',
        'pokebase':'bulbasaur',
        'pokedex':'http://www.pokemon.com/us/pokedex/bulbasaur'
    };
    const actual = findById(1, pokemon);
    expect.deepEqual(actual, expected);
}));

test('getResults should return the key "RESULTS" from localStorage', (expect => {
    const results = [
        { id: 1, shown: 2, picked: 2 },
        { id: 2, shown: 2, picked: 1 },
        { id: 5, shown: 2, picked: 1 }
    ];
    localStorage.setItem('RESULTS', JSON.stringify(results));
    const actual = getResults();
    expect.deepEqual(actual, results);

}));