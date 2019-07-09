//logo change
const logo = document.querySelector("h1");
console.log(logo);
logo.addEventListener("dblclick", () => {
  logo.textContent = "Fun Bus";
  logo.style.color = "Gold";
  logo.style.textShadow = "5px 10px 10px yellow";
});

logo.addEventListener("click", () => {
    TweenLite.to("img", 2.5, { ease: Bounce.easeIn, scaleY:1, });
    });


//Nav changes
const navLinks = document.querySelectorAll(".nav-link");

navArray = Array.from(navLinks);

navArray.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.color = "green";
    item.style.fontSize = "2rem";
    item.style.fontFamily = "cursive";
    logo.textContent = event.target.textContent;
    event.preventDefault();
  });
  item.addEventListener("mouseleave", () => {
    item.style.color = "black";
    item.style.fontSize = "1.6rem";
    item.style.fontFamily = "normal";
  });
});

//container Home changes
const containerHome = document.querySelector(".home");

containerHome.addEventListener("wheel", () => {
  containerHome.style.color = "#b67e31";
});

containerHome.addEventListener("contextmenu", () => {
  containerHome.style.color = "gray";
});

//textcontent changes
const textContent = document.querySelectorAll(".text-content");

textContentArray = Array.from(textContent);

textContentArray.forEach(item => {
  item.addEventListener("click", () => {
    item.style.color = "red";
    
  });
});


//image drag
const introImg = document.querySelector(".intro img");

introImg.addEventListener("drag", () => {
  introImg.style.display = "none";
});

introImg.addEventListener("dragend", () => {
  introImg.style.display = "flex";
  introImg.style.margin = "auto";
  introImg.src = "img/destination.jpg";
});

//body change
const html = document.querySelector("html");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const footerP = document.querySelector("footer p");
const img = document.querySelectorAll("img");
const h2 = document.querySelectorAll("h2");

html.addEventListener("click", () => {
    TweenLite.to("body", 2.5, { ease: Bounce.easeIn, scaleX:1, });
    });
    

body.addEventListener("keypress", () => {
  header.style.backgroundColor = "black";
  body.style.backgroundColor = "black";
  footer.style.backgroundColor = "black";
  footerP.style.color = "gold";
  logo.style.color = "gold";
  body.style.color = "white";
  navLinks.forEach(a => {
    a.style.color = "white";
  });
  img.forEach(img => {
    img.style.boxShadow = "5px 5px 10px gold";
  });
  h2.forEach(h2 => {
      h2.style.textShadow = ("5px 10px 10px gold");
  })
  
});

body.addEventListener("keyup", () => {
  header.style.backgroundColor = "ivory";
  body.style.backgroundColor = "white";
  footer.style.backgroundColor = "ivory";
  footerP.style.color = "black";
  logo.style.color = "black";
  body.style.color = "black";
  navLinks.forEach(a => {
    a.style.color = "black";
  });
  img.forEach(img => {
    img.style.boxShadow = "none";
  });
  h2.forEach(h2 => {
    h2.style.textShadow = ("none");
})

});
