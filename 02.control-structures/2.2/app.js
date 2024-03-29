let current = new Number (prompt("Please enter any number."));
let min = new Number (prompt("Please enter a small number."));
let max = new Number (prompt("Please enter a big number."));

if (current > min && current < max) {
    console.log(current);
} 

if (min > max) {
    console.log('Oh dear. It seems to me that your cognitive function is severely impaired. I would strongly advise on medical attention. Your health is more important than testing silly little code on the internet.');
}