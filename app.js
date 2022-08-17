const button = document.getElementById("gomb");
var email1 = document.getElementById("inputEmail1");
var email2 = document.getElementById("inputEmail2");
var jelszo1 = document.getElementById("inputPassword1");
var jelszo2 = document.getElementById("inputPassword2");
button.disabled = true;
function katt(){
if (email1.value === email2.value && jelszo1.value === jelszo2.value && email1.value != "" && email2.value != "" && jelszo1.value != "" && jelszo2.value != ""){
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
    }else{
      emailid?.remove();
    }
}

function megjel(){
  if (jelszo1.value != jelszo2.value && jelszo1.value != "" && jelszo2.value != "") {
    document.getElementById("jelszoid").innerHTML = "A két jelszó nem egyezik.";
    }else{
      jelszoid?.remove();
    }
}