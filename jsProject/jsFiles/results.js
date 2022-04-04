let congratulation = document.getElementById("congratulation--fail")
let scoreCard = document.getElementById("scoreCard")
let score = document.getElementById("score");
let status = document.getElementById("status")
let showAnalysis = document.getElementById("show-analysis")
let qustionsAnalysis = document.getElementById("qAnalysis")
let singleQustion = document.getElementById("qustionPart")
let logout = document.getElementById("logout")

let resultCount = 0;
let totalResult = 0;

let allqqq = document.getElementById("all-card") 



let x = new XMLHttpRequest()
x.open('GET', 'qustions.json')

x.onload = function () {
    var result = JSON.parse(x.responseText)

    //count the number of correct answers
    for (let i = 0; i < 20; i++) {
        if (sessionStorage.getItem(`${i+1}`) == result[i].correct) {
            resultCount++;
        }
    }
 
    totalResult = (resultCount / 20) * 100;


    if (resultCount < 10) {

        scoreCard.innerHTML = `            
        <div id="congratulation--fail">Hard Luck!</div>
        <div id="score">Your score is: ${totalResult}% </div>
        <div id="fail">Fail</div>`

        scoreCard.style.backgroundColor = "red"
        scoreCard.style.opacity = .7;
        scoreCard.style.color = "white"

    } else {
        scoreCard.innerHTML = `            
        <div id="congratulation--fail">congratulation!</div>
        <div id="score">Your score is: ${totalResult}% </div>
        <div id="pass">Pass</div>`

        scoreCard.style.backgroundColor = "green"
        scoreCard.style.opacity = .7;
        scoreCard.style.color = "white"

    }

    let qustionData = ""

    for (let i = 0; i < result.length; i++) {

            qustionData += `        
            <div class="all-card" >
            <div id="qustion">Q ${i + 1}:${result[i].question}</div>
            <div id="choices" class="qustionsssss">
                <div class="choice">
                    <input type="button" disabled class="group${i+1}" class="btn" value="${result[i].a}">
                </div>
                <div class="choice">
                    <input type="button" disabled class="group${i+1}" class="btn" value="${result[i].b}">
                </div>
                <div class="choice">
                    <input type="button" disabled class="group${i+1}" class="btn" value="${result[i].c}">
                </div>
                <div class="choice">
                    <input type="button" disabled class="group${i+1}" class="btn" value="${result[i].d}">
                </div>
            </div>
            </div>
        `
        qustionsAnalysis.innerHTML = qustionData;

    }
    let testChoices = document.querySelectorAll(".qustionsssss");
    let choice = document.querySelectorAll(".btn")
 
    


    for(let j = 0 ; j<testChoices.length ; j++){
        let qqqq = document.querySelectorAll(`.group${j+1}`)   
        for(let l = 0 ; l<qqqq.length ; l++){
            if(l==result[j].correct){
                
                qqqq[l].setAttribute("class", "btn-correct")
                
            }else if (l == sessionStorage.getItem(`${j+1}`)){
                qqqq[l].setAttribute("class", "btn-fail")
                
            }else{
                qqqq[l].setAttribute("class", "btn-fail")
            }
        }
    }


      
    showAnalysis.addEventListener("click", function () {
        qustionsAnalysis.style.opacity = 1 ;
    })

}

x.send()

logout.addEventListener("click" , function(){
    window.location.href = "http://127.0.0.1:5500/jsProject/home.html"
})







