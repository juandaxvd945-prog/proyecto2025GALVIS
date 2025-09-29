const preguntas = {
   sociales: {
    facil: [
        { pregunta: "Según la Constitución de 1991, ¿cuál de estos es un derecho fundamental de los colombianos?", opciones: ["Tener un empleo fijo","Elegir y ser elegido","Recibir subsidios","Ser funcionario público"], correcta: "Elegir y ser elegido", puntos: 1 },
        { pregunta: "En qué continente se encuentra Colombia?", opciones: ["África","América","Asia","Europa"], correcta: "América", puntos: 1 },
        { pregunta: "¿Qué suceso se conmemora el 20 de julio de 1810 en Colombia?", opciones: ["La firma de la Constitución","El grito de independencia","La batalla de Boyacá","El nacimiento de Bolívar"], correcta: "El grito de independencia", puntos: 1 },
        { pregunta: "¿Qué rama del poder público crea las leyes en Colombia?", opciones: ["Ejecutiva","Legislativa","Judicial","Militar"], correcta: "Legislativa", puntos: 1 },
        { pregunta: "¿Quién fue el líder de la campaña libertadora de Colombia?", opciones: ["Santander","Nariño","Simón Bolívar","Policarpa"], correcta: "Simón Bolívar", puntos: 1 }
    ],
    medio: [
        { pregunta: "La globalización se caracteriza principalmente por:", opciones: ["Aislamiento cultural","Mayor comercio internacional","Cierre de fronteras","Eliminación de internet"], correcta: "Mayor comercio internacional", puntos: 2 },
        { pregunta: "La principal causa histórica del conflicto armado en Colombia fue:", opciones: ["Acceso desigual a la tierra","Exceso de turismo","Alfabetización masiva","Industrialización temprana"], correcta: "Acceso desigual a la tierra", puntos: 2 },
        { pregunta: "En una democracia, la participación ciudadana implica principalmente:", opciones: ["Nombrar jueces","Ejercer el derecho al voto","Formar grupos armados","Confiar solo en el presidente"], correcta: "Ejercer el derecho al voto", puntos: 2 },
        { pregunta: "La Segunda Guerra Mundial terminó en 1945 con:", opciones: ["El Tratado de Tordesillas","La bomba atómica en Japón","La independencia de EE.UU.","La Revolución Industrial"], correcta: "La bomba atómica en Japón", puntos: 2 },
        { pregunta: "El TLC con EE.UU. buscó principalmente:", opciones: ["Unificar monedas","Facilitar movilidad estudiantil","Aumentar comercio de bienes y servicios","Integrar sistemas educativos"], correcta: "Aumentar comercio de bienes y servicios", puntos: 2 }
    ],
    dificil: [
        { pregunta: "La Revolución Francesa inspiró en América Latina:", opciones: ["Monarquías absolutas","Ideales de libertad e igualdad","Mayor poder de la Iglesia","Expansión del feudalismo"], correcta: "Ideales de libertad e igualdad", puntos: 3 },
        { pregunta: "La caída del Muro de Berlín en 1989 simbolizó:", opciones: ["El fin de la Guerra Fría","El inicio de la UE","La Primera Guerra Mundial","El fascismo en Europa"], correcta: "El fin de la Guerra Fría", puntos: 3 },
        { pregunta: "En Colombia, la descentralización política significa:", opciones: ["Concentrar poder en el presidente","Autonomía de departamentos y municipios","Supresión del Congreso","Gobierno de militares en regiones"], correcta: "Autonomía de departamentos y municipios", puntos: 3 },
        { pregunta: "En economía, la inflación se entiende como:", opciones: ["Disminución de salarios","Aumento general y sostenido de precios","Incremento del PIB","Crecimiento del comercio internacional"], correcta: "Aumento general y sostenido de precios", puntos: 3 },
        { pregunta: "Consecuencia principal de la Guerra de los Mil Días:", opciones: ["Firma del Plan Marshall","Pérdida de Panamá","Caída del muro de Berlín","Fortalecimiento del Frente Nacional"], correcta: "Pérdida de Panamá", puntos: 3 }
    ],
    experto: [
        { pregunta: "La Corte Constitucional en Colombia se encarga de:", opciones: ["Crear impuestos","Elegir presidente","Revisar constitucionalidad de leyes","Organizar elecciones"], correcta: "Revisar constitucionalidad de leyes", puntos: 5 },
        { pregunta: "La Doctrina Monroe (1823) se resumía en:", opciones: ["América para los europeos","América para los americanos","Europa como centro","Latinoamérica bajo tutela europea"], correcta: "América para los americanos", puntos: 5 },
        { pregunta: "El Bogotazo de 1948 marcó:", opciones: ["El inicio de la Guerra Fría","La violencia partidista en Colombia","La independencia de Panamá","Caída de Rojas Pinilla"], correcta: "La violencia partidista en Colombia", puntos: 5 },
        { pregunta: "El neoliberalismo en Colombia se caracteriza por:", opciones: ["Intervención total del Estado","Reducción del papel del Estado y apertura de mercados","Nacionalización de empresas","Eliminar la competencia"], correcta: "Reducción del papel del Estado y apertura de mercados", puntos: 5 },
        { pregunta: "La Ley de Víctimas (2011) buscó principalmente:", opciones: ["Dar subsidios a empresarios","Reconocer y reparar a víctimas del conflicto","Eliminar impuestos a campesinos","Firmar tratados internacionales"], correcta: "Reconocer y reparar a víctimas del conflicto", puntos: 5 }
    ]
},

matematicas: {
    facil: [
        { pregunta: "Un estudiante tiene 3 cuadernos y compra 2 más. ¿Cuántos cuadernos tiene ahora?", opciones: ["3","4","5","6"], correcta: "5", puntos: 1 },
        { pregunta: "Si una camiseta cuesta $20.000 y compras 2, ¿cuánto pagas?", opciones: ["$20.000","$30.000","$40.000","$50.000"], correcta: "$40.000", puntos: 1 },
        { pregunta: "El perímetro de un triángulo equilátero de lado 5 es:", opciones: ["10","15","20","25"], correcta: "15", puntos: 1 },
        { pregunta: "¿Cuál es el valor de 7×6?", opciones: ["36","40","42","48"], correcta: "42", puntos: 1 },
        { pregunta: "La mitad de 80 es:", opciones: ["30","40","50","60"], correcta: "40", puntos: 1 }
    ],
    medio: [
        { pregunta: "Si un bus recorre 120 km en 2 horas, su velocidad promedio es:", opciones: ["40 km/h","50 km/h","60 km/h","70 km/h"], correcta: "60 km/h", puntos: 2 },
        { pregunta: "Área de un rectángulo de base 12 y altura 5:", opciones: ["60","70","80","100"], correcta: "60", puntos: 2 },
        { pregunta: "La raíz cuadrada de 169 es:", opciones: ["11","12","13","14"], correcta: "13", puntos: 2 },
        { pregunta: "Si 2x = 18, entonces x =:", opciones: ["8","9","10","12"], correcta: "9", puntos: 2 },
        { pregunta: "Suma de ángulos de un cuadrilátero:", opciones: ["90°","180°","270°","360°"], correcta: "360°", puntos: 2 }
    ],
dificil: [
        { pregunta: "El área de un triángulo con base 12 cm y altura 9 cm es:", opciones: ["48","54","60","72"], correcta: "54", puntos: 3 },
        { pregunta: "Factorice la expresión: x² – 25:", opciones: ["(x-25)(x+1)","(x-5)(x+5)","(x-10)(x+2.5)","(x-1)(x+25)"], correcta: "(x-5)(x+5)", puntos: 3 },
        { pregunta: "Una recta pasa por los puntos (2,3) y (6,11). Su pendiente es:", opciones: ["1","2","3","4"], correcta: "2", puntos: 3 },
        { pregunta: "La probabilidad de que al lanzar un dado salga un número mayor que 4 es:", opciones: ["1/6","1/3","1/2","2/3"], correcta: "1/3", puntos: 3 },
        { pregunta: "El ángulo suplementario de 75° es:", opciones: ["95°","100°","105°","115°"], correcta: "105°", puntos: 3 }
],
experto: [
        { pregunta: "Resuelva la ecuación: 4x – 9 = 15", opciones: ["5","6","7","8"], correcta: "6", puntos: 5 },
        { pregunta: "El volumen de un prisma rectangular de 4×3×5 cm es:", opciones: ["40","50","60","70"], correcta: "60", puntos: 5 },
        { pregunta: "Si f(x) = 2x² – 3, entonces f(5) =:", opciones: ["47","48","49","50"], correcta: "47", puntos: 5 },
        { pregunta: "La mediana del conjunto {4, 7, 9, 12, 15} es:", opciones: ["7","9","12","15"], correcta: "9", puntos: 5 },
        { pregunta: "Un artículo cuesta $80.000 y tiene un descuento del 15%. ¿Cuál es el precio final?", opciones: ["$66.000","$68.000","$70.000","$72.000"], correcta: "$68.000", puntos: 5 }
]
},

ingles: {
    facil: [
        { pregunta: "¿Cómo se dice 'libro' en inglés?", opciones: ["Book","Table","Pen","Notebook"], correcta: "Book", puntos: 1 },
        { pregunta: "¿Cómo se dice 'gato' en inglés?", opciones: ["Dog","Cat","Bird","Fish"], correcta: "Cat", puntos: 1 },
        { pregunta: "¿Qué significa 'Hello'?", opciones: ["Adiós","Hola","Gracias","Casa"], correcta: "Hola", puntos: 1 },
        { pregunta: "¿Cómo se dice 'perro' en inglés?", opciones: ["Dog","Cat","Bird","Mouse"], correcta: "Dog", puntos: 1 },
        { pregunta: "¿Cómo se dice 'escuela' en inglés?", opciones: ["School","House","Car","Work"], correcta: "School", puntos: 1 }
    ],
    medio: [
        { pregunta: "¿Cómo se dice 'ciudad' en inglés?", opciones: ["Country","Village","City","Town"], correcta: "City", puntos: 2 },
        { pregunta: "¿Qué significa 'Cold'?", opciones: ["Frío","Caliente","Feliz","Grande"], correcta: "Frío", puntos: 2 },
        { pregunta: "El plural de 'child' es:", opciones: ["Childs","Childes","Children","Childrens"], correcta: "Children", puntos: 2 },
        { pregunta: "¿Cómo se dice 'zapatos' en inglés?", opciones: ["Shoes","Shirts","Pants","Socks"], correcta: "Shoes", puntos: 2 },
        { pregunta: "¿Qué significa 'Breakfast'?", opciones: ["Almuerzo","Cena","Desayuno","Merienda"], correcta: "Desayuno", puntos: 2 }
    ],
    dificil: [
        { pregunta: "¿Cuál es el pasado de 'go'?", opciones: ["Goed","Gone","Went","Going"], correcta: "Went", puntos: 3 },
        { pregunta: "¿Cuál es el pasado de 'see'?", opciones: ["Saw","Seed","Seen","Sees"], correcta: "Saw", puntos: 3 },
        { pregunta: "¿Qué significa 'Sometimes'?", opciones: ["Siempre","Nunca","A veces","Jamás"], correcta: "A veces", puntos: 3 },
        { pregunta: "¿Qué significa 'Strong'?", opciones: ["Débil","Fuerte","Lento","Pequeño"], correcta: "Fuerte", puntos: 3 },
        { pregunta: "¿Qué significa 'Teacher is writing on the board'?", opciones: ["El maestro está escribiendo en el tablero","El maestro lee","El maestro camina","El maestro canta"], correcta: "El maestro está escribiendo en el tablero", puntos: 3 }
    ],
    experto: [
        { pregunta: "¿Qué significa 'She has been studying for three hours'?", opciones: ["Ella estudió hace tres horas","Ella ha estado estudiando por tres horas","Ella estudia tres horas","Ella estudiará tres horas"], correcta: "Ella ha estado estudiando por tres horas", puntos: 5 },
        { pregunta: "¿Cuál es el pasado participio de 'write'?", opciones: ["Written","Wrote","Writes","Writing"], correcta: "Written", puntos: 5 },
        { pregunta: "¿Qué significa 'Despite the rain, they played football'?", opciones: ["Aunque llovía, jugaron fútbol","Jugaron fútbol porque llovía","Esperaron a que lloviera","No jugaron fútbol"], correcta: "Aunque llovía, jugaron fútbol", puntos: 5 },
        { pregunta: "¿Qué significa 'If I had studied, I would have passed'?", opciones: ["Si estudio, paso","Si hubiera estudiado, habría aprobado","Si estudio, aprobaré","Si estudiara, aprobaría"], correcta: "Si hubiera estudiado, habría aprobado", puntos: 5 },
        { pregunta: "¿Qué significa 'Although he is young, he is very wise'?", opciones: ["Aunque es joven, es muy sabio","Porque es joven, es sabio","Cuando era joven, era sabio","Es sabio por ser joven"], correcta: "Aunque es joven, es muy sabio", puntos: 5 }
    ]
}


}
let preguntaActual = null;
let preguntasRestantes = [];
let puntajeTotal = 0;
let temaSeleccionado = "";
let nivelSeleccionado = "";
let ultimoPuntaje = 0;
let cuentaRegresiva;
let esHardcore = false;
let vidasRestantes = 5;
let rachaCorrectas = 0;
let tieneEscudo = false;
const maxVidas = 5;
let historialRespuestas = [];
let nivelesDesbloqueados = {
    facil: true,
    medio: false,
    dificil: false,
    experto: false
};

