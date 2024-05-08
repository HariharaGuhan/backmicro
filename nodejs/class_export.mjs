/*export default function add(a,b){            default module
    return a+b;
}*/                                             /*____class named module use multiple function*/

// export function add(a,b){
//     return a+b;
// }

// export function sub(a,b){
//     return a-b;
// }

// const mobile = {

//     color: "red",
  
//     company: "apple",
  
//     cost: "45,000 $",
  
//   };
  
//   export default mobile;


// const userName = "alex";

// const validateUser = (loggedUser) => {

//   let result = userName === loggedUser ? "Welcome!" : "Invalid User Name";

//   return result;

// };

// export default validateUser;

// export const shirt = {

//     size: 32,
  
//     color: "Blue",
  
//     price: 1200,
  
//     gender: "Men",
  
//   };

// let {city}=require('./fun_import');
// let obj1=()=>{
//     let s={"countries_name":'India'};
//     return s;
// }
// exports.array=array;
// exports.obj1=obj1;
// task1
// export function array()
// {
//     return['"countries", 190, "continents", 7, false, 6.2 '];
// }

export function aob()
{
    return ["camel",265,true,"5.6"];
}
export function aoc()
{
    return {watts:10,type:"led"}
}
export function obj(a)
{
    return a*4;
}
exports.aob=aob;
exports.aoc=aoc;
exports.obj=obj;