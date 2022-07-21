let generateBtn = document.getElementById('generateBtn')

function generate() {

    let number = document.getElementById("number").value;
    let msg = encodeURIComponent(document.getElementById("msg").value);
    let link = `https://wa.me/${number}/?text=${msg}`;
    let result = document.createElement("input");
    result.value = link;
    result.className = "whatsapp"
    document.querySelector("form").appendChild(result);
    console.log(number.value, msg.value)
}

generateBtn.addEventListener("click", e => {
    e.preventDefault();
})