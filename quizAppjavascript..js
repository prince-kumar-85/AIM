const questiions=[{
    'que':'Which of the following is a markup language?',
    'a':'HTML',
    'b':'css',
    'c':'javaScript',
    'd':'PHP',
    'correct':'a'
},
{
    'que':'React id developed by which company?',
    'a':'netflix',
    'b':'wibro',
    'c':'facebook',
    'd':'sumsung',
    'correct':'c'
},
{
    'que':'In which year javaScript is launched?',
    'a':'2003',
    'b':'1995',
    'c':'1996',
    'd':'none of the above',
    'correct':'b'
},
{
    'que':'What does the CSS is stabd for?',
    'a':'Cassading Style Sheet',
    'b':'Hyper text markup language',
    'c':'jason Object Notation',
    'd':'helicopeter terminal',
    'correct':'a'
}]



let index=0;
let quesBox=document.getElementById("quesBox");
const optionInput=document.querySelectorAll(".options")
let total=questiions.length;
let right=0;
let wrong=0;
const loadQuestion=()=>{
    if(index === total){
        return endQuiz()
    }
    reset();
    const data=questiions[index];
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a
    optionInput[1].nextElementSibling.innerText=data.b
    optionInput[2].nextElementSibling.innerText=data.c
    optionInput[3].nextElementSibling.innerText=data.d

}

const submitQuiz=()=>{
    const data=questiions[index];
    const ans=gettAnswer()
    if(ans==data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const gettAnswer=()=>{
    let answer;
    optionInput.forEach(
        (input)=>{
            if(input.checked){
                answer= input.value;
                
            }
        }
    )
    return answer;
}
const reset=()=>{
    optionInput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thanks for playing the quiz</h3>
    <h2> ${right} / ${total} are correct</h2>
    `
}

loadQuestion();