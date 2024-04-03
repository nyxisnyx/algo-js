/*Create a function pickLearner(inputAr, n) that takes 2 parameters.

inputAr : An array of learners (the one you created in exercise 3.0 for example)
n : A number, that should be greater than 0 and less than the length of inputAr
The function should return an array of randomly selected learners.*/

const inputAr = ["Adrien B.", "Adrien C.", "Angel", "Arnaud", "Caroline", "Denis", "Dorian", "Dylan", "Dzheylyan", "Giovanni", "Isabelle", "Jessica", "Jordan", "Julie", "Justine F.", "Justine L.", "Iliess", "Ludovic", "Lyne", "Manu", "Maryann", "Mohamed", "Natalia", "Nathanael", "Stacy", "Tom", "Youris", "Zahra"];

const n = Math.floor(Math.random() * inputAr.length);



function pickLearner(inputAr, n) {
    let learnersAr = [];
    for(i = 0; i < n ; i++) {
        let learner = inputAr[Math.floor(Math.random() * inputAr.length)];
        learnersAr.push(learner);
    };
    return learnersAr;
};

console.log(pickLearner(inputAr, n));
