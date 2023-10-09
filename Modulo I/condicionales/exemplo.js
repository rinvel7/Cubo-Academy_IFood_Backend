const temIngresso = false;
const censura = 16;
const idade = 18;

// ter ingreso e ter idade maior ou igual censura
 
if (temIngresso === true) {
    if (idade >= censura) {
        console.log("pode entrar");
    } else {
        console.log("Barrada pela censura");
    }
}else {
    console.log("Barrada por falta de ingreso");
}