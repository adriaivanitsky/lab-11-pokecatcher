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

// export function showPokemon(){
//     const 
// }