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
// function setSuccess(element){
//     const first=element.parentElement;
//     const errorElement=first.querySelector('.error');
//     errorElement.innerText='';
//     first.classList.add('success')
//     first.classList.remove('error')
// }
const form=document.querySelector('#main');
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
form.addEventListener('submit',(e)=>{
    
    if(!validateInputs()){
        e.preventDefault();
    }
})
function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    let success=true;

    if(usernameVal===''){
        success=false;
        setError(username,'username is requird')
    }
    else{
        setSuccess(username)
    }
    if(emailVal===''){
        success=false;
        setError(email,'email is required')
    }
    else if(!validateEmail(emailVal)){

        success=false;
    setError(email,'please enter a valid email')
}
else{
    setSuccess(email)
}
if(password===''){
    setError(password,'password us required')
}
else if(passwordVal.length<8){
    success=false;
    setError(password,'password atleast 8 charter long')
}
else{
    setSuccess(password)
}
return success;
}
function setError(element,message){
    const first=element.parentElement;
    const errorElement=first.querySelector('.error');
    errorElement.innerText=message;
    first.classList.add('error');
    first.classList.remove('success');
}
function setSuccess(element){
    const first=element.parentElement;
    const errorElement=first.querySelector('.error');
    errorElement.innerText='';
    first.classList.add('success');
    first.classList.remove('error');
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };