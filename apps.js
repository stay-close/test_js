// var myName = "swapan sarker";
// var friendName = "tahsan islam";
// var myAge = 28;
// var friendAge = 29;


// var mNameShort = myName.slice(0, 1);
// var fNameShort = friendName.slice(0, 1);
// var mfName = mNameShort + fNameShort;
// var nameUpperCase = mfName.toUpperCase();

// var sum = myAge + friendAge;

// var result = "My name is " + myName + ". My life line code is " + nameUpperCase + " and number is  " + sum + ". We are nothing.";
// console.log(result);



// // add odd number within 1-10
// var sumOdd = 0;
// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 1) {
//         sumOdd = sumOdd + i;
//     }
// }
// console.log("Sum of Odd number = " + sumOdd);


// // add even number within 1-10
// var sumEven = 0;
// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         sumEven = sumEven + i;
//     }
// }
// console.log("Sum of Even number = " + sumEven);


// Print Lawest Value From A Array

// var myArr = [7, 26, 100, 2, 25, 74, 152, 36, 52];

// function lowestValue(arr) {

//     var lowVal = myArr[0];
//     for (var i = 0; i < myArr.length; i++) {
//         if (lowVal > myArr[i]) {
//             lowVal = myArr[i];
//         }
//     }
//     return lowVal;
// }
// var result = lowestValue(myArr);
// console.log(result);




// Print Max Number And Name From A 2D Arry

// var myArr = [
//     ["Abul", 120],
//     ["Babul", 1500],
//     ["Cabul", 170],
//     ["Dabul", 30]
// ]

// function highestNumber(arr) {

//     var highNum = myArr[0][1];

//     for (var i = 0; i < myArr.length; i++) {

//         if (highNum < myArr[i][1]) {
//             highNum = myArr[i][1];
//             var ret = "Highest Scorer is " + myArr[i][0] + " and highest Score is " + highNum;
//         }

//     }

//     return ret;
// }

// var result = highestNumber(myArr);

// console.log(result);







// var num_1 = document.querySelector('#num_1');
// var num_2 = document.querySelector('#num_2');
// var num_3 = document.querySelector('#num_3');
// var num_4 = document.querySelector('#num_4');

// var button = document.querySelector('button');
// var showResult = document.querySelector('.result');

// button.addEventListener('click', function(e) {
//     e.preventDefault();
//     var myArr = [num_1.value, num_2.value, num_3.value, num_4.value];


//     var maxNumber = Number(myArr[0]);

//     for (var i = 0; i < myArr.length; i++) {

//         if (maxNumber < Number(myArr[i])) {
//             maxNumber = Number(myArr[i]);


//         }

//     }

//     showResult.innerHTML = "Max Number Is: " + maxNumber;
// })


// var myArr = [
//     ["Abul", 120],
//     ["Babul", 1500],
//     ["Cabul", 170],
//     ["Dabul", 30]
// ]

// for (var i = 0; i < myArr.length; i++) {
//     // console.log(myArr[i]);
//     for (var j = 0; j < myArr[i].length; j++) {
//         console.log(myArr[i][j])
//     }
// }