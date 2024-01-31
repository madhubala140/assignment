
// Object examples..................//

// let item = {
//     name:'iphone',
//     price:10000,
//     model:'new',
//     buy: function(){
//         console.log('new mwthod added')
//     }
// }
// console.log(item)
// console.log(item.buy)
// let item2 = new Object()
// item2.name='tomato',
// item2.price=56000,
// item2.model='fass';
// console.log(item2)
// item.model='fail'
// console.log(item)
// item.rate="mass"
// console.log(item)

 //Constructor function............//
//  function Obj(name,tech){
//     this.name=name,
//     this.tech=tech
//  }
// let obj1= new Obj('ammu','js');
// let obj2=new Obj('shiv','blockchain');
// console.log(obj1)
// console.log(obj2)
// obj2.name='fav'
// console.group(obj2)

// ...This keyword examples.. 
// function playVideo(){
//    console.log(this)
// }
// playVideo.call({video:'javascript'});
// let newL=playVideo.bind({video:'html'})
// console.log(newL);

let user1={
   name:'madhu',
   age:22,
   login(){
      console.log("you are logged in")
   },
   logout()
   {
console.log("you are logged out")
   }
}
let user2={
   name:'Karthick',
   age:28,
   login(){
      console.log("hi",this.name)
      console.log("you are logged in")
   },
   logout()
   {
console.log("you are logged out")
   }
}
let user3={
   name:'Shiva',
   age:28,
   login(){
      console.log("hi",this.name)
      console.log("you are logged in")
   },
   logout()
   {
console.log("you are logged out")
   }
}
user2.login()
user3.login()
class User{
   constructor(name,age){
      this.name=name;
      this.age=age;
   }
   login(){
      console.log("hi",this.name)
      console.log("you are logged in")
   }
   logout()
   {
console.log("you are logged out")
   }
}
let userOne=new User('ammu',22)
let userTwo=new User('priya',33)
let movie='ps1'
class Paiduser extends User{
   constructor(name,age){
      super(name,age);
      this.storage=100;
   }
   message(){
      console.log('you have 50 gb storage')
   }
   login(){
      console.log("thank you for your patience")
   }
} 
let paidUser1=new Paiduser('kani',45)
paidUser1.login()
paidUser1.message()