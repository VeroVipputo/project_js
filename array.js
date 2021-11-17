
 mostrarConceptos(); 

function mostrarConceptos() {
        conceptos = [];

        conceptos = [
                sueldo = {
                        
                        id : 0,
                        tipo : "remunerativo",
                        baseCalculo: "basico",
                        cantidad: "dias trabajados",
                        descuento: true

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

        //propiedad lenght aplicado al array
        console.log(conceptos.length + "_ es la cantidad de objetos del Array");
        //Metodo para ordenar un array.
        //Los objetos fueron declarados desordenados por id intencionalmente para luego ordenarlos
        /*Observar que los objetos fueron ordenados por id* con el metodo sort*/

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

