// Declarando as variáveis

const number = document.getElementById("number").value;
const msg = encodeURIComponent(document.getElementById("msg").value);
const generateBtn = document.getElementByTagName("button");



function generate() {
    let link = "https://wa.me/"+number+"/?text="+msg;
    let result = document.createElement("input");
    result.value = link;
    document.querySelector("form").appendChild(result);
}