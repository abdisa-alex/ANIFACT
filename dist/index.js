"use strict";
const fact = document.querySelector(".fact");
const btn = document.querySelector(".gen-btn");
const facts = document.querySelector(".facts");
btn.addEventListener("click", () => {
    axios.get("https://se-animal-facts.herokuapp.com").then((res) => {
        let fetcedFact = res.data.data;
        fact.textContent = fetcedFact;
        facts === null || facts === void 0 ? void 0 : facts.appendChild(fact);
    });
});
