let blocksChange = document.querySelectorAll(".block");
let redBlock = document.querySelector(".block--red");
let blueBlock = document.querySelector(".block--blue");
let greenBlock = document.querySelector(".block--green");
let pinkBlock = document.querySelector(".block--pink");
let grayBlock = document.querySelector(".block--gray");

let blocksArray = Array.from(blocksChange);


blocksArray.forEach(item => {

    item.addEventListener("mouseover", () => {
        item.style.cursor = "pointer"
    });

    // item.addEventListener("click", () => {
    //   if (item.style.order !== "-1") {
    //       item.style.order = "-1";
    //   } else if (item.style.order == "-1") {
    //       item.style.order = "0";
    //   }
     
    //   console.log(item.style.order);
      
    //  });

})

redBlock.addEventListener("click", () => {
    redBlock.style.order = "-1";
    blueBlock.style.order = "0";
    greenBlock.style.order = "0";
    pinkBlock.style.order = "0";
    grayBlock.style.order = "0";
 });

 blueBlock.addEventListener("click", () => {
    blueBlock.style.order = "-1";
    redBlock.style.order = "0";
    greenBlock.style.order = "0";
    pinkBlock.style.order = "0";
    grayBlock.style.order = "0";
 });

 greenBlock.addEventListener("click", () => {
    greenBlock.style.order = "-1";
    blueBlock.style.order = "0";
    redBlock.style.order = "0";
    pinkBlock.style.order = "0";
    grayBlock.style.order = "0";
 });

 pinkBlock.addEventListener("click", () => {
    pinkBlock.style.order = "-1";
    blueBlock.style.order = "0";
    greenBlock.style.order = "0";
    redBlock.style.order = "0";
    grayBlock.style.order = "0";
 });

 grayBlock.addEventListener("click", () => {
    grayBlock.style.order = "-1";
    blueBlock.style.order = "0";
    greenBlock.style.order = "0";
    pinkBlock.style.order = "0";
    redBlock.style.order = "0";
 });


// redBlock.addEventListener("mousedown", () => {
//     TweenLite.to(".block--red", 100, { ease: SlowMo.ease.config(1, 1, false), x: +1});
// });

// redBlock.addEventListener("mouseup", () => {
//     TweenLite.to(".block--red", 100, { ease: SlowMo.ease.config(1, 1, false), x: -10000 });
// });

// blueBlock.addEventListener("mousedown", () => {
//     TweenLite.to(".block--blue", 100, { ease: SlowMo.ease.config(1, 1, false), x: 10000 });
// });
// greenBlock.addEventListener("mousedown", () => {
//     TweenLite.to(".block--green", 100, { ease: SlowMo.ease.config(1, 1, false), x: 10000 });
// });
// pinkBlock.addEventListener("mousedown", () => {
//     TweenLite.to(".block--pink", 100, { ease: SlowMo.ease.config(1, 1, false), x: 10000 });
// });
// grayBlock.addEventListener("mousedown", () => {
//     TweenLite.to(".block--gray", 100, { ease: SlowMo.ease.config(1, 1, false), x: 10000 });
// });
