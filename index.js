var num_1 = document.querySelector('#num_1');
var num_2 = document.querySelector('#num_2');
var num_3 = document.querySelector('#num_3');
var num_4 = document.querySelector('#num_4');

var button = document.querySelector('button');
var showResult = document.querySelector('.result');

button.addEventListener('click', function(e) {
    e.preventDefault();
    var myArr = [num_1.value, num_2.value, num_3.value, num_4.value];


    var maxNumber = Number(myArr[0]);

    for (var i = 0; i < myArr.length; i++) {

        if (maxNumber < Number(myArr[i])) {
            maxNumber = Number(myArr[i]);


        }

    }

    showResult.innerHTML = "Max Number Is: " + maxNumber;
})