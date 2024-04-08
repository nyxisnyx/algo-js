/*Create a function named randomizeCast(tvSerie) that will take as argument the data structure you defined in the previous exercise and return a list of the same cast but in a random order.

Create a program that will use randomizeCast(tvSerie) and askTvSerie() to ask the user about a TV serie then display a randomized list of the previous cast that will form the new cast of your next serie.*/

function askTvSerie() {
    let showName = prompt("What is your favourite TV show?");
    let showStart = prompt("In what year did its production start?");

    function askActors() {
        let showCast = [];
        let n = new Number(prompt("How many actors are there in the main cast?"));
        for(i=1;i<=n;i++) {
        let actor = new String(prompt("Name an actor in this TV show."));
        showCast.push(actor);
        };
        return showCast;
    };
    
    let cast = askActors();
    
    let tvShow = {
        "name": showName,
        "production": showStart,
        "cast": cast
    };

    JSON.stringify(tvShow);
    console.log(tvShow);
    return tvShow;
};

function randomizeCast(tvSerie) {
   let copyOfCast = [...tvSerie.cast];
   let randomizedArray = copyOfCast.toSorted((a, b) => {return 0.5 - Math.random()});

   console.log(randomizedArray);
   return randomizedArray;
};

randomizeCast(askTvSerie());