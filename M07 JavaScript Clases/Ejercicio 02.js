/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
    }
  
    detalle() {
      return {
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        domicilio: this.domicilio
      }
    }
}

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   const persona = new Persona(nombre, apellido, edad, domicilio);
   return persona;
}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   class Persona {
      constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
      }
      datos() {
        return `${this.nombre}, ${this.edad} años`;
      }
    }
    return Persona;
}

var persona2 = agregarMetodo(); // Agregamos el método "datos" a la clase "Persona" y lo pasamos a la var persona2

const persona1 = new persona2("Juan", 22); //ahora la var persona2 tiene a la clase guardada y le cargamos los nuevos datos y lo pasamos a la var persona1
 return persona1.datos();


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
