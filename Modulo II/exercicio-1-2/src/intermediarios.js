//INTERMEDIARIO INDEPENDIENTE
const validarSenha = (req, res, netx)=>{
    const { senha } = req.query;

    if(!senha){
        return res.send('A senha nao e informada')
    }
    if (senha !== 'carros123'){
        return res.send('A senha esta incorrecta')
    }

    netx();
}
 
module.exports = {
    validarSenha
}