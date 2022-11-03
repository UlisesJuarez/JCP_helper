/* <input type="hidden" value="{{datosGrupo}}" id="datosDeLosGrupos">
<input type="hidden" value="{{datosGlobalesAlumnos}}" id="datosGlobalesAlumnosDentroGrupo">
<input type="hidden" value="{{datosCuestionariosProfe}}" id="datosCuestionariosGeneralesCuestionarios">
<input type="hidden" value="{{datosCuestionariosTerminados}}" id="cuestionariosTerminados"></input> */

////////////////////////////////////////////////////////
//CÁLCULOS//////////////////////////////////////////////
////////////////////////////////////////////////////////
//Accedemos a la data como string
let datosCuestionariosTerminados = document.getElementById('cuestionariosTerminados').value;
datosCuestionariosTerminados = limpiarDatos(datosCuestionariosTerminados);
console.log('Cuestionarios terminados = ', datosCuestionariosTerminados);

////////////////////////////////////////////////////////
//Accedemos a los Promedios de los cuestionarios
let promediosCuestionariosHechos = datosCuestionariosTerminados.map((element) => {
    return parseFloat(element[6]);
});
console.log('Promedios de los cuestionarios hechos = ', promediosCuestionariosHechos)

////////////////////////////////////////////////////////
//Accedemos a los IDS de los cuestionarios
let idsCuestionariosHechos = datosCuestionariosTerminados.map((element) => {
    return element[1];
});
console.log('Ids de los cuestionarios hechos = ', idsCuestionariosHechos)

////////////////////////////////////////////////////////
//Accedemos a los nombres de los grupos del docente
let datosCuestionariosProfe = document.getElementById('datosCuestionariosGeneralesCuestionarios').value;
datosCuestionariosProfe = limpiarDatos(datosCuestionariosProfe);
console.log('Datos de los cuestionarios = ',datosCuestionariosProfe);

////////////////////////////////////////////////////////
//Extraemos los IDs de los grupos
let idGrupos = [];
idsCuestionariosHechos.map((idGrupo) => {
    datosCuestionariosProfe.forEach(grupoId => {
        if (idGrupo == grupoId[0]) {
            idGrupos.push(grupoId[1]);
        }
    });
});
console.log('idGrupos', idGrupos)


////////////////////////////////////////////////////////
//Accedemos a los nombres de los grupos del docente
let datosGrupo = document.getElementById('datosDeLosGrupos').value;
datosGrupo = limpiarDatos(datosGrupo);
console.log('Datos de los grupos = ', datosGrupo);

////////////////////////////////////////////////////////
//Lo definimos como set para eliminar los repetidos
let gruposNames = new Set();
let gruposIDSet = new Set();
datosGrupo.filter((grupo) => {
    idGrupos.forEach(id => {
        if (id == grupo[0]) {
            gruposNames.add(grupo[2]);
            gruposIDSet.add(id);
        }
    });
});
let gruposNameArray = Array.from(gruposNames);
let gruposIdsArray = Array.from(gruposIDSet);
console.log('gruposNameArray', gruposNameArray);
console.log('gruposIDSet', gruposIdsArray)

/////////////////////////////////////////////////////////
//Debemos vincular los promedios con su respectivo grupo
/*  
*   promediosCuestionariosHechos
*   idGrupos  
*/
//Juntamos en un array de cadenas idgrupo_promedio
let counter = 0;
let sumaPromedioGrupos = idGrupos.map(id => {
    return `${id}_${promediosCuestionariosHechos[counter++]}`;
});
console.log('sumaPromedioGrupos', sumaPromedioGrupos);

//Contamos la cantidad de elemento pertenecientes a un grupo
let contadorPosicionesIds = [];
for (var i = 0; i < gruposIdsArray.length; i++) {
    contadorPosicionesIds.push(idGrupos.filter(x => x === gruposIdsArray[i]).length);
}
console.log('contadorPosicionesIds', contadorPosicionesIds)

//Debemos sumar los puntajes de cada grupo
let puntajePorGrupo;
let puntajePorGrupoArray = [];
//Esta es una copia para poder hacer unshift en ella
let promediosCuestionariosHechosCopia = {...promediosCuestionariosHechos};
promediosCuestionariosHechosCopia = Object.values(promediosCuestionariosHechosCopia);

for (var j = 0; j < contadorPosicionesIds.length; j++) {
    puntajePorGrupo = 0;
    for (var r = 0; r < contadorPosicionesIds[j]; r++) {
        puntajePorGrupo += parseFloat(promediosCuestionariosHechosCopia[r])
    }
    r = 0;
    puntajePorGrupoArray.push(puntajePorGrupo);
    for (var h = 0; h < contadorPosicionesIds[j]; h++) {
        promediosCuestionariosHechosCopia.shift();
    }
}
console.log('Puntaje por grupo', puntajePorGrupoArray);

