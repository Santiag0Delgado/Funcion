/*  function juego () {
 
 var opciones = ["Longitud", "Masa", "Tiempo", "Superficie", "Volumen", "Temperatura", "Rapidez", "Densidad", "Energía"];

 var puntos = 0;
 var juego = 1;

 alert("**BIENVENIDO AL JUEGO**");

 do {

     var ramdom = Math.floor(Math.random() * opciones.length);

     var opcion = parseInt(prompt("**CUAL ES EL VALOR, DE LA MAGNITUD: " + opciones[ramdom] + "**" +
         "\n1. mts (metros)" +
         "\n2. kg (kilogramos" +
         "\n3. seg (segundos)" +
         "\n4. cm2 (centimetros cuadrados)" +
         "\n5. mts3 (metros cubicos)" +
         "\n6. °C (Centigrados)" +
         "\n7. m/s (Metros/Segundos" +
         "\n8. g/cm3 (gramos/centigrados cubicos)" +
         "\n9. J (julios)" + "\n\n Vas en la pregunta: " + juego + "\nTienes un puntaje de: " + puntos));

     if (opciones[ramdom] == "Longitud" && opcion == 1) {
         puntos += 10;
         delete(opciones[0]);
     }
     if (opciones[ramdom] == "Masa" && opcion == 2) {
         puntos += 10;
         delete(opciones[1]);
     }
     if (opciones[ramdom] == "Tiempo" && opcion == 3) {
         puntos = puntos + 12;
         delete(opciones[2]);
     }
     if (opciones[ramdom] == "Superficie" && opcion == 4) {
         puntos += 12;
         delete(opciones[3]);
     }
     if (opciones[ramdom] == "Volumen" && opcion == 5) {
         puntos += 12;
         delete(opciones[4]);
     }
     if (opciones[ramdom] == "Temperatura" && opcion == 6) {
         puntos += 10;
         delete(opciones[5]);
     }
     if (opciones[ramdom] == "Rapidez" && opcion == 7) {
         puntos += 12;
         delete(opciones[6]);
     }
     if (opciones[ramdom] == "Densidad" && opcion == 8) {
         puntos += 12;
         delete(opciones[7]);
     }
     if (opciones[ramdom] == "Energía" && opcion == 9) {
         puntos += 10;
         delete(opciones[8]);
     }
     if (opcion >= 10 || opcion == 0) {
         alert("Digita algo valido, vuelve a intentarlo")
         break;
     }


     alert("Vamos a la sigiente");
     juego++;

 } while (juego <= 10);

 if (puntos < 49) {
     document.write("Muy bien pero debes mejorar... Tu puntaje es de: " + puntos);
 } else if (puntos > 50 && puntos < 79) {
     document.write("Estuviste apunto de lograrlo... Tu puntaje es de: " + puntos);
 } else if (puntos > 80 && puntos < 100) {
     document.write("Excelente has superado la prueba... Tu puntaje es de: " + puntos);
 }
}; */


var opciones = [
    "Longitud",
    "Masa",
    "Tiempo",
    "Superficie",
    "Volumen",
    "Temperatura",
    "Rapidez",
    "Densidad",                                                                       
    "Energía",
];

var puntos = 0;
var juego = 1;
var magnitudess = [];


var n = 0;
var l = document.getElementById("cronometro");
window.setInterval(function() {
    l.innerHTML = n;
    n++;
}, 1000);





function iniciarJuego() {
    alert("**BIENVENIDO AL JUEGO**");
    mostrarPregunta();
}






function mostrarPregunta() {


    if (juego <= 10) {
        var opciones2 = opciones.filter(function(magnitud, index) {
            return magnitudess.indexOf(index) === -1;
            /* indexOf hace una llamada */
            /* filtro crea un nuevo array con todos */
        });

        if (opciones2.length === 0) {
            magnitudess = [];
            opciones2 = opciones.slice();
            /* slice es una copia de un array */
        }

        var aleatorio = Math.floor(Math.random() * opciones2.length);
        var indicess = opciones.indexOf(opciones2[aleatorio]);

        magnitudess.push(indicess);

        var pregunta = document.getElementById("preguntass");
        pregunta.textContent = "**¿CUÁL ES EL VALOR DE LA MAGNITUD: " + opciones[indicess] + "**";

        var opcionesDiv = document.getElementById("opcines");
        opcionesDiv.innerHTML = "";




        for (var i = 0; i < opciones.length; i++) {
            var boton = document.createElement("button");
            boton.textContent = `${i + 1}. ${Opciones(i)}`;
            boton.dataset.opcion = i + 1;
            boton.addEventListener("click", Spuntaje);
            opcionesDiv.appendChild(boton);

        }
    } else {
        Final();
    }
}


function Opciones(menus) {
    if (menus >= 0 && menus < opciones.length) {
        switch (menus) {
            case 0:
                return "mts (metros)";
            case 1:
                return "kg (kilogramos)";
            case 2:
                return "seg (segundos)";
            case 3:
                return "cm2 (centímetros cuadrados)";
            case 4:
                return "mts3 (metros cúbicos)";
            case 5:
                return "°C (Centígrados)";
            case 6:
                return "m/s (Metros/Segundos)";
            case 7:
                return "g/cm3 (gramos/centígrados cúbicos)";
            case 8:
                return "J (julios)";

        }
    }
}

function Spuntaje(j) {
    var opcionS = parseInt(j.target.dataset.opcion);
    var indicess = opciones.indexOf(document.getElementById("preguntass").textContent.replace("**¿CUÁL ES EL VALOR DE LA MAGNITUD: ", "").replace("**", ""));

    if (opcionS === (indicess + 1)) {
        if (juego <= 3) {
            puntos += 10;
        } else if (juego <= 6) {
            puntos += 12;
        } else {
            puntos += 0;
        }
    }

    juego++;
    mostrarPregunta();
}


function Final() {
    var resultadoT;
    if (puntos < 49) {
        resultadoT = "Muy bien pero debes mejorar... Tu puntaje es de: " + puntos;
    } else if (puntos >= 50 && puntos <= 79) {
        resultadoT = "Estuviste a punto de lograrlo... Tu puntaje es de: " + puntos;
    } else if (puntos >= 80 && puntos <= 100) {
        resultadoT = "Excelente has superado la prueba... Tu puntaje es de: " + puntos;
    }

    var Total = document.getElementById("resultado");
    Total.textContent = resultadoT;

    juego = 1;
    puntos = 0;




    var pulgar = document.createElement("img");

    pulgar.src = "pulgar.jpg";
    pulgar.alt = "resultado"
    Total.appendChild(pulgar);
}

iniciarJuego();