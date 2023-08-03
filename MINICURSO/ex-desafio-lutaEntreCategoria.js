  peso1 = 60;
  peso2 = 65;
  
  
   if ((peso1 < 55 && peso2 < 55) || 
    (peso1 >= 55 && peso1 < 65 && peso2 >= 55 && peso2 < 65) || 
    (peso1 >= 65 && peso1 < 75 && peso2 >= 65 && peso2 < 75) || 
    (peso1 >= 75 && peso1 < 85 && peso2 >= 75 && peso2 < 85) || 
    (peso1 >= 85 && peso2 >= 85)) {
    console.log("PODEM LUTAR")
    }else{
    console.log("NAO PODEM LUTAR")
    }