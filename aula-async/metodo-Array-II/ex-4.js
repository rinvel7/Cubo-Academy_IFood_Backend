//DE acordo com o array de professores abaixo, com suas respetivas stacks, faca o seguinte:

const professores = [
    {nome: 'Guido', stacks: 'backend'},
    {nome: 'Vidal', stacks: 'backend'},
    {nome: 'Dani', stacks: 'frontend'},
    {nome: 'Jess', stacks: 'frontend'},
    {nome: 'Leo', stacks: 'backend'},
    {nome: 'Ruli', stacks: 'frontend'},
]

// filtrar todos os professores de backend
//filtrar tosos os professores de frontend

/* const filtrarProfessores = (arrayDeProfessores) => {
  const professoresFront = arrayDeProfessores.filter((professor)=>{
        return professor.stacks === 'frontend'; 
    });
    const professoresBack = arrayDeProfessores.filter((professor)=>{
        return professor.stacks === 'backend'; 
    });
    console.log(professoresFront)
    console.log(professoresBack)
}

filtrarProfessores(professores) */

//RESOLUCAO DA PLATAFORMA
const professoresFront = professores.filter((professor)=>{
    return professor.stacks === 'frontend'; 
});
console.log(professoresFront)


const professoresBack = professores.filter((professor)=>{
    return professor.stacks === 'backend'; 
});
console.log(professoresBack)