let answ = document.getElementById("ans");
let quest = document.getElementById("Qst");


document.getElementById("8-ball").addEventListener("click", Answer);




function Answer() {

    let randnum = Math.random()
    if (randnum < 0.2) {
        answ.innerHTML = "Without a Doubt";
    } else if (randnum < 0.4) {
        answ.innerHTML = "As I see it, yes";
    } else if (randnum < 0.6) {
        answ.innerHTML = "Concentrate and ask again";
    } else if (randnum < 0.8) {
        answ.innerHTML = "Don't count on it";
    } else if (randnum < 1) {
        answ.innerHTML = "Outlook not so good";
    } 

}