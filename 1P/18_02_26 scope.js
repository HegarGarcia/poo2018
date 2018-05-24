var x = 'outside';

var f1 = function () {

    var x = 'inside f1';
    console.log(x);

}

f1();
console.log(x);