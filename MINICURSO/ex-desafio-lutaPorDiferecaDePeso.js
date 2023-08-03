   
   let pesos = [50, 58]
   
    let lutadorA = pesos[0];
    let lutadorB = pesos[1];
    let diferencaPeso = lutadorA - lutadorB;
    if (diferencaPeso <= 5 && diferencaPeso >= -5) {
    console.log("PODEM LUTAR");
    } else {
    console.log("NAO PODEM LUTAR")
    }