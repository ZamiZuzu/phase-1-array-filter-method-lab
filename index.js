// function findMatching(collection, name){
//     let list = [];
//     for (let i = 0; i < collection.length; i++){
//         if (collection[i] == name) {
//             list.push(name);
            
//         }
//     }return(list);
// }

function findMatching(collection, name){
    return collection.filter( filtering =>
        filtering.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch(source, testString) {
    return source.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
  }

  function matchName(collection, driver){
    return collection.filter( filtering =>
        filtering.name === driver
    )
}