if (localStorage.getItem("nivelesDesbloqueados")) {
    nivelesDesbloqueados = JSON.parse(localStorage.getItem("nivelesDesbloqueados"));
}

function actualizarBotonesDeNivel() {
    const botones = {
        facil: document.querySelector("button[onclick*='facil']"),
        medio: document.querySelector("button[onclick*='medio']"),
        dificil: document.querySelector("button[onclick*='dificil']"),
        experto: document.querySelector("button[onclick*='experto']")
    };

    for (let nivel in botones) {
        if (nivelesDesbloqueados[nivel]) {
            botones[nivel].disabled = false;
            botones[nivel].classList.remove("bloqueado");
        } else {
            botones[nivel].disabled = true;
            botones[nivel].classList.add("bloqueado");
        }
    }
}

function seleccionarTema(tema) {
    temaSeleccionado = tema;
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("niveles").classList.remove("hidden");
    actualizarBotonesDeNivel();
}

function seleccionarNivel(nivel) {
    esHardcore = false;
    nivelSeleccionado = nivel;
    preguntasRestantes = [...preguntas[temaSeleccionado][nivelSeleccionado]];
    document.getElementById("niveles").classList.add("hidden");
    document.getElementById("juego").classList.remove("hidden");
    document.getElementById("tienda").classList.remove("hidden");
    document.getElementById("temporizador").style.display = "none";
    document.getElementById("vidasHardcore").style.display = "none";
    mostrarPregunta();
    document.getElementById("botonTienda").style.display = "block";
}


