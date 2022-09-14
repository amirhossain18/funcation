var bangla=99;
var english=89;
var math=34;
var totalMarks = bangla+english+math;
// console.log(totalMarks);
var avaregMarks= totalMarks / 3;
var avareg= avaregMarks.toFixed(0);
// console.log(avaregMarks);
console.log(avareg);


// if (bangla  <=32){
// console.log( "you Fail bangla")
// } 
// else if  (english  <=32){
//     console.log( "you  Fail english")
//     } 
//     else if  (math  <=32){
//         console.log( "you  Fail math")
//         } 

if( english||bangla||math <=32){
    console.log("You Fail")
}

else if (avareg >=80){
    console.log("you got A+")
}

else if (avareg >=70 && avareg <=79){
console.log("you got A")
}
else if (avareg >=60 && avareg <=69 ){
console.log("you got A-")
}
else if (avareg >=50 && avareg <=59   ){
console.log("you got B")
}
else if (avareg >=40 && avareg <=49 ){
console.log("you got C")
}
else if (avareg >=33 && avareg <=39  ){
console.log("you got D")
}
else{
    console.log("you fail F")
}