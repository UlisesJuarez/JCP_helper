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
console.log('Promedios de los cuestionarios hechos = ', promediosCuestionariosHechos);

////////////////////////////////////////////////////////
//Accedemos a los Promedios de los cuestionarios
let idsAlumnosCuestionariosHechos = datosCuestionariosTerminados.map((element) => {
    return parseFloat(element[2]);
});
console.log('Ids de los alumnos que han hecho un cuestionario = ', idsAlumnosCuestionariosHechos);

////////////////////////////////////////////////////////
//Accedemos a los Intentos de los cuestionarios
let intentosCuestionariosHechos = datosCuestionariosTerminados.map((element) => {
    return parseFloat(element[11]);
});
console.log('Intentos hechos por cuestionarios = ', intentosCuestionariosHechos)

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
console.log('Datos de los cuestionarios = ', datosCuestionariosProfe);

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
let promediosCuestionariosHechosCopia = { ...promediosCuestionariosHechos };
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
let porcentajePromedioEquivalente = promedioFinalPorGrupo.map(promedio => {
    let porcentajeCalculo = ((promedio * (100)) / sumaAritmeticaPromedios).toFixed(2);
    return parseFloat(porcentajeCalculo);
});
console.log('porcentajePromedioEquivalente', porcentajePromedioEquivalente)

//Debemos separar en un array multidimensional los promedios de los cuestionarios por grupo
let promediosMultidimensional = []; //[[],[],[]] un array por grupo
let intentosMultidimensional = [];
let idsAlumnosMultidimensional = [];
for (var y = 0; y < contadorPosicionesIds.length; y++) {
    //Para los promedios
    let arrayTemporal = [];
    arrayTemporal.push(promediosCuestionariosHechos.splice(0, contadorPosicionesIds[y]));
    promediosMultidimensional.push(arrayTemporal);

    let arrayTemporal2 = [];
    arrayTemporal2.push(intentosCuestionariosHechos.splice(0, contadorPosicionesIds[y]));
    intentosMultidimensional.push(arrayTemporal2);

    let arrayTemporal3 = [];
    arrayTemporal3.push(idsAlumnosCuestionariosHechos.splice(0, contadorPosicionesIds[y]));
    idsAlumnosMultidimensional.push(arrayTemporal3);
}
promediosMultidimensional = promediosMultidimensional.flat(1);
console.log('Promedio dividido en array por grupo', promediosMultidimensional);
console.log('Intentos dividido en array por grupo', intentosMultidimensional);

//Ordenamos de menor a mayor el promedio por grupo multidimensional
let promediosMultidimensionalOrdenado = [];
promediosMultidimensional.forEach((grupo) => {
    //Debemos ordenar los valores de menor a mayor
    let grupoPromediosOrdenados = grupo.sort((current, next) => {
        return current - next;
    });
    promediosMultidimensionalOrdenado.push(grupoPromediosOrdenados);
});
console.log('promediosMultidimensionalOrdenado', promediosMultidimensionalOrdenado)

let arrayPromediosIntentosPorGrupo = [];
intentosMultidimensional.forEach((grupo, i = 0) => {
    let total = grupo[0].reduce((suma, element) => {
        return suma + element
    });
    let promedio = parseFloat((total / contadorPosicionesIds[i++]).toFixed(2));
    arrayPromediosIntentosPorGrupo.push(promedio);
});
console.log('arrayPromediosIntentosPorGrupo', arrayPromediosIntentosPorGrupo);

///////////////////////////Datos indice de aprobacion
////////////////////////////////////////////////////////🔴
//Accedemos a los estados de aprobación de los cuestionarios.
let estadoAprobacion = datosCuestionariosTerminados.map((element) => {
    return element[5];
});
console.log('Estados de aprobacion = ', estadoAprobacion)

//Se deben separar los estados de aprovado deun array multidimensional
//contadorPosicionesIds
//Debemos separar en un array multidimensional los promedios de los cuestionarios por grupo
let aprobacionMultidimensional = []; //[[],[],[]] un array por grupo
for (var y = 0; y < contadorPosicionesIds.length; y++) {
    let arrayTemporal = [];
    arrayTemporal.push(estadoAprobacion.splice(0, contadorPosicionesIds[y]));
    aprobacionMultidimensional.push(arrayTemporal);
}
aprobacionMultidimensional = aprobacionMultidimensional.flat(1);
console.log('Arrays de aprobación por grupo', aprobacionMultidimensional); //Este contiene tanto aprobado como reprobado

let aprobacionMultidimensionalAprobados = [...aprobacionMultidimensional];
let aprobacionMultidimensionalReprobados = [...aprobacionMultidimensional];