function iniciarModoHardcore() {
    esHardcore = true;
    vidasRestantes = maxVidas;
    actualizarVidas();
    preguntasRestantes = generarModoHardcore();
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("juego").classList.remove("hidden");
    document.getElementById("tienda").classList.remove("hidden");

    const musica = document.getElementById("musicaHardcore");
    if (musica) {
        musica.currentTime = 0;
        musica.play().catch(() => {});
    }

    mostrarPreguntaConTemporizador();
}

function generarModoHardcore() {
    const preguntasHardcore = [];
    for (const tema in preguntas) {
        for (const nivel in preguntas[tema]) {
            preguntasHardcore.push(...preguntas[tema][nivel]);
        }
    }
    return preguntasHardcore.sort(() => 0.5 - Math.random());
}

function mostrarPregunta() {
    if (preguntasRestantes.length === 0) {
        mostrarResultado();
        return;
    }

    preguntaActual = preguntasRestantes.splice(Math.floor(Math.random() * preguntasRestantes.length), 1)[0];
    document.getElementById("pregunta").innerText = preguntaActual.pregunta;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        boton.classList.add("opcion");
        boton.onclick = () => verificarRespuesta(opcion);
        opcionesDiv.appendChild(boton);
    });
}

function mostrarPreguntaConTemporizador() {
    clearInterval(cuentaRegresiva);

    if (preguntasRestantes.length === 0) {
        mostrarResultado();
        return;
    }

    preguntaActual = preguntasRestantes.splice(Math.floor(Math.random() * preguntasRestantes.length), 1)[0];
    document.getElementById("pregunta").innerText = preguntaActual.pregunta;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    preguntaActual.opciones.forEach(opcion => {
        const boton = document.createElement("button");
        boton.innerText = opcion;
        boton.classList.add("opcion");
        boton.onclick = () => {
            clearInterval(cuentaRegresiva);
            verificarRespuesta(opcion);
        };
        opcionesDiv.appendChild(boton);
    });

    let tiempo = esHardcore ? 8 : 15;
    const tiempoElemento = document.getElementById("temporizador");
    tiempoElemento.innerText = `⏱️ Tiempo: ${tiempo}s`;
    tiempoElemento.style.display = "block";

    cuentaRegresiva = setInterval(() => {
        tiempo--;
        tiempoElemento.innerText = `⏱️ Tiempo: ${tiempo}s`;
        if (tiempo <= 0) {
            clearInterval(cuentaRegresiva);
            verificarRespuesta(null);
        }
    }, 1000);
}

