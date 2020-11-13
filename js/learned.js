


// const getUrl = document.querySelectorAll('#radiocb a')[0].getAttribute("href");
const getUrl = document.querySelectorAll('#radiocb a');
const ulUrl = document.querySelectorAll('#radiocb ul');
const player = document.getElementById('player');
let ep = localStorage.getItem('number');
let m1 = localStorage.getItem('movie1');
let m2 = localStorage.getItem('movie2');
let m3 = localStorage.getItem('movie3');
let m4 = localStorage.getItem('movie4');
let m5 = localStorage.getItem('movie5');
let m6 = localStorage.getItem('movie6');
let m7 = localStorage.getItem('movie7');
let m8 = localStorage.getItem('movie8');
let m9 = localStorage.getItem('movie9');
let m10 = localStorage.getItem('movie10');
let m11 = localStorage.getItem('movie11');
let m12 = localStorage.getItem('movie12');
let m13 = localStorage.getItem('movie13');
let m14 = localStorage.getItem('movie14');
let m15 = localStorage.getItem('movie15');
let m16 = localStorage.getItem('movie16');
console.log(ulUrl[0]);

let contentEM;

// for (let i = 0; i < getUrl.length; i++) {
//     contentEM = `<a href="${getUrl[i].getAttribute("href")}">시즌10e${i+1} (빠른 링크)</a>`;
//     ulUrl[i].innerHTML = contentEM;
// }


for (let i = 0; i < getUrl.length; i++) {
    contentEM = `<a href="player.html#${i+1}ep">시즌10e${i+1} (빠른 링크)</a>`;
    ulUrl[i].innerHTML = contentEM;
    localStorage.setItem(`movie${i+1}`, getUrl[i].getAttribute("href"));
    localStorage.setItem("number", `${i+1}`);
}

for (let i = 0; i < ep; i++) {
    player.innerHTML += `<div class="outer-button" id="${i+1}ep"><button onclick="f${i+1}()">Play Ep${i+1}</button>`;
}

// document.getElementById("ep1").addEventListener("click", function() {
//     player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m1}" width="100%" height="100%" allowfullscreen > </iframe>`;
//   });

function f1() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m1}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f2() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m2}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f3() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m3}" width="100%" height="100%" allowfullscreen > </iframe>`;
}
function f4() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m4}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f5() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m5}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f6() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m6}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f7() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m7}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f8() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m8}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f9() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m9}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f10() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m10}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f12() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m12}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f13() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m13}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f14() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m14}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f15() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m15}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

function f16() {
    player.innerHTML = `<iframe style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden" frameborder="0" type="text/html" src="${m16}" width="100%" height="100%" allowfullscreen > </iframe>`;
}

