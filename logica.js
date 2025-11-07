import promptSync from 'prompt-sync';

const prompt = promptSync();

let num_1 = Number(prompt("Ingrese el primer numero: "));
let num_2 = Number(prompt("Ingrese el segundo numero: "));
let num_3 = Number(prompt("Ingrese el tercer numero: "));

function mayorMenor(num_1, num_2, num_3){
    if (num_1 >= num_2 && num_1 >= num_3){
        if (num_2 > num_3){
            return `De mayor a menor: ${num_1} ${num_2} ${num_3}
De menor a mayor: ${num_3} ${num_2} ${num_1}` ;
        }else if (num_3 > num_2){
            return `De mayor a menor: ${num_1} ${num_3} ${num_2}
De menor a mayor: ${num_2} ${num_3} ${num_1}`;
        }else{
            return "Todos los números son iguales"
        }
    }else if (num_2 >= num_1 && num_2 >= num_3 ){
        if (num_1 > num_3){
            return `De mayor a menor: ${num_2} ${num_1} ${num_3}
De menor a mayor: ${num_3} ${num_1} ${num_2}` ;
        }else if(num_3 > num_1){
            return `De mayor a menor: ${num_2} ${num_3} ${num_1}
De menor a mayor: ${num_1} ${num_3} ${num_2}` ;
        }else{
            return "Todos los números son iguales"
        }
    }else if (num_3 >= num_1 && num_3 >= num_2 ){
        if (num_1 > num_2){
        return `De mayor a menor: ${num_3} ${num_1} ${num_2}
De menor a mayor: ${num_2} ${num_1} ${num_3}` ;
        }else if(num_2 > num_1){
            return `De mayor a menor: ${num_3} ${num_2} ${num_1}
De menor a mayor: ${num_1} ${num_2} ${num_3}` ;
        }else{
            return "Todos los números son iguales"
        }   
    }
}      

let resultado = mayorMenor(num_1, num_2, num_3);
console.log(resultado);
