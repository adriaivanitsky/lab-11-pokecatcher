export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getResults(){
    const resultString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultString);
    return results;
}

export function showPokemon(id){
    let results = getResults();
    let item = findById(id, results);
    if (item){
        item.shown++;
    } else {
        const newItem = { id: id, shown:1, picked: 0 };
        results.push(newItem);
    }
    const resultString = JSON.stringify(results);
    localStorage.setItem('RESULTS', resultString);
}

export function pickPokemon(id){
    let results = getResults();
    let item = findById(id, results);
    item.picked++;
    const resultString = JSON.stringify(results);
    localStorage.setItem('RESULTS', resultString);
}

export function setResults(results){
    const resultString = JSON.stringify(results);
    localStorage.setItem('RESULTS', resultString);

}