//Debemos dividir los puntajes entre el total de elementos por grupo
contador = 0;
let promedioFinalPorGrupo = puntajePorGrupoArray.map(sumatoria => {
    return sumatoria / contadorPosicionesIds[contador++];
});
console.log('Promedio por cada grupo', promedioFinalPorGrupo);

//Debemos obtener a cuanto en porcentage equivalen los promedios.
//Debemos sumar los promedios
let sumaAritmeticaPromedios = promedioFinalPorGrupo.reduce((suma, element) => suma + element);
//Obtenemos los porcentages
let porcentajePromedioEquivalente = promedioFinalPorGrupo.map(promedio =>{
    let porcentajeCalculo = ((promedio*(100))/sumaAritmeticaPromedios).toFixed(2);
    return parseFloat(porcentajeCalculo);
});
console.log('porcentajePromedioEquivalente', porcentajePromedioEquivalente)

//Debemos separar en un array multidimensional los promedios de los cuestionarios por grupo
let promediosMultidimensional = []; //[[],[],[]] un array por grupo
for(var y = 0; y < contadorPosicionesIds.length; y++){
    let arrayTemporal = [];
    arrayTemporal.push(promediosCuestionariosHechos.splice(0, contadorPosicionesIds[y]));
    promediosMultidimensional.push(arrayTemporal);
}
promediosMultidimensional = promediosMultidimensional.flat(1);
console.log('Promedio dividido en array por grupo', promediosMultidimensional);


////////////////////////////////////////////////////////
//Plotly.newPlot('graph2', data, layout, config);

//Imprime la gráfica de barras
function grafica_barras_promedio_general() {
    var trace1 = {
        type: 'bar',
        x: gruposNameArray,
        y: promedioFinalPorGrupo,
        marker: {
            color: ['#628E90', '#256D85', '#7895B2', '#5F6F94', '#2B4865'],
            line: {
                width: 1
            }
        }
    };

    var data = [trace1];

    var layout = { //Titulo de la gráfica
        title: 'Comparison',
        font: { size: 10 }
    };

    var config = { responsive: true } //Ajuste responsivo

    Plotly.newPlot('graph1', data, layout, config);
}
grafica_barras_promedio_general(); //Esta ejecuta la gráfica por defecto

//Imprime la gráfica pastel
function grafica_pastel_promedio_general() {

    var data2 = [{
        values: porcentajePromedioEquivalente,
        labels: gruposNameArray,
        type: 'pie',
        marker: {
            colors: ['#628E90', '#256D85', '#7895B2', '#5F6F94', '#2B4865']
        }
    }];

    var layout = { //Titulo de la gráfica
        title: 'Total points',
        font: { size: 10 }
    };

    var config = { responsive: true } //Ajuste responsivo

    Plotly.newPlot('graph1', data2, layout, config);
}

//Imprime la gráfica lineal
//gruposNameArray
//promediosMultidimensional
function grafica_lineal_promedio_general() {

    //Hacemos una fábrica de objetos
    let objetoTrazos = {};
    let contador = 0;
    //Cantidad de dezplazamientos en x
    let arraysWithASize = generadorArraysWithASize(contadorPosicionesIds);
    //Fábrica....
    let arrayTraceName = [] //Nombre de los trazos
    gruposNameArray.forEach(grupo => {
        objetoTrazos[contador] = {
            x: arraysWithASize[contador],
            y: promediosMultidimensional[contador++],
            name: grupo,
            type: 'scatter'
        }
    });
    
    let arrayTrazos = Object.values(objetoTrazos);
    console.log('arrayTrazos', arrayTrazos);

    //Creamos nuestros objetos con los nombres del trace
    contador=0;
    var data = [];
    arrayTrazos.forEach(trazo => {
        data.push(arrayTrazos[contador++]);
    });

    var layout = { //Titulo de la gráfica
        title: 'Cuestionarios de grupo',
        font: { size: 10 }
    };

    var config = { responsive: true } //Ajuste responsivo

    Plotly.newPlot('graph1', data, layout, config);
}

/////////////////////////////////////////////////
//Funcion para limpiar los datos
function limpiarDatos(string) {
    //Como en python eran tuplas, necesitamos convertir todo en array
    string = string.replaceAll('(', '[');
    string = string.replaceAll(')', ']');
    string = string.replace('],]', ']]');
    string = string.replaceAll("\'", "\"");
    string = string.replaceAll("None", "0");
    //Son los datos de los cuestionarios evaluados. (en estado ready)
    string = JSON.parse(string);
    return string
}

//Funcion para generar arrays que cuenten de 1 en 1 según un tamaño dado.
function generadorArraysWithASize(arraySizes){
    let generalArray = [];
    for(var i = 0; i < arraySizes.length; i++){
        let temporalArray = [];
        for(var j = 0; j < arraySizes[i]; j++){
            temporalArray.push(j+1);
        }
        generalArray.push(temporalArray);
    }
    return generalArray;
}
