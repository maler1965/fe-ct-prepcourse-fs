/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var cont = array.length;
   return cont;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var aumem = array.map( (num)=>{ return num +1;});
   return aumem ;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array ;

}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array ;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var bus = array;
   var dent = bus.includes(elemento);
   return dent ;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   return arrayOfNums.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let suma = 0;
   for (let i = 0; i < resultadosTest.length; i++) {
     suma += resultadosTest[i];
   }
   let promedio = suma / resultadosTest.length;
   return promedio;
 
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
   //return Math.max.apply(null , resultadosTest);
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
    }
    let producto = 1;

    for (let i = 0; i < arguments.length; i++) {
      producto *= arguments[i];
    }
    return producto;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let cuent = 0;
   for (let i = 0; i < array.length; i++) {
      if (array[i] > 18) {
      
        cuent = cuent + 1
      } 
    }
 
    if (cuent === 0) {
     return 'Ninguno es mayor de 18 '
    }
    return cuent;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return 'Es fin de semana'; 
   }  else {
     if (numeroDeDia > 1 && numeroDeDia < 7) {
       return 'Es dia laboral'
     }
 
      return 'No es un dia de la semana'
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var sepa = num.toString();
   var conv = sepa.split('');
    if ( conv[0] === '9') {
    return true ;
   }
   return false ;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   //var coge = array ;
   var prim1 = array[0];
   var prim = array.every((num) => {
      
        return num === prim1;
      
   })
   return prim;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesEncontrados = [];
   // Iteramos sobre el arreglo dado como parámetro.
   for (var i = 0; i < array.length; i++) {
     // Si encontramos uno de los meses buscados, lo agregamos al nuevo arreglo.
     if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
       mesesEncontrados.push(array[i]);
     }
   }
   // Si no se encontraron los tres meses, retornamos el string correspondiente.
   if (mesesEncontrados.length !== 3) {
     return "No se encontraron los meses pedidos";
   } else {
     // Si se encontraron los tres meses, retornamos el arreglo con los meses encontrados.
     return mesesEncontrados;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   
      // Creamos un arreglo para guardar los resultados.
      var resultados = [];
      // Iteramos del 0 al 10 (inclusive) para obtener los resultados de la tabla del 6.
      for (var i = 0; i <= 10; i++) {
        var resultado = 6 * i;
        resultados.push(resultado);
      }
      // Retornamos el arreglo con los resultados.
      return resultados;
     
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   
  var mayoresACien = [];
  // Iteramos sobre el arreglo dado como parámetro.
  for (var i = 0; i < array.length; i++) {
    // Si el número es mayor a 100, lo agregamos al nuevo arreglo.
    if (array[i] > 100) {
      mayoresACien.push(array[i]);
    }
  }
  // Retornamos el nuevo arreglo con los números mayores a 100.
  return mayoresACien;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var resultado = num;
   var nuevoArreglo = [];
   for (var i = 0; i < 10; i++) {
     resultado += 2;
     nuevoArreglo.push(resultado);
     if (resultado === i) {
       return "Se interrumpió la ejecución";
       break;
     }
   }
   return nuevoArreglo;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var resultado = num;
   var nuevoArreglo = [];
   for (var i = 0; i < 10; i++) {
     if (i === 5) {
       continue;
     }
     resultado += 2;
     nuevoArreglo.push(resultado);
   }
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
