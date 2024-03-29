let i;
let a = 100;

console.log('Here are all the even numbers included between 1 and 100:');

for (i=1;i<=a;i++) {
    if(i%2==0) {
        console.log(i);
    };
};

while (i<a) {
    if(i%2==0) {
        console.log(i + ' ');
    };
    i++;
};