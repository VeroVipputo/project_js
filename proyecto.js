
    $(() => {
    console.log('El DOM está listo');
});

if(typeof(Storage)!== 'undefined'){
    console.log("local storage compatible");
}else{
    console.log("incompatible con local storage");
    };


let antiguedad  = document.getElementById("antiguedad").value;
let     salarios = document.getElementById("salario").value;
let     muestrames    = document.getElementById("mes").value;
let     usuarios    = document.getElementById("usuario").value;
let   dni = document.getElementById("id").value;
let imputmes = document.getElementById("month");
imputmes.textContent= `${muestrames}`;
let logueado = document.getElementById("datos");
logueado.textContent= ` ${usuarios}, Sus resultados puede verlos calculados en el recibo de Sueldo a continuación. `;



let resultado;
let nombreUsuario = [];
let container = document.querySelector("#dias");
       

function diasVacaciones() {
   
    
    if ( antiguedad <= 5) {
        console.log("usted tiene 14 dias de vacaciones");
        resultado = salarios / 25 * 14;
        container.textContent = ` ( USTED TIENE 14 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salarios / 25 * 14}) `;
        
    } else if (antiguedad >= 6 & antiguedad <= 10) {
        resultado = salarios / 25 * 21;
        container.textContent = ` ( USTED TIENE 21 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salarios / 25 * 21}) `;
        console.log("Ud tiene 21 días de vacaciones" + ` y el monto a cobrar de plus vacacional es de $` + resultado);
    } else if (antiguedad >= 11 & antiguedad <= 28) {
        console.log("Ud tiene 28 días de vacaciones");
        resultado = salarios / 25 * 28;
        container.outerHTML = ` ( USTED TIENE 28 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salarios / 25 * 28}) `;
    } else {
        console.log("usted tiene 35 dias de vacaciones");
        resultado = salarios / 25 * 35;
        container.textContent = ` ( USTED TIENE 35 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salarios / 25 * 35}) `;
    };
    return antiguedad & resultado
}



let fiftyex = document.getElementById("fiftyex").value;

let boton50 = document.getElementById("boton50");
boton50.addEventListener("click", extrasFifth);
let topay;
function extrasFifth() {
     topay = salarios / 200 * fiftyex * 1.5;
     let container3 = document.querySelector("#totalex");
     console.log(`monto a pagar en horas extras $ `+ topay);
     container3.textContent = `  EL MONTO A COBRAR DE HORAS EXTRAS ES DE $ ${topay} `;
    return topay;
}

let hundredex = document.getElementById("hundredex").value;

let boton100 = document.getElementById("boton100");
boton100.addEventListener("click", extrasHundred);
let payto;
function extrasHundred() {
    
     payto = salarios / 200 * hundredex * 2;
     let container4 = document.querySelector("#totalex2");
     console.log(`monto a pagar en horas extras $ `+ payto);
     container4.textContent = `  EL MONTO A COBRAR DE HORAS EXTRAS ES DE $ ${payto} `;
     
    return payto;
}

$("#mostrar").click(function(){
    

    $("#recibofinal").hide();
    $("#conceptos").hide();
    $("#displaymonth").hide();
    $("#displayname").hide();
  
    $("#recibofinal").fadeToggle(2000);
    $("#conceptos").toggle(2000);
    $("#displaymonth").toggle(2000);
    $("#displayname").toggle(2000);

    let mes = document.querySelector("#displaymonth")
    mes.textContent= `Mes de pago: ${muestrames}`;
    let persona = document.querySelector("#displayname")
    persona.textContent= ` ${usuarios}`;
    let muestrasueldo = document.querySelector("#r_1_3")
    muestrasueldo.textContent= `$ ${salarios}`;
    let muestraAntiguedad = document.querySelector("#r_2_1");
    muestraAntiguedad.textContent= `${antiguedad}`+`  `+`años`;
  
    let jubilacion =document.querySelector("#r_7_5");
    jubilacion.textContent= `$ ${salarios*(0.11)}`;
    let ley19032= document.querySelector("#r_8_5");
    ley19032.textContent= `$ ${salarios*(0.03)}`;
    let obraSocial= document.querySelector("#r_9_5");
    obraSocial.textContent=`$ ${salarios*(0.03)}`;
    let aporteSindical= document.querySelector("#r_10_5");
    aporteSindical.textContent=`$ ${salarios*(0.02)}`;
    let extrasFifth = document.getElementById("r_3_4");
    extrasFifth.textContent = `$ ${salarios / 200 * fiftyex * 1.5}`;
    let payto = document.getElementById("r_4_4");
    payto.textContent = `$ ${salarios / 200 * hundredex * 2}`;
    let descuentos = document.querySelector("#sub_2");
    descuentos.textContent = `Descuentos $ ${salarios*(0.11)+salarios*(0.03)+salarios*(0.03)+salarios*(0.02) }`;
    let bruto = document.querySelector("#sub_1");
    bruto.textContent = `Bruto $ ${salarios/ 200 * fiftyex * (1.5) + salarios / 200 * hundredex * (2) + (+salarios) }`;
    let bruto2 = `${salarios/ 200 * fiftyex * (1.5) + salarios / 200 * hundredex * (2) + (+salarios)}`;
    let descuentos2 = `${salarios*(0.11)+salarios*(0.03)+salarios*(0.03)+salarios*(0.02)}`;
    let neto = document.querySelector("#neto");
    neto.textContent  = `NETO $ ${bruto2 - (descuentos2)}`;
});
