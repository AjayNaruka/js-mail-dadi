prompt("Inserisci un qualunque carattare per iniziare il gioco")

var myNumber = Math.ceil(Math.random()*6);
var pcNumber = Math.ceil(Math.random()*6);

console.log("L'utente ha estratto il numero: "+myNumber);
console.log("Il PC ha estratto il numero: "+pcNumber);

//3 CASI
if(myNumber<pcNumber){
  console.log("Il PC ha vinto");
}else if(myNumber>pcNumber){
  console.log("L'utente ha vinto");
}else{
  console.log("Pareggio");
}