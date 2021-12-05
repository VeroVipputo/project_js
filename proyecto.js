
   let antiguedad = document.getElementById("antiguedad").value;
   let salario = document.getElementById("salario").value;
    let container;
    let resultado;
    
function diasVacaciones() {
    let container = document.querySelector("#dias");
    if ( antiguedad <= 5) {
        console.log("usted tiene 14 dias de vacaciones");
        resultado = salario / 25 * 14;
        container.outerHTML = ` ( USTED TIENE 14 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 14}) `;

    } else if (antiguedad >= 6 & antiguedad <= 10) {
        console.log("Ud tiene 21 días de vacaciones");
        resultado = salario / 25 * 21;
        container.outerHTML = ` ( USTED TIENE 21 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 21}) `;
    } else if (antiguedad >= 11 & antiguedad <= 28) {
        console.log("Ud tiene 28 días de vacaciones");
        resultado = salario / 25 * 28;
        container.outerHTML = ` ( USTED TIENE 28 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 28}) `;
    } else {
        console.log("usted tiene 35 dias de vacaciones");
        resultado = salario / 25 * 35;
        container.outerHTML = ` ( USTED TIENE 35 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 35}) `;
    };
    return antiguedad & resultado
}


/* Cálculo Aguinaldo*/
let trabajados = document.getElementById("trabajados").value;
let sac = document.getElementById("sac").value;
 
let calculo;
const Aguinaldo = () => {  
 
    calculo = sac / 12 * trabajados ;
    let container2 = document.querySelector("#sac2");
    console.log("Respuesta evento Aguinaldo");
    console.log(calculo);
    container2.outerHTML = ` SU CORRESPONDIENTE MEDIO AGUINALDO ES DE $ (${calculo}) `;
    return calculo
};

let fiftyex = document.getElementById("fiftyex").value;
window.addEventListener("keydown", function(e){
    console.log(e.key);
})
let boton50 = document.getElementById("boton50");
boton50.addEventListener("click", extrasFifth);
let topay;
function extrasFifth() {
     topay = salario / 200 * fiftyex * 1.5;
     let container3 = document.querySelector("#totalex");
     console.log(topay);
     container3.outerHTML = `  EL MONTO A COBRAR DE HORAS EXTRAS ES DE $ ${topay} `;
    return topay;
}



//--------------------------------------------------------------------------------
/* OBJETOS */

let vacacionesNoGozadas = {
    tipo:        "No remunerativo"      ,
    baseCalculo: "mejor remuneracion del semestre",
    cantidad:    "segun antiguedad"     ,
    descuento:   false                  
}

let vacaciones = {
    tipo:        "remunerativo"         ,
    baseCalculo: "ultimaRemuneracion"   ,
    cantidad:    "segun antiguedad"     ,
    descuento:   true                   
}                            

let tac  = {
    tipo:        "mejor remuneracion"   ,
    baseCalculo: "ultimo semestre"   ,
    cantidad:    "segun antiguedad"     ,
    descuento:   true                      
}

             
let horasExtras50 = {
    tipo:        "remunerativo"         ,
    baseCalculo: "sueldo basico"        ,
    cantidad:    1.5                    ,
    descuento:   true                                    
}                                       

let horasExtras100 = {
    tipo:        "remunerativo"         ,
    baseCalculo: "sueldo basico"        ,
    cantidad:    2                      ,
    descuento:   true                   
};
/*window.addEventListener("keydown", function(e){
    console.log(e.key);})*/