function verificarRespuesta(respuesta) {
    if (tieneEscudo) {
        tieneEscudo = false;
        Swal.fire("🛡️ Escudo te salvó", "No perdiste una vida.", "success");
        return mostrarPreguntaConTemporizador();
    }
    
    clearInterval(cuentaRegresiva);
    // Guardar en historial
    historialRespuestas.push({
        pregunta: preguntaActual.pregunta,
        respuestaUsuario: respuesta,
        correcta: preguntaActual.correcta,
        puntos: (respuesta === preguntaActual.correcta ? preguntaActual.puntos : 0)
    });
    const sonidoError = document.getElementById("sonidoError");

    const incorrecta = respuesta === null || respuesta !== preguntaActual.correcta;

    if (incorrecta) {
        if (esHardcore) {
            vidasRestantes--;
            actualizarVidas();
            document.body.classList.add("pantalla-roja");
            setTimeout(() => document.body.classList.remove("pantalla-roja"), 150);
        }

        if (sonidoError) {
            sonidoError.currentTime = 0;
            sonidoError.play().catch(() => {});
        }

        Swal.fire({
            icon: 'error',
            title: respuesta === null ? '¡Tiempo agotado!' : 'Incorrecto 😢',
            text: `La respuesta correcta era: "${preguntaActual.correcta}"`,
            confirmButtonColor: '#dc3545',
        }).then(() => {
            if (esHardcore) {
                mostrarPreguntaConTemporizador();
            } else {
                mostrarPregunta();
            }
        });
        return;
    }

    // Respuesta correcta
    rachaCorrectas++;
    if (esHardcore && rachaCorrectas >= 5 && vidasRestantes < maxVidas) {
        vidasRestantes++;
        rachaCorrectas = 0;
        actualizarVidas();
        Swal.fire({
            title: "💖 ¡Vida extra!",
            text: "Lograste una racha de 5 respuestas correctas.",
            icon: "success",
            confirmButtonColor: "#00ffae"
        });
    } else if (!esHardcore) {
        rachaCorrectas = 0;
    }

    puntajeTotal += preguntaActual.puntos;
    reproducirSonidoTema();
    actualizarHUD();
    revisarDesbloqueos();

    Swal.fire({
        icon: 'success',
        title: '¡Correcto!',
        text: `Ganaste ${preguntaActual.puntos} puntos.`,
        confirmButtonColor: '#28a745',
    }).then(() => {
        if (esHardcore) {
            mostrarPreguntaConTemporizador();
        } else {
            mostrarPregunta();
        }
    });
}

