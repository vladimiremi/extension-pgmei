const insertion = document.querySelector("#emissaoDas div:nth-child(2) > .col-md-12");
let fieldsHTMLCollections = document.getElementsByClassName("total updatable");
let isTotalDisplayed = false;

const button = document.createElement("button");
button.innerHTML = "Calcular o total";
button.title = "Clique para calcular o valor total";

button.classList.add("customBTN");
if (fieldsHTMLCollections) {
  insertion.appendChild(button);
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  let fieldsHTMLCollections = document.getElementsByClassName("total updatable");
  let HTMLToArray = Array.from(fieldsHTMLCollections);
  let getValues = HTMLToArray.map((item) => {
    const value = item.firstChild.data.split(" ")[1];
    console.log(typeof value)
    if (typeof value === "string") {
      return Number(value.replace(",", "."));
    }
    return 0;
  });

  let total = getValues.reduce((atual, next) => {
    atual = atual + next;
    return atual;
  }, 0); //valor acumulado do reducer

  if (isTotalDisplayed) {
    button.innerHTML = "Calcular o total";
  } else {
    button.title = "Clique para esconder o valor total";
    button.innerHTML = total.toFixed(2)
  }
  isTotalDisplayed = !isTotalDisplayed;
});