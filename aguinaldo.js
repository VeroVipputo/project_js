




/*Cálculo Aguinaldo*/
let trabajados = document.getElementById("trabajados").value;
let sac = document.getElementById("sac").value;
let antiguedad  = document.getElementById("antiguedad").value;
let calculo;
const Aguinaldo = () => {  
 
    calculo = sac / 12 * trabajados ;
    let container2 = document.querySelector("#sac2");
    console.log(`monto a pagar en aguinaldo $ ` + calculo);
    container2.outerHTML = ` SU CORRESPONDIENTE MEDIO AGUINALDO ES DE $ (${calculo}) `;
    return calculo
};


<div class="d-grid gap-2 col-4 mx-auto">
    <button class="btn btn-primary" type="button" id="mostrar" onclick="">Ver Resultados en el recibo</button>
</div><div class="recibosueldofull">

        <div class="paydetail">Recibo de Sueldo</div>
        <section id="recibofinal" class="grilla">

            <div class="header">Conceptos</div>
            <div class="header">Unidad</div>
            <div class="header">Base</div>
            <div class="header">Remunerativo</div>
            <div class="header">No remunerativo</div>
            <div class="header">Descuento</div>
        </section>
        <section id="conceptos">
            <div class="concepto" id="linea1">Basico
                <div id="r_1_1"></div>
                <div id="r_1_2"></div>
                <div id="r_1_3" class="linea1_3"></div>
                <div id="r_1_4"></div>
                <div id="r_1_5"></div>
            </div>
            <div class="concepto" id="linea2">Antiguedad
                <div id="r_2_1"></div>
                <div id="r_2_2"></div>
                <div id="r_2_3"></div>
                <div id="r_2_4"></div>
                <div id="r_2_5"></div>
            </div>
            <div class="concepto" id="linea3">Extras al 50 %
                <div id="r_3_1"></div>
                <div id="r_3_2"></div>
                <div id="r_3_3"></div>
                <div id="r_3_4"></div>
                <div id="r_3_5"></div>
            </div>
            <div class="concepto" id="linea4">Extras al 100 %
                <div id="r_4_1"></div>
                <div id="r_4_2"></div>
                <div id="r_4_3"></div>
                <div id="r_4_4"></div>
                <div id="r_4_5"></div>
            </div>
            <div class="concepto" id="linea5">Sac</div>
            <div class="concepto" id="linea6">Plus vacacional</div>
            <div class="concepto" id="linea7">Jubilación
                <div id="r_7_1"></div>
                <div id="r_7_2"></div>
                <div id="r_7_3"></div>
                <div id="r_7_4"></div>
                <div id="r_7_5"></div>
            </div>
            <div class="concepto" id="linea8">Ley 19032
                <div id="r_8_1"></div>
                <div id="r_8_2"></div>
                <div id="r_8_3"></div>
                <div id="r_8_4"></div>
                <div id="r_8_5"></div>
            </div>
            <div class="concepto" id="linea9">Obra Social
                <div id="r_9_1"></div>
                <div id="r_9_2"></div>
                <div id="r_9_3"></div>
                <div id="r_9_4"></div>
                <div id="r_9_5"></div>
            </div>
            <div class="concepto" id="linea10">Aporte Sindical
                <div id="r_10_1"></div>
                <div id="r_10_2"></div>
                <div id="r_10_3"></div>
                <div id="r_10_4"></div>
                <div id="r_10_5"></div>
            </div>
            <div class="concepto" id="linea11"></div>

        </section>
        <section class="sub">
            <div class="header">Subtotales


            </div>
            <div id="sub_1"></div>
            <div id="sub_2"></div>
            <div id="sub_3"></div>
        </section>
        <section class="neto">
            <div class="fot">Neto $</div>
        </section>
    </div>












































