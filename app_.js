const SHOW_ = "Show correct answer";
const HIDE_ = "Hide correct answer";

document.getElementById('firstMysteryBtn').addEventListener('click', function (e){
    toggleMystery("first", e.target);
});

document.getElementById('secondMysteryBtn').addEventListener('click', function (e){
    toggleMystery("second", e.target);
});

document.getElementById('thirdMysteryBtn').addEventListener('click', function (e){
    toggleMystery("third", e.target);
});

document.getElementById('fourthMysteryBtn').addEventListener('click', function (e){
    toggleMystery("fourth", e.target);
});

document.getElementById('fiveMysteryBtn').addEventListener('click', function (e){
    toggleMystery("five", e.target);
});

document.getElementById('sixMysteryBtn').addEventListener('click', function (e){
    toggleMystery("six", e.target);
});

function toggleMystery(id, button) {
    let x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";
        button.innerHTML = HIDE_;
    } else {
        x.style.display = "none";
        button.innerHTML = SHOW_;
    }
}