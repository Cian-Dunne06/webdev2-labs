const greenbtn = document.querySelector(".green");

greenbtn.addEventListener("click", () => alert("Thanks! You're okay too"));


const bluebtn = document.querySelector(".blue");

bluebtn.addEventListener("click", () => {
  let readMoreDiv = document.querySelector("#readmore");
  readMoreDiv.classList.toggle("hideshow");
});

const redbtn = document.querySelector(".red");

redbtn.addEventListener("click", () => {
  let username = prompt("What's your name?");
  let words = username.split(" ");
  let fullname = ""
  for(let i = 0; i < words.length; i++)
  {
    fullname += words[i].charAt(0).toUpperCase() + words[i].substring(1, username.length).toLowerCase() + " ";
  }
     document.querySelector("h1").textContent = `Welcome to the App, ${fullname} !`;
});