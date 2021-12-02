
   let antiguedad = document.getElementById("antiguedad").value;
   let salario = document.getElementById("salario").value;
    let container;
    let resultado;
    
const diasVacaciones = () => {
    let container = document.querySelector("#dias");
    if (antiguedad <= 5) {
       
        console.log("usted tiene 14 dias de vacaciones");
        resultado = salario / 25 * 14;
        container.outerHTML = ` ( USTED TIENE 14 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 14}) ` ;
       
    } else if (antiguedad >=6 & antiguedad <= 10) {
        console.log("Ud tiene 21 días de vacaciones");
        resultado = salario / 25 * 21;
        container.outerHTML = ` ( USTED TIENE 21 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 21}) ` ;
    } else if (antiguedad >= 11 & antiguedad <= 28) {
        console.log("Ud tiene 28 días de vacaciones");
        resultado = salario / 25 * 28;
        container.outerHTML = ` ( USTED TIENE 28 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 28}) ` ;
    } else {
        console.log("usted tiene 35 dias de vacaciones");
        resultado = salario / 25 * 35;
        container.outerHTML = ` ( USTED TIENE 35 DIAS DE VACACIONES ) y el Plus vacacional es de $ (${salario / 25 * 35}) ` ;
    };
    return antiguedad   

};
/*plusVacacional();
//Calculo de plus vacacional
/* Para calcularlo, se debe dividir el sueldo mensual por 25. Luego, el resultado,
 se debe multiplicar por los días que corresponden de vacaciones.
    let salario = document.getElementById(parseFloat("salario"));
    let dias = document.getElementById("dias");
const plusVacacional = () =>{
  
    salario = salario / 25 * dias;
    return salario

} ;


document.body.onload = addElement;

function addElement () {
  // crea un nuevo div
  // y añade contenido
  var newDiv = document.getElementById("dias");
  var newContent = document.createTextNode("Tienes"+ dias);
  newDiv.appendChild(newContent); //añade texto al div creado.

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("dias");
  //document.body.addElement(newDiv, currentDiv).innerHtml;
};


/*

/* Cálculo Aguinaldo
salario.addEventListener("click", Aguinaldo())
function Aguinaldo (){
   
    console.log("Respuesta evento");
    
    
    return salario 
      } ;
Aguinaldo()
      
; 
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

let sac  = {
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
}
//Ejemplo:

//console.log(horasExtras50);
//console.log("tipo", horasExtras50.tipo);
//console.log("El calculo del medio aguinaldo es"+ " "+ sac.tipo +" mensual del "+ sac.baseCalculo + " dividido 2");

