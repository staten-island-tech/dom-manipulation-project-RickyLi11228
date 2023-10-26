const DOMSelectors = {
    form: document.querySelector("#form"),
    h2s: document.querySelectorAll("h2"),
    h3s: document.querySelectorAll("h3"),
    button: document.getElementById("btn"),
    input: document.querySelector(`#input`),
    input2: document.querySelector(`#input2`),
    remove: document.querySelector(`#remove`),
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
        <h2 class="card-header" id="column">${input2}</h2>
        <h3 class="card-info" id="column">${input}</h3>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAOVBMVEX/3IezeRz/4Yy7hS341H+ucQyxdhjIlkC/ijL/4Ir20X3XqVW0ex3/3om3fiSvcw3/5pDiuGSsbgS5rKJeAAABJElEQVR4nO3cS1LDMBBAweB8IJCEkPsfNiuzwiVVtJgZ1H0CP5c3kkfa7QAAAAAAAAAAAAAAAAAAoOk6KPr5m66HQekTl9txyPcSXdCy7N/GKAynUKHCeAoVKoynUKHCeNMWnrpVLXzvdo4uaPm78HJfOqUP3CpM/+31U1ifwvoU1qewPoX1Kaxv2sL7uSH9r99fGyvgr5afMokv7mIc86/tVy/uRJ0U5qFQYX4KFeanUGF+ChXmN21ha/j5Ub3wcvhsyD/Bvtraiap/CmE17V6bwkIU1qewPoX1KaxPYX3TFnbPCOd/FRtr/I9u6RNHZ/XLnkbopzCcQoUK4ylUqDCeQoUK401QeHv887u+Rq+ki356AAAAAAAAAAAAAAAAAACAcU9O3yl3aqTFWQAAAABJRU5ErkJggg==" alt=""
        class="img">
    </div>
    <button type="submit" id="remove">Remove</button>`);
    DOMSelectors.input.value = "";
    DOMSelectors.input2.value = "";
});
DOMSelectors.delete.addEventListener("submit", function(){
    delete card
});
card