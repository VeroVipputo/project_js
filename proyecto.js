//--------------------------------------------------------------------------------
/* FUNCIONES */

let antiguedad = parseInt(prompt("Ingrese la cantidad de años de antiguedad en la Empresa"));

function diasVacaciones(){
    if(antiguedad <= 5){
        alert("Ud tiene 14 días de vacaciones")
    }else if(antiguedad > 5 && antiguedad <= 9){
        alert("Ud tiene 21 días de vacaciones")
    }else if(antiguedad >= 10 && antiguedad <= 19){
        alert("Ud tiene 28 días de vacaciones")
    }else{
        alert("Ud tiene 35 días de vacaciones")
    }
    return antiguedad;
}
diasVacaciones();

/* Cálculo sueldo Bruto de vacaciones*/

let sueldo = parseInt(prompt("Ingrese su sueldo bruto"));
function sueldoVacaciones(){ if (sueldo > 0 ){
        console.log("El sueldo Bruto de sus vacaciones es de: " + " " + sueldo / 25 * diasVacaciones()) 
    } else{
        sueldo = parseInt(prompt("Ingrese sueldo bruto mayor a 0"));
    }
    return sueldo;
}
sueldoVacaciones();

/* Cálculo Aguinaldo*/

//let sueldo = parseInt(prompt("Ingrese su sueldo bruto"));
function aguinaldo(){ if (sueldo > 0 ){
        alert("Su sueldo bruto de aguinaldo es de: " + " " + sueldo / 2 ) 
    }
}
aguinaldo();

//--------------------------------------------------------------------------------
/* OBJETOS */

let vacacionesNoGozadas = {
    tipo:        "No remunerativo"      ,
    baseCalculo: "mejor remuneracion del semestre",
    cantidad:    "segun antiguedad"     ,
    descuento:   false                  ,
}

let vacaciones = {
    tipo:        "remunerativo"         ,
    baseCalculo: "ultimaRemuneracion"   ,
    cantidad:    "segun antiguedad"     ,
    descuento:   true                   ,
}                            

let aguinaldo  = {
    tipo:        "remunerativo"         ,
    baseCalculo: "ultimaRemuneracion"   ,
    cantidad:    "segun antiguedad"     ,
    descuento:   true                   ,     
}

function baseDeCalculo(tipo, baseCalculo, cantidad, descuento) {
    this.tipo        = tipo;
    this.baseCalculo = baseCalculo;
    this.cantidad    = cantidad;
    this.descuento   = descuento;
} 
             
let horasExtras50 = {
    tipo:        "remunerativo"         ,
    baseCalculo: "sueldo basico"        ,
    cantidad:    1.5                    ,
    descuento:   true                   ,                  
}                                       

let horasExtras100 = {
    tipo:        "remunerativo"         ,
    baseCalculo: "sueldo basico"        ,
    cantidad:    2                      ,
    descuento:   true                   ,
}
//Ejemplo:

console.log(horasExtras50);
console.log("tipo", horasExtras50.tipo);
console.log("El calculo del aguinaldo es"+ " "+aguinaldo.tipo +" x "+ aguinaldo.baseCalculo );
