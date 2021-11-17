
 mostrarConceptos(); 

function mostrarConceptos() {
        conceptos = [];

        conceptos = [
                sueldo = class Sueldo {
                        constructor(id, tipo, baseCalculo, cantidad, descuento) {
                                this.id = id;
                                this.tipo = tipo;
                                this.baseCalculo = baseCalculo;
                                this.cantidad = cantidad;
                                this.descuento = descuento;

                        }
                },
                vacacionesNoGozadas = {
                        id: 5,
                        tipo: "No remunerativo",
                        baseCalculo: "mejor remuneracion del semestre",
                        cantidad: "segun antiguedad",
                        descuento: false,
                },

                vacaciones = {
                        id: 4,
                        tipo: "remunerativo",
                        baseCalculo: "ultimaRemuneracion",
                        cantidad: "segun antiguedad",
                        descuento: true,
                },

                complementario = {
                        id: 3,
                        tipo: "remunerativo",
                        baseCalculo: "ultimaRemuneracion",
                        cantidad: "segun antiguedad",
                        descuento: true,
                },

                horasExtras50 = {
                        id: 2,
                        tipo: "remunerativo",
                        baseCalculo: "sueldo basico",
                        cantidad: 1.5,
                        descuento: true,
                },

                horasExtras100 = {
                        id: 1,
                        tipo: "remunerativo",
                        baseCalculo: "sueldo basico",
                        cantidad: 2,
                        descuento: true
                }
        ];
        //Ejemplo:
        console.log(horasExtras50);
        console.log("tipo", horasExtras50.tipo);

        console.log("El calculo del aguinaldo es" + " " + complementario.tipo + " x " + complementario.baseCalculo);
        /*Creacion de Array conteniendo una coleccion de Objetos utiles en el proyecto.
       Estos conforman los conceptos. Objetos fundamentales para la realizacion de calculos del proyecto.*/
        console.log(conceptos);
        console.table(conceptos);

        //propiedad lenght aplicado al array
        console.log(conceptos.length + "_ es la cantidad de objetos del Array");
        //Metodo para ordenar un array.
        conceptos.sort(function (a, b) {
                if (a.id > b.id) {
                        return 1;
                }
                if (a.id < b.id) {
                        return -1;
                }
                // a es igual a  b
                return 0;
        });
        console.log(conceptos);
}

