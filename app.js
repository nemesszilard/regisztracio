const button = document.getElementById("gomb");
button.disabled = true;
var email1 = document.getElementById("inputEmail1");
var email2 = document.getElementById("inputEmail2");
var jelszo1 = document.getElementById("inputPassword1");
var jelszo2 = document.getElementById("inputPassword2");
function ell(){
    if (email1.value === email2.value && jelszo1.value === jelszo2.value){
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}