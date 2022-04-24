

let displayinput = document.querySelector("input");
let buttons = document.querySelectorAll("button");
buttons.forEach(function (ele) {
  ele.onclick = function () {
      displayinput.value = displayinput.value.concat(ele.value)
  };
});
document.querySelector(".equal").onclick = function () {
    try { displayinput.value = eval(displayinput.value); }
    catch {
        displayinput.value = "";
        displayinput.placeholder="ERROR!"

    }
}
document.querySelector(".clear").onclick = function(){
    displayinput.value = "";
}