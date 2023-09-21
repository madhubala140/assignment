// // // function logic(val){
// //       if(val<5){
// //         return "less than 5";
// //       }
// //       else if(val<10){
// //         return "less than 10";
// //       }
// //       else{
// //         return "Greater than or equal to 10";
// //       }
// //     }
// //     console.log(logic(11));
// async function fn(){
//   return "Hello";
// }
// // console.log(fn());
// let reachA= new Promise((resolve,reject)=>{

// const reached=false;
// if(reached){
//   setTimeout(resolve,3000,"madhu reached")
// }
// else{
//   reject("madhu not reached")
// }})
// async function asyncstatus(){
//   console.log("Ammu");
//   const res=await reachA;
//   console.log(res);
// }
// asyncstatus()
// let parsed=JSON.parse(json6);
// console.log(fetch('https://official-joke-api.appspot.com/jokes/programming/random'))
// fetch('https://holidayapi.com/');
// .then(res=>console.log(res.json()));
// document.querySelector('button').addEventListener('click',()=>{
//     console.log("Event listner completed");
// })
// document.querySelector("#parent").addEventListener('click',handclick)
// document.querySelector("#child").addEventListener('click',handclick);
// document.querySelector("#grandchild").addEventListener('click',handclick);
// function handclick(e){
//     let element=e.target;
//     console.log(`${element.id} clicked!`);
// }
function setSuccess(element){
    const first=element.parentElement;
    const errorElement=first.querySelector('.error');
    errorElement.innerText='';
    first.classList.add('success')
    first.classList.remove('error')
}