function actualizarVidas() {
    const contenedorVidas = document.getElementById("vidasHardcore");
    if (!esHardcore) {
        contenedorVidas.style.display = "none";
        return;
    }
    contenedorVidas.style.display = "block";
    let vidasHTML = "";

    for (let i = 0; i < maxVidas; i++) {
        if (i < vidasRestantes) {
            vidasHTML += `<span class="vida activa animar">❤️</span>`;
        } else {
            vidasHTML += `<span class="vida perdida">❤️</span>`;
        }
    }

    contenedorVidas.innerHTML = vidasHTML;

    if (vidasRestantes === 1) {
        contenedorVidas.classList.add("ultima");
    } else {
        contenedorVidas.classList.remove("ultima");
    }

    if (vidasRestantes <= 0) {
        finalizarHardcore();
    }
}

function finalizarHardcore() {
    document.body.classList.add("pantalla-roja");
    setTimeout(() => document.body.classList.remove("pantalla-roja"), 200);

    const resultadoFinal = document.createElement("div");
    resultadoFinal.classList.add("resultado-final");
    resultadoFinal.innerHTML = `
        <h2>🔥 Modo Hardcore Finalizado 🔥</h2>
        <p>Puntaje final: <strong>${puntajeTotal}</strong></p>
        <p>Vidas restantes: ${vidasRestantes}</p>
        <button onclick="reiniciarJuego()">Volver al menú</button>
    `;
    document.body.appendChild(resultadoFinal);

    setTimeout(() => resultadoFinal.classList.add("visible"), 100);
}

