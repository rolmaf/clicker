let circle = document.querySelector(".game__circle");
let score_text = document.querySelector(".game__score");;
let score = 0;


function afterClickButton() {   
    score++;
    score_text.innerHTML = score;
    checkScore();
};

function checkScore() {
    if (score === 10) {
        document.getElementById("game__circle");
        console.log("Смена стилей");
    }

}


circle.addEventListener("mouseup" , function() {
    afterClickButton();
});