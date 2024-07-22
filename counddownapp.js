const enddate = "23 June 2024 04:00 PM"

document.getElementById("end-date").innerHTML=enddate;
let input=document.querySelectorAll(".pp");


function clock(){
    const end = new Date(enddate)
    const now= new Date()// this is in milisecond
    const diff= (end-now) / 1000; //now this is in second
    if(diff<0) return;
    console.log(diff)
    input[0].value=Math.floor(diff/3600/24);
    input[1].value=Math.floor(diff/3600)%24;
    input[2].value=Math.floor(diff/60)%60;
    input[3].value=Math.floor(diff)%60;
    //convert it into hour

}
//initial call
clock();


//for all time updating function
 setInterval(()=>{
    clock();
 },1000)