function mostrarResultado() {
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");

    let mensaje = `Puntaje final: ${puntajeTotal}`;
    if (esHardcore && vidasRestantes === maxVidas) {
        mensaje += `\n🔥 ¡Perfecto! No perdiste ninguna vida.`;
    }

    document.getElementById("puntaje").innerText = mensaje;

}

function reiniciarJuego() {
    esHardcore = false;
    puntajeTotal = 0;
    preguntaActual = null;
    preguntasRestantes = [];
    nivelSeleccionado = "";
    temaSeleccionado = "";
    vidasRestantes = maxVidas;

    const musica = document.getElementById("musicaHardcore");
    if (musica) {
        musica.pause();
        musica.currentTime = 0;
    }

    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("niveles").classList.add("hidden");
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("tienda").classList.add("hidden");
    document.getElementById("resultado").classList.add("hidden");
    document.getElementById("temporizador").style.display = "none";
    document.getElementById("vidasHardcore").style.display = "none";

    const panelFinal = document.querySelector(".resultado-final");
    if (panelFinal) panelFinal.remove();

    actualizarHUD();
    actualizarBotonesDeNivel();
}

function actualizarHUD() {
    const hud = document.getElementById("puntajeActual");
    const spanPuntos = document.getElementById("puntajeHUD");
    const sonido = document.getElementById("sonidoLevelUp");

    if (puntajeTotal > ultimoPuntaje) {
        hud.classList.add("level-up");
        setTimeout(() => hud.classList.remove("level-up"), 500);
        if (sonido) sonido.play().catch(() => {});
    }

    hud.classList.remove("verde", "amarillo", "rojo", "azul");
    if (puntajeTotal >= 10) hud.classList.add("azul");
    else if (puntajeTotal >= 5) hud.classList.add("amarillo");
    else if (puntajeTotal > 0) hud.classList.add("verde");
    else hud.classList.add("rojo");

    spanPuntos.innerText = puntajeTotal;
    ultimoPuntaje = puntajeTotal;
}

function reproducirSonidoTema() {
    let sonido = null;
    if (temaSeleccionado === "sociales") sonido = document.getElementById("sonidoCultura");
    else if (temaSeleccionado === "matematicas") sonido = document.getElementById("sonidoMatematicas");
    else if (temaSeleccionado === "ingles") sonido = document.getElementById("sonidoIngles");

    if (sonido) {
        sonido.currentTime = 0;
        sonido.play().catch(() => {});
    }
}


function revisarDesbloqueos() {
    let desbloqueo = null;
    if (puntajeTotal >= 35 && !nivelesDesbloqueados.experto) {
        nivelesDesbloqueados.experto = true;
        desbloqueo = "Experto";
    } else if (puntajeTotal >= 20 && !nivelesDesbloqueados.dificil) {
        nivelesDesbloqueados.dificil = true;
        desbloqueo = "Difícil";
    } else if (puntajeTotal >= 10 && !nivelesDesbloqueados.medio) {
        nivelesDesbloqueados.medio = true;
        desbloqueo = "Medio";
    }

    localStorage.setItem("nivelesDesbloqueados", JSON.stringify(nivelesDesbloqueados));
    actualizarBotonesDeNivel();

    if (desbloqueo) {
        Swal.fire({
            title: `¡Nuevo nivel desbloqueado!`,
            text: `Ahora puedes jugar en dificultad ${desbloqueo}.`,
            icon: 'info',
            confirmButtonColor: '#00ffff'
        });
    }
}
  function salir() {
    alert("Gracias por jugar. ¡Hasta pronto!");
    window.location.href = "index.html"; 
  }
