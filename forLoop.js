forLoop.js

let book =["Maths","Sci","Comp","Eng","Spanish","Sanskrit"];

for (i=0; i<=book.length; i++){
    console.log(`Element ${i} is ${book[i]} \n`);
}

// sum up even numbers from 0 to 12 



let counter =1;

let sum =0;

for (i=0; i<=12; i++){
    if(counter % 2 ==0){

        sum = sum + counter;
    }counter ++;
}

console.log(sum);// outcome 42 (2 +4 + 6 + 8 + 10 + 12)


// sum up odd numbers from 3 to 10.

let counter1 = 3;

let sum1 =0;

for (i=0; i<=10; i++){

    if (counter1 %2 !==0){

        sum1 = sum1 + counter1;
    }
    counter1++;
}

console.log(sum1); // (outcome : 3 + 5 + 7 + 9 = 24)

const speech = "trying to count the total letters of the string";

var count21 = 0;

for (var i=0; i<speech.length; i++){

  var char = speech[i];

  if (char == " " && speech[i -1] != " "){

      count21 ++ ;
  }
} count21++ ;

console.log(count21);


