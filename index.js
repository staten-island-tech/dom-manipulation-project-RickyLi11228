const DOMSelectors = {
    form: document.querySelector("#form"),
    h2s: document.querySelectorAll("h2"),
    h3s: document.querySelectorAll("h3"),
    button: document.getElementById("btn"),
    input: document.querySelector(`#input`),
    input2: document.querySelector(`#input2`),
    delete: document.querySelector(`#delete`)
};

DOMSelectors.form.addEventListener("submit", function(event){
   event.preventDefault();
   console.log(DOMSelectors.CardName.value);
   DOMSelectors.h2s.forEach(
    (el)=> el.textContent = (DOMSelectors.CardName.value),
   )});
const card = DOMSelectors.button.addEventListener("click", function(){
    let input= DOMSelectors.input.value;
    let input2= DOMSelectors.input2.value;
    DOMSelectors.form.insertAdjacentHTML("beforeend",
    `<div class="gallery">
    <div class="card">
        <h2 class="card-header" id="column">${input}</h2>
        <h3 class="card-info" id="column">${input2}</h3>
    </div>
    <button type="submit" id="delete">Delete</button>`);
    DOMSelectors.input.value = "";
    DOMSelectors.input2.value = "";
});
DOMSelectors.delete.addEventListener("submit", function(){
    card.remove(0);
});
card