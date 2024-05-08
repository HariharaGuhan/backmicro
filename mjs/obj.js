// var a={firstname:"hari",lastname:"guhan",marks:"97"};
// console.log(a.firstname);
// var a={firstname:"hari",lastname:"guhan",marks:"97"};
// console.log(a["firstname"]);
// console.log(a["lastname"]);
// console.log(a["marks"]);
// var a={
//     firstname:"hari",
//     lastname:"guhan"},
//     marks={
//         maths:"100",
//         science:"97",
//     }
//     console.log(a.marks.maths);
//     console.log(a["marks"]);
var a={
    "firstname":"hari",
    "lastname":"guhan",
    "marks":{
        "maths":100,
        "science":97,
    }
}
    console.log(a.marks.maths);
    console.log(a["marks"]["science"]);
    
//write and JavaScript program to create an object with nested type and create an function with return statement.

// print the function return statement using dot and square access.
    var student={
        "firstname":"hari",
        "age":22,
        "marks":{
            "java":75,
            "css":95,
        },
        "grade": function()
        {
            console.log(this.firstname+'marks of css'+this.marks.css);
        }
    }
    console.log(student.marks.css);
    console.log(student["marks"]["css"]);
    student.grade();
    

    
    