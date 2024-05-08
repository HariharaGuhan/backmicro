// for(let a=1;a<=10;a++){
//     console.log(a);
// }

// let a=[1,2,3,'one','two','three'];
// for(let b in a)
// {
//     console.log(b);
// }

//Write a JavaScript program that accept two integers and display the larger.
let a=[1,2];
for(b=0;b<=2;b++)
{
    console.log(b);
}
for(let b of a){
    console.log(b);
}
for(let b in a){
    console.log(b);
}

//avg marks loops
var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

//1greater num of two integer

// //avg marks loops
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }


//greter num of two int
var a=[20,12];
for(i=0;i<=1;i++)
{
    if(a[0]>a[1])
    {
        console.log(`the number is ${a[0]}is greater than ${a[1]}`);
    }
    else if(a[1]>a[0])
    {
        console.log(`the number is ${a[1]}is greater than ${a[0]}`);
    }
}