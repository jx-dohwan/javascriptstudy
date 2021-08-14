

// let go = {
//     myName: "dohwango",
//     myKey: "175cm",
//     myAge: "25",
//     gender:"male",
//     person: true,
    
// }

// console.log(`제 이름은 ${go.myName}`);
// console.log("person" in go);

// for(let info in go){
//     console.log(info);
//     console.log(go[info]);
// }

// let number = {3:3,2:1,1:2 }



// let user2 ={}
// for(let info in user){
//     user2[info] = user[info];
// }

// const user2 = {...user}
// user2.age=100;
// console.log(user2);
// console.log(user);

//map, filter, find 

// for in -> 객체를 반복해서 Key값만 받아옴

// let user = {
//     mane:"kim",
//     age:20,
//     test:{
//         a:10
//     }
// }

// let arr = [];
// arr.push(... user)
// arr.push(... user)
// arr.push(... user)

// console.log(arr);

// user.map((item) =>{

// });


// let user = {
//     name: "kim",
//     age: 20,
//     intro(){
//         console.log(`hi i am${user.age} years old`);
//         console.log(`hi i am${this.age} years old`);
//     }
// }

// let age = 30;
// function test(){
//     let age = 10;
//     console.log(this.age);// 함수에서 this가 왜 통하지 않을까? -> this
// }
// test()

// let user2 = {...user}
// user2.age = 100;
// user2.intro();

function user3(name){
    this.name = name;
    this.age = "male";
}

let user4 = new user3('kim');
let user5 = new user3('lee');

console.log(user3);
console.log(user4);
console.log(user5);

//html,css로 올라온 사진의 모양으로 UI를 구현해야 한다.
//새로고침해도 ui가 남아있도록 해야한다. 
//객체를 최대한 활요아면서 localstoryge와 todolist를 연결시켜야한다. 
//정답은 온려놓았다. 그런데 정말 감이 안오는 사람들은 답지를 공부해라 이거를 정리해서 깃허브에 올려라 
//-> 비전공자분들은 이렇게해도 용서를 한다. 그런데 전공자분들은 만들어 오세요 전공하신 분들은 만들어 오세요 