let blocksChange = document.querySelectorAll(".blocks");
let redBlock = document.querySelector(".block--red");
let blueBlock = document.querySelector(".block--blue");
let greenBlock = document.querySelector(".block--green");
let pinkBlock = document.querySelector(".block--pink");
let grayBlock = document.querySelector(".block--gray");

blocksChange.forEach((item) => {
    item.addEventListener('click', event => {
    console.log(blocksChange.indexOf('item'));
    });
});

