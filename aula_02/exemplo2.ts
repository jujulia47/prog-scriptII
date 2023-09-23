namespace exemplo2 {
    let vetor: number[] = [1, 2, 3, 4, 5]; //varias colunas
    console.log(vetor);
    for (let i = 0; i < vetor.length; i++) {
        console.log(vetor [i]);        
    }
    // pop, push, shift, unshift
    let resultadoSoma: number[] = [];
    for (let i = 0; i < vetor.length; i ++){
        if(i == vetor.length - 1){
            resultadoSoma.push(Soma(vetor[i], vetor[0]));
        } else{
            resultadoSoma.push(Soma(vetor[i], vetor[i+1]));
        }        
    }
    console.log(resultadoSoma);
}

function Soma(a: number, b: number){
    let result: number = a + b
    return result
} 

//desafio vetor novo, resultado soma, 1° com o 2° - ultimo com o primeiro (função para fazer a chamada)

/*let vetor: number[] = [1, 2, 3, 4, 5]; //varias colunas
    console.log(vetor);
    for (let i = 0; i < vetor.length; i++) {
        console.log(vetor [i]);        
    }

function resultadosoma(vetor: number[]): number[] {
    let resultado: number[] = [];

    for (let i = 0; i < vetor.length - 1; i++) {
        resultado.push(soma(vetor[i], vetor[i + 1]));
    }

    resultado.push(soma(vetor[vetor.length - 1], vetor[0])); // Soma último com o primeiro

    return resultado;
}



let resultado: number[] = resultadosoma(vetor);
console.log(resultado);*/

