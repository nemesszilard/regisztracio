//válozók
const button = document.getElementById("gomb");
const email1 = document.getElementById("inputEmail1");
const email2 = document.getElementById("inputEmail2");
const jelszo1 = document.getElementById("inputPassword1");
const jelszo2 = document.getElementById("inputPassword2");
let gomb;

button.disabled = true;
function katt(){
if (inputEmail1.value.match(regx) && pass.value.match(/[a-z]*[0-9]*[A-Z]*[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/) && email1.value === email2.value && jelszo1.value === jelszo2.value && email1.value != "" && email2.value != "" && jelszo1.value != "" && jelszo2.value != ""){
    button.disabled = false;
    }
  }
function email(inputEmail1){
  var regx =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputEmail1.value.match(regx)){
    emailvalide?.remove();
  }else{
    document.getElementById("emailvalide").innerHTML = "Ez nem email cím.";
   }
}
function emailell(){
  if (email1.value != email2.value && email1.value != "" && email2.value != "") {
    document.getElementById("emailid").innerHTML = "Email nem egyezik.";
    console.log(email1.value);
    }else{
      emailid?.remove();
    }
}
function jel(){
  var pass = document.getElementById("inputPassword1");
  if(pass.value.match(/[a-z]*[0-9]*[A-Z]*[!\@\#\$\%\^\&\*\(\)\_\-\+\=\?\>\<\.\,]/g)) {
    jelszotart?.remove();
  }else{
    document.getElementById("jelszotart").innerHTML = "A jelszónak tartalmaznia kell kisbetűt, számot nagybetűt és különlegeskaraktert.";}
}
function megjel(){
  if (jelszo1.value != jelszo2.value && jelszo1.value != "" && jelszo2.value != "") {
    document.getElementById("jelszoid").innerHTML = "A két jelszó nem egyezik.";
    }else{
      jelszoid?.remove();
    }
}