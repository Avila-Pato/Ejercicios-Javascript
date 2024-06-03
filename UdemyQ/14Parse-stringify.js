// Ejemplo 1: JSON.parse()
const jsonString = '{"nombre": "Pato", "edad": 25, "ciudad": "Madrid"}';

try {
  const objeto = JSON.parse(jsonString);
  console.log(objeto);
  console.log(objeto.nombre); // Pato
  console.log(objeto.edad);   // 25
  console.log(objeto.ciudad); // Madrid
} catch (error) {
  console.error("Error: Datos no encontrados", error);
}

// Ejemplo 2: JSON.stringify()
const objeto2 = {
  nombre: "Pato",
  edad: 25,
  ciudad: "Madrid"
};

const jsonString2 = JSON.stringify(objeto2);

console.log(jsonString2);
// Resultado: '{"nombre":"Pato","edad":25,"ciudad":"Madrid"}'
