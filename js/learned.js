


// const getUrl = document.querySelectorAll('#radiocb a')[0].getAttribute("href");
const getUrl = document.querySelectorAll('#radiocb a');
const ulUrl = document.querySelectorAll('#radiocb ul');
console.log(ulUrl[0]);

let contentEM;

for (let i = 0; i < getUrl.length; i++) {
    contentEM = `<a href="${getUrl[i].getAttribute("href")}">시즌10e${i+1} (빠른 링크)</a>`;
    ulUrl[i].innerHTML = contentEM;
}