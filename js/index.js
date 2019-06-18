// Your code goes here
let navChange = document.querySelector("header nav");

navChange.addEventListener('click', event => {
    event.preventDefault();
});


let headerChange = document.querySelector("header");

headerChange.addEventListener('mouseover', event => {
    headerChange.style.backgroundColor = "black";
    headerChange.style.color = "white";
    event.preventDefault();
});

headerChange.addEventListener('mouseleave', event => {
    headerChange.style.backgroundColor = "white";
    headerChange.style.color = "black";
   
});




let funBusImage = document.querySelector(".intro img");

funBusImage.addEventListener('mouseenter', event => {
    funBusImage.src = 'https://images.unsplash.com/photo-1547886597-7e87e5288619?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80';
    funBusImage.style.width = "1000px";
    funBusImage.style.height = "250px";
    event.preventDefault();
});
funBusImage.addEventListener('mouseleave', event => {
    funBusImage.src = "img/fun-bus.jpg";

});

let adventureImg = document.querySelector(".content-section img");

adventureImg.addEventListener('drag', event => {
    adventureImg.src = "img/fun.jpg"
    event.preventDefault();
});

adventureImg.addEventListener('dragend', event => {
    adventureImg.src = "img/adventure.jpg"
    event.preventDefault();
});


let funImg = document.querySelector(".inverse-content img");
funImg.addEventListener('drag', event => {
    funImg.src = "img/adventure.jpg"
})

funImg.addEventListener('dragend', event => {
    funImg.src = "img/fun.jpg"
})

let destinationImg = document.querySelector(".content-destination");

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.05, scale), 1.3);
  
    // Apply scale transform
    destinationImg.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  
  destinationImg.onwheel = zoom;

  destinationImg.addEventListener('click', event => {
      destinationImg.preventDefault();
  })
