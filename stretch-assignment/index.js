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

    item.addEventListener("click", () => {
      item.style.order = "-1";
     });

})

// redBlock.addEventListener("click", () => {
//     item.style.order = "-1";
//  });

//  blueBlock.addEventListener("click", () => {
//     item.style.order = "-1";
//  });

//  greenBlock.addEventListener("click", () => {
//     item.style.order = "-1";
//  });

//  pinkBlock.addEventListener("click", () => {
//     item.style.order = "-1";
//  });

//  grayBlock.addEventListener("click", () => {
//     item.style.order = "-1";
//  });


// redBlock.addEventListener("mousedown", () => {
//     TweenLite.to(".block--red", 100, { ease: SlowMo.ease.config(1, 1, false), x: 10000 });
// });

// // redBlock.addEventListener("mouseup", () => {
// //     TweenLite.to(".block--red", 100, { ease: SlowMo.ease.config(1, 1, false), x: -10000 });
// // });

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
