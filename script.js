// // Simulerad blockering av tråden
setInterval(() => {
  console.log("One second has passed");
}, 3000)

// Skriver ut HTML direkt i dokumentet
// document.body.innerHTML += "<h1 style='color:black;'>HELLO FROM DOCUMENT.BODY.InnerHTML()</h1>";
// document.body.innerHTML += "<p>Another document.body.innerHTML() call</p>";


const footer = document.querySelector("footer");
footer.innerHTML = `
<div style="background-color: #3b3b3b; color: white; padding: 20px;">
  <h2>Get in touch with us</h2>
  <h3>Contact us</h3>
  <h3>Phone: 123456789</h3>
  <h3>Email: A11yNews@email.com</h3>
  <button id="colorButton">Change background</button>
  <button id="logNumbers">Logg number</button>
  <ul id="numberList"></ul>
  <h3 id="pageLoaded" font-weight: bold ;"></h3>
`;

document.getElementById("colorButton").addEventListener("click", () => {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16)
});

document.body.style.opacity = "0";
setTimeout(() => {
  document.body.style.opacity = "1";
}, 500);

document.getElementById("logNumbers").addEventListener("click", () => {
  const numberList = document.getElementById("numberList"); 
numberList.innerHTML = "";
for (let i = 1; i <= 100; i++){
  const li = document.createElement("li");
  li.textContent = `Number: ${i}`;
  numberList.appendChild(li);
}
});

document.getElementById("pageLoaded").textContent = "Page loaded!";

// setTimeout(() => {
//   for (let i = 0; i < 10000; i++) {
//     console.log(i);
//   }
// }, 1000);

// Visar innehållet på sidan efter 5 sekunder
// setTimeout(() => {
//   document.body.style.display = "block"
// }, 5000)

// Loggar 10000 tal till konsolen efter 1 sekund
// setTimeout(() => {
//   for (let i = 0; i < 10000; i++) {
//     console.log(i)
//   }
// }, 1000)

// // Visar en alert när sidan har laddats
// document.addEventListener("DOMContentLoaded", function () {
//   alert("Page loaded!")
// })

// Loggar 100 000 siffror direkt när sidan laddas
// for (let i = 0; i < 100000; i++) {
//   console.log(i)
// }
