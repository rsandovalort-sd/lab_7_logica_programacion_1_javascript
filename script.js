
function comparadorNumeros(n1, n2, n3){
    if (n1 === n2 && n1 === n3){
        return "Todos los números sin iguales";
    }else if (n1 >= n2 && n1 >= n3 ){
        if(n2 > n3){
            return `Mayor a menor: ${n1} ${n2} ${n3}
Menor a mayor ${n3}${n2}${n1}`
        }else{
            return `Mayor a mayor ${n1}${n3}${n2}
Menor a mayor Menor ${n2}${n3}${n1}`
        }

    }else if (n2 >= n1 && n2 >= n3 ){
        if(n1 > n3){
            return `Mayor a menor: ${n2} ${n1} ${n3}
Menor a mayor ${n3}${n1}${n2}`
        }else{
            return `Mayor a mayor ${n2}${n3}${n1}
Menor a mayor Menor ${n1}${n3}${n2}`
        }
    }else if (n3 >= n1 && n3 >= n2 ){
        if(n1 > n2){
            return `Mayor a menor: ${n3} ${n1} ${n2}
Menor a mayor ${n2}${n1}${n3}`
        }else{
            return `Mayor a mayor ${n3}${n2}${n1}
Menor a mayor Menor ${n1}${n2}${n3}`
        }
    }
} 


function mostrarAlerta(){
    const n1 = Number(document.getElementById("numero1").value);
    const n2 = Number(document.getElementById("numero2").value);
    const n3 = Number(document.getElementById("numero3").value);
    let resultado = comparadorNumeros(n1, n2, n3);
    alert(resultado)

}

