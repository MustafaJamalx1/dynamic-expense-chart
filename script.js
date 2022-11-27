"use strict";
let a = 20;
// fetching data from .json file
let xhReq = new XMLHttpRequest();
xhReq.open("GET", "./data.json", false);
xhReq.send(null);
let jsonData = JSON.parse(xhReq.responseText);
// assiging day and amount
for (let i = 0; i < jsonData.length; i++) {
  let { day, amount } = jsonData[i];
  //   let amountString = String(amount);
  //   let root = document.documentElement;
  //   root.style.setProperty("--x-y", amountString);
  amount = amount / 5;
  const li = (document
    .querySelector(".amounts")
    .appendChild(document.createElement("li")).style.height = `${amount}rem`);
  document
    .querySelector(".days")
    .appendChild(document.createElement("li")).textContent = day;
}
