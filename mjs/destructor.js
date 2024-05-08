// const person={
//     name:'HariharaGuhan',
//     age:'22',
//     graduation:'BCA'
// }
// let name=person.name;
// let age=person.age;
// let graduation=person.graduation;
// console.log(name);
// console.log(age);
// console.log(graduation);
//swapping 3
// let x=5,y=10,z=15;
// [x,y,z]=[z,x,y];
// console.log(x);
// console.log(y);
// console.log(z);

//destruct spread syntax
// const array=['one','two','three','four'];
// const array2=[...array];
// console.log(array2);
//Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
/*var a=-5;
var b=-2;
var c=-6;
var d=0;
var e=-1;
if(a>b && a>c && a>d && a>e)
{
    console.log(a)
}
else if(b>a && b>c && b>d && b>e){
    console.log(b);
}
else if(c>a && c>b && c>d && c>e){
    console.log(c);
}
else if(d>a && d>c && d>b && d>e){
    console.log(d);
}
else{
    console.log(f);
}*/



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




