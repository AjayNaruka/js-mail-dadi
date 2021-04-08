/* console.log("Test"); */
var emailList = ["ajay.naruka@gmail.com", "paolo.rustego@gmail.com", "fabio.rossi@gmail.com"];
var userMail = prompt("Inserisci la tua email:");
var flagFound = false;

//RICERCA 
for (var i=0; i<emailList.length;i++){
  var email = emailList[i];
  if(email === userMail){
    flagFound = true;
    break;
  }
}
if(flagFound){
  console.log("Email trovata");
  document.getElementById("enter").innerHTML = "<img class='notFound' src='enter.jpg' alt=''>"
}else{
  console.log("Email non trovata");
  document.getElementById("stop").innerHTML = "<img class='notFound' src='arnold.jpg' alt=''>"
};

