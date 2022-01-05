
$(() => {
    console.log('El DOM está listo');
});

let listaUsuarios = [];

   let antiguedad = document.getElementById("antiguedad").value;
    salario = document.getElementById("salario").value;
   
    let container;
    let resultado;
    
function diasVacaciones() {
    let container = document.querySelector("#dias");
    
    if ( antiguedad <= 5) {
        console.log("usted tiene 14 dias de vacaciones");
        resultado = salario / 25 * 14;
        container.outerHTML = ` ( USTED TIENE 14 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 14}) `;
        
    } else if (antiguedad >= 6 & antiguedad <= 10) {
        resultado = salario / 25 * 21;
        container.outerHTML = ` ( USTED TIENE 21 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 21}) `;
        console.log("Ud tiene 21 días de vacaciones" + `monto a cobrar de plus vacacional es de $` + resultado);
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
    console.log(`monto a pagar en aguinaldo $ ` + calculo);
    container2.outerHTML = ` SU CORRESPONDIENTE MEDIO AGUINALDO ES DE $ (${calculo}) `;
    return calculo
};

let fiftyex = document.getElementById("fiftyex").value;

let boton50 = document.getElementById("boton50");
boton50.addEventListener("click", extrasFifth);
let topay;
function extrasFifth() {
     topay = salario / 200 * fiftyex * 1.5;
     let container3 = document.querySelector("#totalex");
     console.log(`monto a pagar en horas extras $ `+ topay);
     container3.outerHTML = `  EL MONTO A COBRAR DE HORAS EXTRAS ES DE $ ${topay} `;
    return topay;
}

let hundredex = document.getElementById("hundredex").value;

let boton100 = document.getElementById("boton100");
boton100.addEventListener("click", extrasHundred);
let payto;
function extrasHundred() {
     payto = salario / 200 * hundredex * 2;
     let container4 = document.querySelector("#totalex2");
     console.log(`monto a pagar en horas extras $ `+ payto);
     container4.outerHTML = `  EL MONTO A COBRAR DE HORAS EXTRAS ES DE $ ${payto} `;
    return payto;
}
 
$("#mostrar").click(function(){
    
    $("#recibofinal").hide();
    $("#conceptos").hide();

    $("#recibofinal").fadeToggle(2000);
    $("#conceptos").toggle(2000);

    let muestrasueldo = document.querySelector("#r_1_3")
    muestrasueldo.textContent= `$ ${salario}`;
    let muestraAntiguedad = document.querySelector("#r_2_1")
    muestraAntiguedad.textContent= `${antiguedad}`+`  `+`años`;
    let jubilacion =document.querySelector("#r_7_5");
    jubilacion.textContent= `$ ${salario*(0.11)}`;
    let ley19032= document.querySelector("#r_8_5");
    ley19032.textContent= `$ ${salario*(0.03)}`;
    let obraSocial= document.querySelector("#r_9_5");
    obraSocial.textContent=`$ ${salario*(0.03)}`;
    let aporteSindical= document.querySelector("#r_10_5");
    aporteSindical.textContent=`$ ${salario*(0.02)}`;
    let extrasFifth = document.getElementById("r_3_4");
    extrasFifth.textContent = `$ ${salario / 200 * fiftyex * 1.5}`;
    let payto = document.getElementById("r_4_4");
    payto.textContent = `$ ${salario / 200 * hundredex * 2}`;
   // let descuentos = document.querySelector("#sub_2");
    //descuentos.textContent = `$ ${jubilacion - ley19032 - obraSocial - aporteSindical}`;

    });