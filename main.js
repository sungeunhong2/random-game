//랜덤번호 저장
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 <  유저번호 DOWN!!
//랜덤번호가 > 유저번호가 Up!!
///reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다.(더이상 추측불가, 버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
//유저가 이미 입력한 숫잦를 또 입력하면 알려준다, 기회를 깍지 않는다.

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetBtn = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetBtn.addEventListener("click", reset);
userInput.addEventListener("focus", function (){userInput.value = ""});

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1; //1~100까지 범위
    console.log(computerNum);
}
function play(){
    let userValue = userInput.value;
    
    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요.";
        return false;;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다.";
        return false;
    }
    chances --;
    chanceArea.textContent =   `남은기회:${chances}번`
    if(userValue < computerNum){
        resultArea.textContent = "Up!!";
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!";
    }else{
        resultArea.textContent = "맞추셨습니다.";
        gameOver = true;
    }

    history.push(userValue);
    if(chances < 1){
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}  
function reset(){
    console.log("삭제")
    userInput.value = ""; // 유저입력 초기화
}
pickRandomNum();