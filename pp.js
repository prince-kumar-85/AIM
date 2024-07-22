// let p=22150;
// let o;
// if(p==65){
//     o="vaiavi";
// }else if(p<40){
//     o="muskan";
// }else{
//     o="prince"
// }
// console.log(o);


//  let marks=prompt("enter your science marks");
//  let p=(marks>36)?"pass":"fail";
//  alert(p);

// for(let i=1;i<6;i++){
//     for(let j=1;j<i;j++){
//     console.log("*");
// }
// console.log("*")
// }

// let car={
//    type:"Suv",
//    fule:"petrol",
//    seat:"sevensetter",
//    color:"white",
// }
// alert(car.seat)
// for(let a in persent){
//     console.log("marks of " +a+ " is "+this.prince)
// }
// const name=["prince","muskan","vaishnavi","vipul"];
// name=Number.parseInt();
// for(let a of name){
//     alert(a);
// }
// let p=myfunction(2,9);
// function myfunction(x,y){
//     return x+y;
// }
// alert(p)
// function muskan(){
//     console.log("hello world");
//     console.log("hello prince");

// }
// muskan();

// let prince=(a,b)=>{
//     return a+b;
// }
// alert(prince(5,3));
// const numbers = [65, 44, 12, 4];
// let p=numbers.forEach(function(item, index, arr) {
//     arr[index] = item * 10;
// });
// // The 'numbers' array now contains [650, 440, 120, 40].
// let nums=[4,5,6,9];
// let newArr=nums.map((val)=>{
//     return val
// });
// console.log(newArr);
// let p=document.createElement("button");
// p.style.background="blue"
// p.style.color="red"
// p.innerText="click me";
// let o=document.querySelector("body").prepend(p);


// let p=document.createElement("p");
// p.innertext="hey vaishnavi i love u"
// p.style.background="yellow";
// let pp=document.querySelector("body").prepend("p");
// let btn1=document.querySelector(".btn");
// let currmode="light";
// btn1.addEventListener("click",()=>{
//     if(currmode==="light"){
//         currmode="dark";
//         document.querySelector("body").style.backgroundColor="black";
//     }
//     else{
//         currmode="light";
//         document.querySelector("body").style.backgroundColor="white";
//     }
//     console.log(currmode)
// });

// let btn=document.querySelector(".btn");
// let body=document.querySelector("body");
// let currmode="light";

// btn.addEventListener("click",()=>{
//     if(currmode==="light"){
//         currmode="dark";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currmode="light"
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// });

// // console.log("hello world")

// let head=document.querySelector("h1");
// head.classList.add("dark");
// let para=document.querySelector(".pp")
// // let p=para.innerText.data[1].text;

// const url="https://cat-fact.herokuapp.com/facts";
// // let promise=fetch(url);
// // console.log(promise);
// let  btn=document.querySelector(".btn");


// const getFacts = async () => {
//     console.log("getting data...")
//     let response = await fetch(url);
//     console.log(response);//json fromate that means javascript formate
//      let data=await response.json();;
//      console.log(data);
//      para.innerText=data[3].text;
// }
// btn.addEventListener("click",getFacts)
// // let p=para.innerText.data[1].text;
// // console.log(p);



// const browserType = "mozilla";

// if (browserType.includes("zilla")) {
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }
// const heading=document.querySelector("h1");
// heading.textContent="hay muskan i love u"
// document.querySelector("html").addEventListener("click",()=>{
//   alert("hey musku u love u by heart");
// }
// );
// const myImage = document.querySelector("img");

// myImage.onclick = () => {                                  //this is the best thing for the exchanging the picture

//   const mySrc = myImage.getAttribute("src");
//   if (mySrc === "images/firefox-icon.png") {
//     myImage.setAttribute("src", "princelogopic.jpg");
//   } else {
//     myImage.setAttribute("src", "images/firefox-icon.png");
//   }
// };
// let myButton = document.querySelector("button");
// let myHeading = document.querySelector("h1");

// function setUserName() {
//   const myName = prompt("Please enter your name.");
//   localStorage.setItem("name", myName);
//   myHeading.innerHTML = `Mozilla is cool, ${myName}`;
// }
// setUserName() function setUserName() {
  // const myName = prompt("Please enter your name.");
  // if (!myName) {
  //   setUserName();
  // } else {
  //   localStorage.setItem("name", myName);
  //   myHeading.textContent = `Mozilla is cool, ${myName}`;
  // }

// function map(fun,a){
//     const result=new Array(a.length);
//       for(let i=0;i<a.length;i++){
//         result[i]=fun(a[i]);
       
//       }
//       return result;
//     }
// function cube(x){
//   return x*x*x;
// }

// const number=[5,6,9,8,5];
// console.log(map(cube,number))
//  function fun(num){
//   if(num===0 || num===1){
//     return 1;
//   }else{
//     return num* fun(num-1);
//   }
//  }
// //  console.log(fun(5))
//  function squareadd(a,b){
//   function square(x){
//     return x*x;
//   }
//   return square(a)+square(b)
//  }
// let ppp=squareadd(2,3);
// console.log(ppp)

// function myConcat(separator) {
//   let result = ""; // initialize list
//   // iterate through arguments
//   for (let i = 1; i < arguments.length; i++) {
//     result += arguments[i] +" "+ separator;
//   }
//   return result;
// }
// let po=myConcat("prijroif"," " ,326,"gwugfuywgfuw","pofheioqru")

// const biggestNum = Number.MAX_VALUE;
// alert(biggestNum)
// const smallestNum = Number.MIN_VALUE;
// alert(smallestNum)
// const infiniteNum = Number.POSITIVE_INFINITY;
// alert(infiniteNum)
// const negInfiniteNum = Number.NEGATIVE_INFINITY;
// alert(negInfiniteNum)
// const notANum = Number.NaN;
// alert(notANum)

// const g = new Date("1995-12-25:23:25");
// alert(g)


function JSClock() {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();
  let temp = String(hour % 12);
  if (temp === "0") {
    temp = "12";
  }
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 12 ? " P.M." : " A.M.";
  return temp;
}
alert(JSClock())