//Debemos eliminar los reprobados del el array. [[],[],[]]
let aprobadosCounter = [];
let reprobadosCounter = [];
let aprobacionTotal = [];
aprobacionTotal.push(aprobadosCounter);
aprobacionTotal.push(reprobadosCounter);
let graficasTitle = ['aprobados', 'reprobados'];
for (var i = 0; i < aprobacionMultidimensionalAprobados.length; i++) {
    let contadorAprobados = 0;
    let contadorReprobados = 0;
    aprobacionMultidimensionalAprobados[i].filter(element => {
        if (element == 'aprobado') {
            contadorAprobados++;
        } else if (element == 'reprobado') {
            contadorReprobados++;
        }
    });
    aprobadosCounter.push(contadorAprobados);
    reprobadosCounter.push(contadorReprobados);
};
console.log('aprobadosCounter', aprobadosCounter) //Hace la cuenta de los aprobados. 😀
console.log('reprobadosCounter', reprobadosCounter) //Hace la cuenta de los reprobados 😀
console.log('aprobacionTotal', aprobacionTotal) //Encontramos 2 arrays con los alumnos reprobados y aprobados

//Sumamos el total de los alumnos aprobados.
let sumaAprobados = aprobadosCounter.reduce((sum, element) => {
    return sum + element;
});
console.log('sumaAprobados', sumaAprobados)

//Sumamos el total de los alumnos reprobados.
let sumaReprobados = reprobadosCounter.reduce((sum, element) => {
    return sum + element;
});
console.log('sumaReprobados', sumaReprobados)

//Calculamos porcentaje de reprobados y aprobados
let totalAprobacion = sumaReprobados + sumaAprobados;
let porcentajeAprobacion = ((sumaAprobados * 100) / totalAprobacion).toFixed(2);
porcentajeAprobacion = parseFloat(porcentajeAprobacion);
let porcentajeReprobacion = ((sumaReprobados * 100) / totalAprobacion).toFixed(2);
porcentajeReprobacion = parseFloat(porcentajeReprobacion);
//Guardamos los porcentajes de aprobacion
let arrayPorcentajeAprobacion = [];
arrayPorcentajeAprobacion.push(porcentajeAprobacion);
arrayPorcentajeAprobacion.push(porcentajeReprobacion);
console.log('arrayPorcentajeAprobacion', arrayPorcentajeAprobacion)

/////Calculo de los porcentages por grupo (Graficas de barrar horizontales)
//Accedemos a los porcentajes globales
let porcentageGlobal = [...arrayPorcentajeAprobacion];
//Convertimos el procentage de aprobados a un número cercano a 10
let aprobadosFormatoDiez = Math.ceil(porcentageGlobal[0] / 10);
console.log('aprobadosFormatoDiez', aprobadosFormatoDiez)
//Accedemos a los datos de manera individual
let nombreGrupos_unitario = [...gruposNameArray];
let numerosAprobacionTotal = [...aprobacionTotal[0]];
let numerosReprobacionTotal = [...aprobacionTotal[1]];
//Obtenemos el conteo del total de alumnos por grupo
let listadoALumnos = [...aprobacionMultidimensional];

//Obtenemos el conteo del total de alumnos por grupo
let conteoPorGrupo = []; //Se guarda la cantidad de alumnos por grupo
listadoALumnos.forEach(grupo => conteoPorGrupo.push(grupo.length))
console.log('conteoPorGrupo', conteoPorGrupo)

//Calculamos el porcentage de aprobados y reprobados por grupo
let porcentagesDividosPorGrupo = []; //Almacenamos los datos de los procentages
conteoPorGrupo.forEach((grupoTotal, i = 0) => {
    let gruposArrayTemporal = [];
    let porcentageTemporalAprobados = parseFloat(((numerosAprobacionTotal[i] * 100) / grupoTotal).toFixed(2));
    let porcentageTemporalReprobados = parseFloat(((numerosReprobacionTotal[i] * 100) / grupoTotal).toFixed(2));
    gruposArrayTemporal.push(porcentageTemporalAprobados, porcentageTemporalReprobados);
    porcentagesDividosPorGrupo.push(gruposArrayTemporal);
})
console.log('porcentagesDividosPorGrupo', porcentagesDividosPorGrupo)

/////////////////////////////////////////////////
//Funcion para limpiar los datos
function limpiarDatos(string) {
    //Como en python eran tuplas, necesitamos convertir todo en array
    string = string.replaceAll('(', '[');
    string = string.replaceAll(')', ']');
    string = string.replace('],]', ']]');
    string = string.replace(']]]]', ']]');
    string = string.replace('[[[[', '[[');
    string = string.replaceAll("\'", "\"");
    string = string.replaceAll("None", "0");
    //Son los datos de los cuestionarios evaluados. (en estado ready)
    string = JSON.parse(string);
    return string
}

//Funcion para generar arrays que cuenten de 1 en 1 según un tamaño dado.
function generadorArraysWithASize(arraySizes) {
    let generalArray = [];
    for (var i = 0; i < arraySizes.length; i++) {
        let temporalArray = [];
        for (var j = 0; j < arraySizes[i]; j++) {
            temporalArray.push(j + 1);
        }
        generalArray.push(temporalArray);
    }
    return generalArray;
}