const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
//Use the forEach method to add the name of each planet to a section element in your HTML with an id of "planets". Use string templates to construct the DOM elements.
const planetEl = document.getElementById("planets") //calls from html doc
planets.forEach(currentPlanet => { //grabs array to iterate over //currentPlanet is placeholder
    const paragraph = document.createElement('p') //creates paragraph for the element to display in
    paragraph.textContent = currentPlanet //iterates current planet from array 
    planetEl.appendChild(paragraph) //takes element and attaches to 'p' tag 
});
 //Use the map method to create a new array where the first letter of each planet is capitalized. Use the `toUpperCase()` method on strings.

 const properPlanets = planets.map(function(string){
     return string.charAt(0).toUpperCase() + string.slice(1);
    }); 
    console.log(properPlanets)





/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
