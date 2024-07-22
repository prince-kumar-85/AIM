// console.log("hello world");

// // let ppp=() => console.log("hello muskan!")
// // alert(ppp())

// function sum(){
//     console.log(arguments)
//     let f=0;
//     for(let i in arguments){
//         f=f+arguments[i]
//     }
//     console.write(f)
// }
// sum(45,654,6,464,6)
// sum(55,36,92,78,62,55)

// const promiseOne = new Promise((resolve , reaject)=>{
//     // do an async task 
//     // DB calls , cryptography
//     setTimeout(()=>{
//         console.log("muskqan is my and only my god")
//         resolve()
//     },10000)

// })
// promiseOne.then(function(){
//     console.log("promise is cosumed");

// })

   
//this is user 


// let peomisethree = new Promise(function(resolve,reaject){
//     setTimeout(function(){
//         resolve({user_name : "prince_singh",email:"princekumarkha2005@gmail.com"})
//     },10000)
// })
// peomisethree.then(function(user){
//     console.log(user);
// })
    


// this is the single consuption operator

// new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         console.log("hii this is prince kumar")
//         resolve()
//     },5000)
// }).then(function(){
//     console.log("this is conjusption of promise function")
// })

// let promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error= false;
//         if(!error){
//             resolve({username: "prince kumar" , emailid: "princekumar@niet.co.in"})
//         }
//         else{
//             reject("this is not valid project:")
//         }
//     },5000)
// })
// promiseFour.then(function(user){
//     console.log(user)

////////////////////////////////////////////////////////////////////////////////////////

//     return user.username;
// }).then(function(username){
//     console.log(username)
// }).catch(function(error){
//     console.log("Error! this is a error inn the code ")
// }).finally(()=>{
//     console.log("this is te finall after resolve and reject!")
// })
////////////////////////////////////////////////////////////////////////////////////
// let promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//             resolve({username: "prince kumar" ,emailID:"princekuamr@niet.co.in"})
//         }
//         else{
//             reject("Error: some thing is went wrong!")
//         } 
//     },2000)
// })
////////////////////////////////////////////////////////////////////////////////////////
// async function consumePromiseFour(){
//     try{
//         const response=await promiseFour
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// }

// consumePromiseFour();

// for json FormDataEvent.//////////////////////////////////////////////////////////////////////

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((Response)=>{
//     return Response.json()                                   fetch api example
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>console.log(error))

/////////////////////////////////////////////////////////////////////////////////////////////////////

// async function jsonformate(){
    // try {
        // let response=await fetch("https://jsonplaceholder.typicode.com/users")
        // let data=await response.json()
        // console.log(data)
        
    // } catch (error) {
        // console.log('E:',error)
        
    // }
   
// } 
// jsonformate.Array(2)


////////////////////////////////////////////////////////////////
// let promis= new Promise(function(resolve , reject){
    // setTimeout(()=>{
        // console.log("shree radhe radhe");
        // resolve()

    // },5000)
// })
// promis.then(function(){
    // console.log("consume the promise!")
// })

// 

document.getElementById("saveForm").addEventListener("click",function(e){
    e.preventDefault();
//     obj={
//     title: document.getElementById("titletext").value,
//     body: document.getElementById("bodytext").value,
//     userId: document.getElementById("userid").value,
// }
    fetch('https://jsonplaceholder.typicode.com/posts', {
method: 'POST',
body: new FormData(document.querySelector("#myfrom")),
headers: {
'Content-type': 'application/x-www-form-urlencoded',
},
})
.then((response) => response.json())
.then((json) => console.log(json));

})

