const header = document.querySelector(".form-inline");
let fildsHTMLColetions = document.getElementsByClassName("total updatable");

const button = document.createElement("button");
button.innerHTML = "Calcular o total"; //coloca o contente no html
button.classList.add("calcula"); //coloca uma class
if (fildsHTMLColetions.length > 0) {
  header.appendChild(button);
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  let fildsHTMLColetions = document.getElementsByClassName("total updatable");

  let HTMLToArray = Array.from(fildsHTMLColetions);

  let getValues = HTMLToArray.map((item) => {
    const value = item.firstChild.data.split(" ")[1];

    if (typeof value === "string") {
      return Number(value.replace(",", "."));
    }

    return 0;
  });

  console.log("aqui", getValues);

  let total = getValues.reduce((atual, next) => {
    console.log({ atual, next });
    atual = atual + next;
    return atual;
  }, 0);

  button.innerHTML = total.toFixed(2);
  console.log(total.toFixed(2));
});
