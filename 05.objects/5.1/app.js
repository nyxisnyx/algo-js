/*Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.*/

function askTvSerie() {
    let showName = prompt("What is your favourite TV show?");
    let showStart = prompt("In what year did its production start?");
    let showCast = [];
    function askActors() {
        let n = new Number(prompt("How many actors are there in the main cast?"));
        for(i=1;i<=n;i++) {
        let actor = new String(prompt("Name an actor in this TV show."));
        showCast.push(actor);
        }
        
    }
    
    askActors();
    
    let tvShow = {
        "Show name": showName,
        "Production start": showStart,
        "Show's main cast": showCast
    };
    JSON.stringify(tvShow);
    console.log(tvShow);
    return tvShow;
}

askTvSerie();

/*function showCast() {
        let n = new Number(prompt("How many actors are there in the main cast?"));
        for(i=1;i<=n;i++) {
        let actor = new String(prompt("Name an actor in this TV show."));
        }
        return showCast;
    }*/