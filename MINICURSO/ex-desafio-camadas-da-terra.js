<//TROPOSFERA 20km < 50km
//ESTRATOSFERA 50km < 80km
//MESOSFERA 80km < 450km
//TERMOSFERA 450km < 900km
//EXOSFERA 900km

let altitude = 51;

if(altitude <= 20) {
  console.log("TROPOSFERA")
  
}else if(altitude <= 50){
  console.log("ESTRATOSFERA")
  
}else if(altitude <= 80){
  console.log("MESOSFERA")
  
}else if(altitude <= 450){
  console.log("TERMOSFERA")
  
}else{
  console.log("EXOSFERA")
}


