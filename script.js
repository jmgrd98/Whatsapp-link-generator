function generate() {

    let number = document.getElementById("number").value;
    let msg = encodeURIComponent(document.getElementById("msg").value);
    let link = `https://wa.me/${number}/?text=${msg}`;
    let generateBtn = document.getElementById('generateBtn')
    let result = document.getElementById('result');
    let copyBtn = document.getElementById('copyBtn')
    result.style.visibility = 'visible';
    result.innerHTML = link;
    generateBtn.innerText = "Prontinho! ;)"
    copyBtn.style.visibility = 'visible';
    //document.querySelector("form").appendChild(result);
}