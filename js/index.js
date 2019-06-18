// Your code goes here
let navChange = document.querySelector("header nav");
let funBusTitle = document.querySelector("header h1");

navChange.addEventListener('click', event => {
    event.preventDefault();
    console.log(event.target.textContent)
    funBusTitle.textContent = event.target.textContent;
});


funBusTitle.addEventListener('click', event => {
    funBusTitle.textContent = "Fun Bus";
})


///////////header info
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


///////////images header

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


///////images main content
let adventureImg = document.querySelector(".content-section img");

adventureImg.addEventListener('drag', event => {
    adventureImg.src = "img/fun.jpg"
    event.preventDefault();
});

adventureImg.addEventListener('dragend', event => {
    adventureImg.src = "img/adventure.jpg"
    event.preventDefault();
});

// let picturesShuffle = {
//     "pictures": {
//     "picture-1": "https://unsplash.com/photos/1-29wyvvLJA",
//     "picture-2": "https://unsplash.com/photos/duQ1ulzTJbM"
//     }
// };


// funImg.addEventListener('click', event => {
//     funImg.forEach((funImg, index) => {
//     funImg.src = picturesShuffle('pictures')(`picture-${index+1}`);
//     });
//     event.preventDefault();

// })


let funImg = document.querySelector(".inverse-content img");
funImg.addEventListener('drag', event => {
    funImg.src = "img/adventure.jpg"
})

funImg.addEventListener('dragend', event => {
    funImg.src = "img/fun.jpg"
})

///////////main content info

let everything = document.addEventListener("copy", event => {
    alert("Can not complete action")
    event.preventDefault();
});

let headingTwo = document.querySelectorAll("h4");

headingTwo.forEach((item) => {
    item.addEventListener('dblclick', event => {
        item.style.color = "red";
    })
    item.addEventListener('click', event => {
        item.style.color = "black";
    })
});




///////////destination
let destination = document.querySelector(".content-destination");

function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    scale = 1.3;
    destination.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  
  destination.onwheel = zoom;

  destination.addEventListener('click', event => {
    destination.style.transform = "scale(1)";
  });

 
  