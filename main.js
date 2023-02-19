// function IsNumeric(valor) {
//   var log = valor.length;
//   var sw = "S";
//   for (x = 0; x < log; x++) {
//     v1 = valor.substr(x, 1);
//     v2 = parseInt(v1);
//     //Compruebo si es un valor numérico
//     if (isNaN(v2)) {
//       sw = "N";
//     }
//   }
//   if (sw == "S") {
//     return true;
//   } else {
//     return false;
//   }
// }

// var primerslap = false;
// var segundoslap = false;

// function formateafecha(fecha) {
//   var long = fecha.length;
//   var dia;
//   var mes;
//   var ano;

//   if (long >= 2 && primerslap == false) {
//     dia = fecha.substr(0, 2);
//     if (IsNumeric(dia) == true && dia <= 31 && dia != "00") {
//       fecha = fecha.substr(0, 2) + "/" + fecha.substr(3, 7);
//       primerslap = true;
//     } else {
//       fecha = "";
//       primerslap = false;
//     }
//   } else {
//     dia = fecha.substr(0, 1);
//     if (IsNumeric(dia) == false) {
//       fecha = "";
//     }
//     if (long <= 2 && (primerslap = true)) {
//       fecha = fecha.substr(0, 1);
//       primerslap = false;
//     }
//   }
//   if (long >= 5 && segundoslap == false) {
//     mes = fecha.substr(3, 2);
//     if (IsNumeric(mes) == true && mes <= 12 && mes != "00") {
//       fecha = fecha.substr(0, 5) + "/" + fecha.substr(6, 4);
//       segundoslap = true;
//     } else {
//       fecha = fecha.substr(0, 3);
//       segundoslap = false;
//     }
//   } else {
//     if (long <= 5 && (segundoslap = true)) {
//       fecha = fecha.substr(0, 4);
//       segundoslap = false;
//     }
//   }
//   if (long >= 7) {
//     ano = fecha.substr(6, 4);
//     if (IsNumeric(ano) == false) {
//       fecha = fecha.substr(0, 6);
//     } else {
//       if (long == 10) {
//         if (ano == 0 || ano < 1900 || ano > 2100) {
//           fecha = fecha.substr(0, 6);
//         }
//       }
//     }
//   }

//   if (long >= 10) {
//     fecha = fecha.substr(0, 10);
//     dia = fecha.substr(0, 2);
//     mes = fecha.substr(3, 2);
//     ano = fecha.substr(6, 4);
//     // Año no viciesto y es febrero y el dia es mayor a 28
//     if (ano % 4 != 0 && mes == 02 && dia > 28) {
//       fecha = fecha.substr(0, 2) + "/";
//     }
//   }
//   return fecha;
// }

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //Número máximo de casillas marcadas por cada fila
// var maximo = 3;

// //El contador es un array de forma que cada posición del array es una linea del formulario
// var cont = new Array(0, 0);

// function validar(check, grupo) {
//   //Compruebo si la casilla está marcada
//   if (check.checked == true) {
//     //está marcada, entonces aumento en uno el contador del grupo
//     cont[grupo]++;
//     //compruebo si el contador ha llegado al máximo permitido
//     if (cont[grupo] > maximo) {
//       //si ha llegado al máximo, muestro mensaje de error
//       alert("No se pueden elegir más de " + maximo + " casillas a la vez.");
//       //desmarco la casilla, porque no se puede permitir marcar
//       check.checked = false;
//       //resto una unidad al contador de grupo, porque he desmarcado una casilla
//       cont[grupo]--;
//     }
//   } else {
//     //si la casilla no estaba marcada, resto uno al contador de grupo
//     cont[grupo]--;
//   }
// }

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// var refranes=["El que la sigue la consigue","Mas vale prevenir que curar","Persona prevenida vale por dos","Quien todo lo quiere, todo lo pierde","No por mucho madrugar amanece mas temprano"];
// var indice=0;

// setInterval(MuestraSiguienteRefran,2000);

// function MuestraSiguienteRefran(){
//   indice++;
//   if(indice>refranes.length){indice=0;}
//   document.getElementById("salida").innerHTML=refranes[indice];
// }

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// nombres = []
 
// function insertarNombre(evt) {
//     evt.preventDefault();
 
//     let nombre = document.getElementById("nombre").value;
 
//     if (nombre == "") {
//         alert("El nombre no puede estar vacio");
//     } else if(!existeNombre(nombre)) {
//         let opcion = "<li> " + nombre + "</li>";
 
//         let lista = document.getElementById("lista-nombres");
 
//         lista.innerHTML += opcion;
 
//         nombres.push(nombre);
 
//         alert("Se ha insertado el nombre");
//     }else{
//         alert("Existe el nombre");
//     }
 
// }
 
// function existeNombre(nombre){
 
//     // Busco el nombre
//     const nombreEncontrado = nombres.find(element => element.trim().toLowerCase() === nombre.trim().toLowerCase());
 
//     if(nombreEncontrado){
//         return true;
//     }else{
//         return false;
//     }
//   }


  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------

var n=prompt("Introduce los números que deseas que contenga el array");
var array=[];
down(n);
function down(n)
{
	for (i=n; i>=1;i--){
		array.push(i);
	}
	
}
document.write(array);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

function paisMayorLongitudCaracteres(paises) {
    if (!Array.isArray(paises)) {
        throw TypeError('El argumento paises debe ser un arreglo.');
    }

    if (!paises.every(e => typeof e == 'string')) {
        throw TypeError('El arreglo paises debe contener únicamente cadenas de caracteres.');
    }

    return paises.reduce((a, p) => a.length > p.length ? a : p, '');
}

let paises = ['Colombia', 'Uruguay', 'Argentina', 'Alemania', 'Bolivia', 'Estados Unidos de América', 'Perú'];

try {
    console.log(paisMayorLongitudCaracteres(paises));   // Estados Unidos de América
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(paisMayorLongitudCaracteres(['Colombia', 42, 'Argentina', 'Alemania', 'Bolivia', 'Estados Unidos de América', 'Perú']));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}

console.log();

try {
    console.log(paisMayorLongitudCaracteres({a: 1000}));   // Error
} catch (e) {
    console.log(`Error: ${e.message}`);
}