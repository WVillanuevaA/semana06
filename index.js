function diasHastaNavidad() {
  // Obtenemos la fecha actual
  const fechaActual = new Date();

  // Obtenemos el año actual
  const añoActual = fechaActual.getFullYear();

  // Establecemos la fecha de Navidad para el año actual
  const fechaNavidad = new Date(añoActual, 11, 25);

  // Si la fecha actual es después de Navidad, establecemos la fecha de Navidad para el próximo año
  if (fechaActual > fechaNavidad) {
    fechaNavidad.setFullYear(añoActual + 1);
  }
  const diferenciaMs = fechaNavidad - fechaActual;

  const diasHastaNavidad = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

  return diasHastaNavidad;
}
console.log("Días hasta Navidad:", diasHastaNavidad());
 
function calcularEdad(fechaNacimiento) {
    //fecha actual
    const fechaActual = new Date();
    //Año actual
    const añoActual = fechaActual.getFullYear();
    //Mes y día de la fecha de nacimiento
    const mesNacimiento = fechaNacimiento.getMonth();
    const diaNacimiento = fechaNacimiento.getDate();
    //Mes y día actual
    const mesActual = fechaActual.getMonth();
    const diaActual = fechaActual.getDate();
    // Calculamos la edad
    let edad = añoActual - fechaNacimiento.getFullYear();
  
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
      edad--;
    }
    return edad;
  }
  const fechaNacimiento = new Date(2000, 5, 15); 
  console.log("Edad:", calcularEdad(fechaNacimiento));
  