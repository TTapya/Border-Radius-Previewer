const box = document.querySelector(".box")
const inputTopLeft = document.querySelector("#inputTopLeft");
const inputTopRight = document.querySelector("#inputTopRight");
const inputBottomLeft = document.querySelector("#inputBottomLeft");
const inputBottomRight = document.querySelector("#inputBottomRight");

inputTopLeft.value = ""
inputTopRight.value = ""
inputBottomLeft.value = ""
inputBottomRight.value = ""

inputTopLeft.addEventListener("input", function (details) {
  box.style.borderTopLeftRadius = `${details.target.value}px`;
});

inputTopRight.addEventListener("input", function (details) {
  box.style.borderTopRightRadius = `${details.target.value}px`;
});

inputBottomLeft.addEventListener("input", function (details) {
  box.style.borderBottomLeftRadius = `${details.target.value}px`;
});

inputBottomRight.addEventListener("input", function (details) {
  box.style.borderBottomRightRadius = `${details.target.value}px`;
});

function copy() {
    let copyText = `${inputTopLeft.value}px ${inputTopRight.value}px ${inputBottomRight.value}px ${inputBottomLeft.value}px`;
    navigator.clipboard.writeText(copyText)
    alert("Copied the styles: " + copyText)
}