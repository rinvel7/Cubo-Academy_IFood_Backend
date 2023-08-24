//METODO E UNA FUNCAO DENTRO DE DA PROPIEDADE DE UN OBJETO
//UMA vez que as funcoes estejan dentro de  as propiedade de um objeto
// as variaveis tem  que ter a palavra this. ao inicio porque elas 
//pertencen a propiedade.


const pessoa1 = 
    {
        nome: 'Jose',
        idade: 30,
        altura: 1.73,
        profissao: 'professor',
        etariaDaPessoa : function () {
            if(this.idade < 21){
               return 'Jovem'
            }else if(this.idade < 66) {
               return 'adulto (a)'
            }else{
                return 'idoso (a)'
            }
        },
        apresentar: function (){
             const etaria = this.etariaDaPessoa(this.idade)
                console.log (`Ola!, meu nome e ${this.nome}, sou um(a) ${etaria}  de ${this.idade} anos, ${this.altura}m, e sou ${this.profissao},`)
        }
    }

pessoa1.apresentar()