function mostrarTienda() {
    const tienda = document.getElementById("tienda");
    tienda.classList.toggle("hidden");
}
function comprarAyuda(ayuda) {
    if (ayuda === 'escudo') {
        if (puntajeTotal >= 4) {
            tieneEscudo = true;
            puntajeTotal -= 4;
            actualizarHUD();
            Swal.fire("🛡️ Escudo activado", "Te salvará de una vida si fallas.", "info");
        } else {
            Swal.fire("Puntos insuficientes", "Necesitas al menos 4 puntos.", "warning");
        }
    } else if (ayuda === 'congelar') {
        if (puntajeTotal >= 3) {
            clearInterval(cuentaRegresiva);
            puntajeTotal -= 3;
            actualizarHUD();
            Swal.fire("❄️ Tiempo congelado", "¡Disfruta 5 segundos extra!", "info");
            setTimeout(() => mostrarPreguntaConTemporizador(), 5000);
        } else {
            Swal.fire("Puntos insuficientes", "Necesitas al menos 3 puntos.", "warning");
        }
    } else if (ayuda === 'visual') {
        if (puntajeTotal >= 2) {
            puntajeTotal -= 2;
            actualizarHUD();
            const opciones = document.querySelectorAll(".opcion");
            let incorrectas = Array.from(opciones).filter(btn => btn.innerText !== preguntaActual.correcta);
            if (incorrectas.length > 0) {
                let btn = incorrectas[Math.floor(Math.random() * incorrectas.length)];
                btn.style.opacity = 0.3;
                btn.style.pointerEvents = "none";
            }
            Swal.fire("🔍 Ayuda visual", "Se ha descartado una opción falsa.", "info");
        } else {
            Swal.fire("Puntos insuficientes", "Necesitas al menos 2 puntos.", "warning");
        }
    } else if (ayuda === '50-50') {
        if (puntajeTotal >= 1) {
            puntajeTotal -= 1;
            actualizarHUD();
            const opciones = document.querySelectorAll(".opcion");
            let incorrectas = Array.from(opciones).filter(btn => btn.innerText !== preguntaActual.correcta);
            incorrectas.sort(() => 0.5 - Math.random());
            incorrectas.slice(0, 2).forEach(btn => {
                btn.style.opacity = 0.3;
                btn.style.pointerEvents = "none";
            });
            Swal.fire("🌓 50/50", "Dos opciones incorrectas han sido eliminadas.", "info");
        } else {
            Swal.fire("Puntos insuficientes", "Necesitas al menos 1 punto.", "warning");
        }
    } else if (ayuda === 'pista') {
        if (puntajeTotal >= 2) {
            puntajeTotal -= 2;
            actualizarHUD();
            Swal.fire("💡 Pista", `La respuesta correcta comienza con: "${preguntaActual.correcta.charAt(0)}"`, "info");
        } else {
            Swal.fire("Puntos insuficientes", "Necesitas al menos 2 puntos.", "warning");
        }
    } else if (ayuda === 'cambiar') {
        if (puntajeTotal >= 3) {
            puntajeTotal -= 3;
            actualizarHUD();
            preguntasRestantes.push(preguntaActual); // Devuelve la actual al pool
            mostrarPreguntaConTemporizador();
            Swal.fire("🔄 Pregunta cambiada", "Ahora tienes una nueva pregunta.", "info");
        } else {
            Swal.fire("Puntos insuficientes", "Necesitas al menos 3 puntos.", "warning");
        }
    } else if (ayuda === 'auto') {
        if (puntajeTotal >= 5) {
            puntajeTotal -= 5;
            actualizarHUD();
            verificarRespuesta(preguntaActual.correcta);
            Swal.fire("✅ Respuesta automática", "¡Correcto sin esfuerzo!", "success");
        } else {
            Swal.fire("Puntos insuficientes", "Necesitas al menos 5 puntos.", "warning");
        }
    }
}
function mostrarRetroalimentacion() {
    document.getElementById("resultado").classList.add("hidden");
    const retroDiv = document.getElementById("retroalimentacion");
    retroDiv.classList.remove("hidden");

    const lista = document.getElementById("listaRespuestas");
    lista.innerHTML = "";

    historialRespuestas.forEach((item, index) => {
        const p = document.createElement("p");
        p.innerHTML = `
            <strong>Pregunta ${index + 1}:</strong> ${item.pregunta} <br>
            ➡️ Tu respuesta: <span style="color:${item.respuestaUsuario === item.correcta ? 'green':'red'}">
                ${item.respuestaUsuario || "No respondida"}
            </span><br>
            ✅ Correcta: ${item.correcta} <br>
            🏆 Puntos obtenidos: ${item.puntos}
        `;
        lista.appendChild(p);
    });
}

function volverResultado() {
    document.getElementById("retroalimentacion").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");
}
window.onload = () => {
    actualizarBotonesDeNivel();
};

        
