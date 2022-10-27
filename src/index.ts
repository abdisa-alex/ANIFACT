const fact = document.querySelector(".fact")! as HTMLParagraphElement;
const btn = document.querySelector(".gen-btn")!;
const facts = document.querySelector(".facts")! as HTMLDivElement;

btn.addEventListener("click",() => {
    axios.get("https://se-animal-facts.herokuapp.com").then((res) => {
        let fetcedFact = res.data.data;
        fact.textContent = fetcedFact;
        facts?.appendChild(fact);
      });
})