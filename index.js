const DOMSelectors = {
    form: document.querySelector("#form"),
    h2s: document.querySelectorAll("h2"),
    h3s: document.querySelectorAll("h3"),
    button: document.getElementById("btn"),
    input: document.querySelector(`#input`),
    input2: document.querySelector(`#input2`),
    remove: document.querySelector(`#remove`),
    input3: document.querySelector(`#input3`)
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
    let input3 = DOMSelectors.input3.value;
    DOMSelectors.form.insertAdjacentHTML("beforeend",
    `<div class="column">
    <div class="card">
        <h2 class="card-header" id="column">${input2}</h2>
        <img src="${input3}" alt="" class="img">
        <h3 class="card-info" id="column">${input}</h3>
        <button type="submit" id="remove">Remove</button>
    </div>`);
    DOMSelectors.input.value = "";
    DOMSelectors.input2.value = "";
    DOMSelectors.input3.value = "";
});
function remove(){
let remove = document.querySelectorAll("remove");
remove.forEach((remove)=> remove.addEventListener('click', function(event){
    event.target.parentElement.remove();
})
);
}
remove();