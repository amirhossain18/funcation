
// create funcation and call funcation 
function startfun(){
    console.log("run funcation")
}
// startfun();

function bringpoteto(price){
    console.log("nen poteto chips")
    console.log(price)
}
// var taka1=200;
// var taka2=300;
// var taka3=500;

function totaltaka(price1 , price2, price3 ) {
    var total=price1+price2+price3;
    // console.log(total);
    return total;
}

var money = totaltaka(10,10,10);

function totalmoney(person){
    var collections =600;
    console.log(collections);
    var totalcollection= collections * person
    return totalcollection;
}

var totalOurtk = totalmoney(30);
console.log(totalOurtk);

// function multiplication(n){
//     for(var i=1; i<=10; i++){
//         console.log(`${n} * ${i}=${n*i}`);
//     }

// }

// var namta= multiplication(13);
// console.log(namta);

function multiplication(n){
    for(var i=1; i<=10; i++){
   
     var anser= ( `${i} x ${n}=${i*n}  ` )
    }
return anser;
}

var amount= multiplication(13);
