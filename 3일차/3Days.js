// function hello(a,b){
//     console.log("안녕하세요");
//     // return a+b; 
//     console.log(`a+b = ${a+b}`);
// }

// const test =hello(10,5);

// console.log(test); // undefined

// let Hi2 = function(){
//     console.log(`hi2`);
// }

// function Hi(){ 
//     console.log('hi');
// }

// Hi(); // 미리 선언된 함수를 통해 가져올수 있지만
// Hi2(); // hi2를 사용하는 순간에 함수가 있는지 없느지 판단해서 만들어요


// function agree(){
//     console.log("동의");
// }

// function disagree(){
//     console.log("비동의")
// }

// function ask(question,yes,no){
//     if(question=="동의?") yes()
//     else no()
// }

// // ask("동의?",agree,disagree);

// ask(
//     "동의?",
//     ()=>{console.log("동의")},
//     function(){console.log("비동의")}
// )

// function test(){} //함수 선언문
// let test2 = function(){}  //함수 표현식

// function test(){
//     for (let i =0 ; i <5; i++){
//         setTimeout(function(){
//             console.log(i)
//         },0)
//     }
// }
// function test2(){
//     for (var i =0 ; i <5; i++){
//         setTimeout(function(){
//             console.log(i)
//         },0)
//     }
//     console.log(i);
// }

// // test();
// test2();

// function test1(){
//     var a= 10; 
//     let b = 20;
//     const c = 30;
//     if(10<20){
//         b = 30;
//     }
//     console.log(c);
// }

// test1();

// let func = function(a,b){
//     let sum = a+b;
//     return "b"
// }

// let func2 = (a,b)=> {
//     for(let i = 1; i<10;i++){
//         for(let j =1; j<10; j++){
//             console.log(`${i} * ${j} = ${i*j}`)
//         }
//     }
// }

// // console.log(func())
// console.log(func2())

// var y = 1; 

// function first() {
//   var x = 10;
//   function second() {
//     console.log(y);
//   }
//   second();
// }

// let user = new Object({name:"kim",age:20});
// user.test = 30;

// let user2 = {
//     name : "kim",
//     age : 20
// };
// user2.test = 1
// delete user2.test;

// user2["bird"] = true;
// delete user2["bird"];

// console.log(user);
// console.log(user2);

let check = (obj) =>{
    if(obj.age >40){
        obj.check =true;
    }
    return{obj}
}

let person = {name:"kim",age:50}
check(person);
console.log(person);