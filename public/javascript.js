const preguntas = {
  matematicas: {
    facil: [
      {
        pregunta: "¿Cuánto es 7 × 8?",
        opciones: ["54", "56", "58", "60"],
        correcta: "56",
        puntos: 1
      },
      {
        pregunta: "¿Cuál es el valor de la raíz cuadrada de 81?",
        opciones: ["7", "8", "9", "10"],
        correcta: "9",
        puntos: 1
      },
      {
        pregunta: "Si un triángulo tiene ángulos de 40° y 60°, ¿cuánto mide el tercero?",
        opciones: ["70°", "80°", "90°", "100°"],
        correcta: "80°",
        puntos: 1
      },
      {
        pregunta: "El área de un rectángulo de base 12 y altura 5 es:",
        opciones: ["17", "60", "25", "30"],
        correcta: "60",
        puntos: 1
      },
      {
        pregunta: "El valor absoluto de -15 es:",
        opciones: ["-15", "0", "15", "1"],
        correcta: "15",
        puntos: 1
      }
    ],
    medio: [
      {
        pregunta: "La pendiente de la recta y = 3x + 2 es:",
        opciones: ["2", "3", "-3", "1/3"],
        correcta: "3",
        puntos: 2
      },
      {
        pregunta: "¿Cuál es el discriminante de x² - 4x + 4?",
        opciones: ["16", "0", "8", "-4"],
        correcta: "0",
        puntos: 2
      },
      {
        pregunta: "Si un ángulo suplementario mide 110°, su suplemento mide:",
        opciones: ["70°", "80°", "90°", "100°"],
        correcta: "70°",
        puntos: 2
      },
      {
        pregunta: "¿Cuál es la solución de la ecuación 2x - 6 = 0?",
        opciones: ["x = 3", "x = -3", "x = 6", "x = 0"],
        correcta: "x = 3",
        puntos: 2
      },
      {
        pregunta: "¿Cuál es el área de un círculo de radio 7 (π≈3.14)?",
        opciones: ["154", "144", "147", "160"],
        correcta: "154",
        puntos: 2
      }
    ],
    dificil: [
      {
        pregunta: "Si f(x) = 2x² + 3x, ¿cuánto vale f(−2)?",
        opciones: ["−10", "2", "14", "−14"],
        correcta: "2",
        puntos: 3
      },
      {
        pregunta: "La factorización de x² - 9 es:",
        opciones: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)(x-3)", "(x+9)(x-1)"],
        correcta: "(x-3)(x+3)",
        puntos: 3
      },
      {
        pregunta: "La suma de los ángulos internos de un octágono es:",
        opciones: ["900°", "1080°", "1260°", "1440°"],
        correcta: "1080°",
        puntos: 3
      },
      {
        pregunta: "El valor de (2³) × (2²) es:",
        opciones: ["16", "32", "64", "128"],
        correcta: "32",
        puntos: 3
      },
      {
        pregunta: "¿Cuál es la pendiente de la recta que pasa por los puntos (1,2) y (3,6)?",
        opciones: ["2", "3", "4", "1"],
        correcta: "2",
        puntos: 3
      }
    ],
    experto: [
      {
        pregunta: "Si log₂(8) = x, el valor de x es:",
        opciones: ["2", "3", "4", "8"],
        correcta: "3",
        puntos: 4
      },
      {
        pregunta: "La ecuación de la recta perpendicular a y = 2x + 1 que pasa por (0,0) es:",
        opciones: ["y = -1/2 x", "y = 2x", "y = -2x", "y = 1/2 x"],
        correcta: "y = -1/2 x",
        puntos: 4
      },
      {
        pregunta: "El valor de la integral definida ∫₀² (x) dx es:",
        opciones: ["2", "4", "3", "5"],
        correcta: "2",
        puntos: 4
      },
      {
        pregunta: "En un triángulo rectángulo, si los catetos miden 9 y 12, la hipotenusa mide:",
        opciones: ["15", "14", "21", "13"],
        correcta: "15",
        puntos: 4
      },
      {
        pregunta: "Si una progresión aritmética tiene primer término 5 y diferencia 3, el séptimo término es:",
        opciones: ["20", "23", "26", "29"],
        correcta: "23",
        puntos: 4
      }
    ]
  },

  ingles: {
    facil: [
      {
        pregunta: "Choose the correct option: 'She ______ to school every day.'",
        opciones: ["go", "goes", "going", "gone"],
        correcta: "goes",
        puntos: 1
      },
      {
        pregunta: "Complete: 'I usually ______ coffee in the morning.'",
        opciones: ["drink", "drinks", "drinking", "drank"],
        correcta: "drink",
        puntos: 1
      },
      {
        pregunta: "What is the opposite of 'easy'?",
        opciones: ["light", "difficult", "heavy", "hardworking"],
        correcta: "difficult",
        puntos: 1
      },
      {
        pregunta: "Choose the correct plural: 'child'.",
        opciones: ["childs", "childes", "children", "childrens"],
        correcta: "children",
        puntos: 1
      },
      {
        pregunta: "Which sentence is correct?",
        opciones: [
          "He play football on Sundays.",
          "He plays football on Sundays.",
          "He playing football on Sundays.",
          "He played football on Sundays."
        ],
        correcta: "He plays football on Sundays.",
        puntos: 1
      }
    ],
    medio: [
      {
        pregunta: "Choose the correct past form: 'They ______ to the park yesterday.'",
        opciones: ["go", "goes", "went", "gone"],
        correcta: "went",
        puntos: 2
      },
      {
        pregunta: "Select the sentence in comparative form:",
        opciones: [
          "This book is good.",
          "This book is better than that one.",
          "This book is the best.",
          "This book is well."
        ],
        correcta: "This book is better than that one.",
        puntos: 2
      },
      {
        pregunta: "Identify the correct future form: 'Tomorrow I ______ my homework.'",
        opciones: ["will do", "do", "did", "doing"],
        correcta: "will do",
        puntos: 2
      },
      {
        pregunta: "Complete: 'She has lived here ______ 2015.'",
        opciones: ["since", "for", "by", "from"],
        correcta: "since",
        puntos: 2
      },
      {
        pregunta: "Choose the correct option: 'The film was ______ than the book.'",
        opciones: ["interesting", "more interesting", "most interesting", "interest"],
        correcta: "more interesting",
        puntos: 2
      }
    ],
    dificil: [
      {
        pregunta: "Choose the option that best completes the sentence: 'If I ______ harder, I would have passed the exam.'",
        opciones: ["study", "studied", "had studied", "have studied"],
        correcta: "had studied",
        puntos: 3
      },
      {
        pregunta: "Which sentence is in passive voice?",
        opciones: [
          "They write letters every day.",
          "Letters are written every day.",
          "They are writing letters every day.",
          "They wrote letters every day."
        ],
        correcta: "Letters are written every day.",
        puntos: 3
      },
      {
        pregunta: "Select the correct indirect question: 'Do you know ______?'",
        opciones: [
          "where is she",
          "where she is",
          "she is where",
          "is she where"
        ],
        correcta: "where she is",
        puntos: 3
      },
      {
        pregunta: "Choose the correct relative pronoun: 'The book ______ I bought was expensive.'",
        opciones: ["who", "which", "where", "when"],
        correcta: "which",
        puntos: 3
      },
      {
        pregunta: "Identify the correct form: 'She suggested ______ to the cinema.'",
        opciones: ["go", "going", "to going", "gone"],
        correcta: "going",
        puntos: 3
      }
    ],
    experto: [
      {
        pregunta: "Identify the correct reported speech: 'He said, I am studying English.'",
        opciones: [
          "He said he studies English.",
          "He said he was studying English.",
          "He said he is studying English.",
          "He said he studied English."
        ],
        correcta: "He said he was studying English.",
        puntos: 4
      },
      {
        pregunta: "Choose the sentence with a mixed conditional:",
        opciones: [
          "If I study, I will pass.",
          "If I had studied, I would pass now.",
          "If I studied, I would pass.",
          "If I had studied, I would have passed."
        ],
        correcta: "If I had studied, I would pass now.",
        puntos: 4
      },
      {
        pregunta: "Which option contains a phrasal verb meaning 'to cancel'?",
        opciones: ["put on", "put off", "call off", "take off"],
        correcta: "call off",
        puntos: 4
      },
      {
        pregunta: "Choose the correct sentence using 'wish':",
        opciones: [
          "I wish I have more money.",
          "I wish I had more money.",
          "I wish I will have more money.",
          "I wish to have more money."
        ],
        correcta: "I wish I had more money.",
        puntos: 4
      },
      {
        pregunta: "Identify the correct sentence with the passive causative:",
        opciones: [
          "I had my car repaired.",
          "I repaired my car.",
          "I had repair my car.",
          "I was repairing my car."
        ],
        correcta: "I had my car repaired.",
        puntos: 4
      }
    ]
  },

  sociales: {
    facil: [
      {
        pregunta: "¿En qué año se dio el Grito de Independencia en Colombia?",
        opciones: ["1810", "1819", "1821", "1816"],
        correcta: "1810",
        puntos: 1
      },
      {
        pregunta: "¿Qué civilización construyó las pirámides de Giza?",
        opciones: ["Mayas", "Egipcios", "Incas", "Aztecas"],
        correcta: "Egipcios",
        puntos: 1
      },
      {
        pregunta: "¿Quién fue el Libertador de cinco naciones sudamericanas?",
        opciones: ["Antonio Nariño", "Simón Bolívar", "Francisco de Paula Santander", "José de San Martín"],
        correcta: "Simón Bolívar",
        puntos: 1
      },
      {
        pregunta: "¿Cuál de las siguientes es una forma de gobierno democrática?",
        opciones: ["Dictadura", "Monarquía absoluta", "República", "Imperio"],
        correcta: "República",
        puntos: 1
      },
      {
        pregunta: "La capital del Virreinato de la Nueva Granada fue:",
        opciones: ["Quito", "Bogotá", "Cartagena", "Lima"],
        correcta: "Bogotá",
        puntos: 1
      }
    ],
    medio: [
      {
        pregunta: "La Primera Guerra Mundial inició en:",
        opciones: ["1914", "1918", "1939", "1929"],
        correcta: "1914",
        puntos: 2
      },
      {
        pregunta: "¿Cuál fue el principal producto de exportación de Colombia en el siglo XIX?",
        opciones: ["Petróleo", "Oro", "Tabaco", "Café"],
        correcta: "Tabaco",
        puntos: 2
      },
      {
        pregunta: "La Revolución Francesa se inició en el año:",
        opciones: ["1789", "1810", "1776", "1804"],
        correcta: "1789",
        puntos: 2
      },
      {
        pregunta: "¿Qué presidente estadounidense proclamó la Doctrina Monroe en 1823?",
        opciones: ["George Washington", "James Monroe", "Abraham Lincoln", "Thomas Jefferson"],
        correcta: "James Monroe",
        puntos: 2
      },
      {
        pregunta: "El movimiento conocido como 'Patria Boba' en Colombia se desarrolló entre:",
        opciones: ["1810-1816", "1819-1821", "1830-1840", "1789-1799"],
        correcta: "1810-1816",
        puntos: 2
      }
    ],
    dificil: [
      {
        pregunta: "La Batalla de Boyacá, decisiva para la independencia de Colombia, se libró en:",
        opciones: ["1810", "1819", "1821", "1824"],
        correcta: "1819",
        puntos: 3
      },
      {
        pregunta: "¿Qué tratado reconoció oficialmente la independencia de Panamá de Colombia?",
        opciones: ["Tratado de París", "Tratado Herrán-Hay", "Tratado de Neerlandia", "Tratado Urrutia-Thomson"],
        correcta: "Tratado Herrán-Hay",
        puntos: 3
      },
      {
        pregunta: "La Revolución Rusa de 1917 dio origen a:",
        opciones: ["La URSS", "La ONU", "La OTAN", "El Imperio Zarista"],
        correcta: "La URSS",
        puntos: 3
      },
      {
        pregunta: "¿Qué conflicto armado en Colombia inició en 1899?",
        opciones: ["La Guerra de los Mil Días", "La Guerra Civil de 1851", "El Bogotazo", "La Independencia"],
        correcta: "La Guerra de los Mil Días",
        puntos: 3
      },
      {
        pregunta: "¿Qué país fue gobernado por Augusto Pinochet tras un golpe de Estado en 1973?",
        opciones: ["Argentina", "Chile", "Perú", "Venezuela"],
        correcta: "Chile",
        puntos: 3
      }
    ],
    experto: [
      {
        pregunta: "El Plan Cóndor en América Latina fue:",
        opciones: [
          "Un tratado de integración económica",
          "Una alianza de dictaduras para reprimir opositores",
          "Un plan de cooperación ambiental",
          "Una estrategia militar de independencia"
        ],
        correcta: "Una alianza de dictaduras para reprimir opositores",
        puntos: 4
      },
      {
        pregunta: "¿Qué acontecimiento histórico ocurrió en 1929 y afectó la economía mundial?",
        opciones: [
          "La Primera Guerra Mundial",
          "La Gran Depresión",
          "La Segunda Guerra Mundial",
          "La Guerra Fría"
        ],
        correcta: "La Gran Depresión",
        puntos: 4
      },
      {
        pregunta: "La Constitución de 1991 en Colombia introdujo:",
        opciones: [
          "El voto femenino",
          "El reconocimiento de Colombia como un Estado social de derecho",
          "La separación de poderes",
          "La independencia de Panamá"
        ],
        correcta: "El reconocimiento de Colombia como un Estado social de derecho",
        puntos: 4
      },
      {
        pregunta: "El Tratado de Versalles puso fin a:",
        opciones: [
          "La Segunda Guerra Mundial",
          "La Primera Guerra Mundial",
          "La Guerra Fría",
          "La Revolución Francesa"
        ],
        correcta: "La Primera Guerra Mundial",
        puntos: 4
      },
      {
        pregunta: "¿Qué bloque político-militar se creó en 1949 como contrapeso a la URSS?",
        opciones: ["La ONU", "La OTAN", "El Pacto de Varsovia", "La Liga de Naciones"],
        correcta: "La OTAN",
        puntos: 4
      }
    ]
  }
};

let preguntaActual = null;
let preguntasRestantes = [];
let puntajeTotal = 0;        // Puntos normales (desbloqueos)
let puntajeHardcore = 0;     // Puntos hardcore (no desbloquea)
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

/* --- Manejo de niveles y menú --- */
function actualizarBotonesDeNivel() {
    const botones = {
        facil: document.querySelector("button[onclick*='facil']"),
        medio: document.querySelector("button[onclick*='medio']"),
        dificil: document.querySelector("button[onclick*='dificil']"),
        experto: document.querySelector("button[onclick*='experto']")
    };

    for (let nivel in botones) {
        if (!botones[nivel]) continue;
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
    document.getElementById("botonTienda").classList.add("hidden"); // 👈 se mantiene oculta
    document.getElementById("temporizador").style.display = "none";
    document.getElementById("vidasHardcore").style.display = "none";
document.getElementById("botonTienda").classList.remove("hidden");
    mostrarPregunta();
}

function iniciarModoHardcore() {
    esHardcore = true;
    puntajeHardcore = 0;
    vidasRestantes = maxVidas;
    actualizarVidas();
    preguntasRestantes = generarModoHardcore();
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("juego").classList.remove("hidden");
document.getElementById("botonTienda").classList.add("hidden"); // 👈 se mantiene oculta


    const musica = document.getElementById("musicaHardcore");
    if (musica) {
        musica.currentTime = 0;
        musica.play().catch(() => {});
    }
document.getElementById("botonTienda").classList.remove("hidden");
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

/* --- Flujo de preguntas --- */
function mostrarPregunta() {
    clearInterval(cuentaRegresiva);
    if (preguntasRestantes.length === 0) return mostrarResultado();

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
    if (preguntasRestantes.length === 0) return mostrarResultado();

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

/* --- Verificación de respuestas --- */
function verificarRespuesta(respuesta) {
    if (!preguntaActual) return;

    if (tieneEscudo) {
        tieneEscudo = false;
        Swal.fire("🛡️ Escudo te salvó", "No perdiste una vida.", "success");
        return esHardcore ? mostrarPreguntaConTemporizador() : mostrarPregunta();
    }

    clearInterval(cuentaRegresiva);
    const correcta = respuesta === preguntaActual.correcta;

    historialRespuestas.push({
        pregunta: preguntaActual.pregunta,
        respuestaUsuario: respuesta,
        correcta: preguntaActual.correcta,
        puntos: (correcta ? preguntaActual.puntos : 0)
    });

    if (!correcta) {
        if (esHardcore) {
            vidasRestantes--;
            actualizarVidas();
            document.body.classList.add("pantalla-roja");
            setTimeout(() => document.body.classList.remove("pantalla-roja"), 150);
        }
        Swal.fire({
            icon: 'error',
            title: respuesta === null ? '¡Tiempo agotado!' : 'Incorrecto 😢',
            text: `La respuesta correcta era: "${preguntaActual.correcta}"`,
            confirmButtonColor: '#dc3545',
        }).then(() => esHardcore ? mostrarPreguntaConTemporizador() : mostrarPregunta());
        return;
    }

    // Respuesta correcta
    if (esHardcore) {
        puntajeHardcore += preguntaActual.puntos;
    } else {
        puntajeTotal += preguntaActual.puntos;
        revisarDesbloqueos();
    }

    actualizarHUD();
    Swal.fire({
        icon: 'success',
        title: '¡Correcto!',
        text: `Ganaste ${preguntaActual.puntos} puntos.`,
        confirmButtonColor: '#28a745',
    }).then(() => esHardcore ? mostrarPreguntaConTemporizador() : mostrarPregunta());
}

/* --- Vidas y HUD --- */
function actualizarVidas() {
    const contenedorVidas = document.getElementById("vidasHardcore");
    if (!esHardcore) return contenedorVidas.style.display = "none";

    contenedorVidas.style.display = "block";
    let vidasHTML = "";
    for (let i = 0; i < maxVidas; i++) {
        vidasHTML += (i < vidasRestantes) ? `<span class="vida activa">❤️</span>` : `<span class="vida perdida">❤️</span>`;
    }
    contenedorVidas.innerHTML = vidasHTML;
    if (vidasRestantes <= 0) finalizarHardcore();
}

function actualizarHUD() {
    const spanPuntos = document.getElementById("puntajeHUD");
    let puntos = esHardcore ? puntajeHardcore : puntajeTotal;
    spanPuntos.innerText = puntos;
    ultimoPuntaje = puntos;
}

/* --- Resultados --- */
function finalizarHardcore() {
    const resultadoFinal = document.createElement("div");
    resultadoFinal.classList.add("resultado-final");
    resultadoFinal.innerHTML = `
        <h2>🔥 Modo Hardcore Finalizado 🔥</h2>
        <p>Puntaje final: <strong>${puntajeHardcore}</strong></p>
        <p>Vidas restantes: ${vidasRestantes}</p>
        <button onclick="reiniciarJuego()">Volver al menú</button>
    `;
    document.body.appendChild(resultadoFinal);
    setTimeout(() => resultadoFinal.classList.add("visible"), 100);
}

function mostrarResultado() {
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");

    if (esHardcore) {
        document.getElementById("puntaje").innerText = `Modo Hardcore — Puntaje final: ${puntajeHardcore}`;
    } else {
        document.getElementById("puntaje").innerText = `Puntaje final: ${puntajeTotal}`;
    }
}

function reiniciarJuego() {
    esHardcore = false;
    puntajeTotal = 0;
    puntajeHardcore = 0;
    preguntaActual = null;
    preguntasRestantes = [];
    nivelSeleccionado = "";
    temaSeleccionado = "";
    vidasRestantes = maxVidas;
    historialRespuestas = [];

    const musica = document.getElementById("musicaHardcore");
    if (musica) { musica.pause(); musica.currentTime = 0; }

    document.getElementById("menu").classList.remove("hidden");
    document.getElementById("niveles").classList.add("hidden");
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("tienda").classList.add("hidden");
document.getElementById("botonTienda").classList.add("hidden");
    document.getElementById("resultado").classList.add("hidden");
    document.getElementById("temporizador").style.display = "none";
    document.getElementById("vidasHardcore").style.display = "none";

    const panelFinal = document.querySelector(".resultado-final");
    if (panelFinal) panelFinal.remove();

    actualizarHUD();
    actualizarBotonesDeNivel();
}

/* --- Desbloqueos --- */
function revisarDesbloqueos() {
    let desbloqueo = null;
    if (puntajeTotal >= 1 && !nivelesDesbloqueados.experto) {
        nivelesDesbloqueados.experto = true; desbloqueo = "Experto";
    } else if (puntajeTotal >= 1 && !nivelesDesbloqueados.dificil) {
        nivelesDesbloqueados.dificil = true; desbloqueo = "Difícil";
    } else if (puntajeTotal >= 1 && !nivelesDesbloqueados.medio) {
        nivelesDesbloqueados.medio = true; desbloqueo = "Medio";
    }
    localStorage.setItem("nivelesDesbloqueados", JSON.stringify(nivelesDesbloqueados));
    actualizarBotonesDeNivel();
    if (desbloqueo) {
        Swal.fire({ title: `¡Nuevo nivel desbloqueado!`, text: `Ahora puedes jugar en dificultad ${desbloqueo}.`, icon: 'info' });
    }
}

/* --- Tienda y retroalimentación (igual que tu versión) --- */
function mostrarTienda() {
    document.getElementById("tienda").classList.toggle("hidden");
}

function comprarAyuda(ayuda) {
    let puntosRef = esHardcore ? puntajeHardcore : puntajeTotal;
    let costos = { 
        "50-50": 2, 
        "pista": 2, 
        "cambiar": 3, 
        "auto": 6, 
        "escudo": 4, 
        "congelar": 3, 
        "visual": 1 
    };
    let costo = costos[ayuda];

    if (puntosRef < costo) {
        return Swal.fire("⚠️ Puntos insuficientes", `Necesitas al menos ${costo} puntos.`, "warning");
    }

    // Descontar puntos
    if (esHardcore) puntajeHardcore -= costo; 
    else puntajeTotal -= costo;
    actualizarHUD();

    // Aplicar efecto de la ayuda
    if (ayuda === "escudo") {
        tieneEscudo = true;
    }
    if (ayuda === "auto") {
        verificarRespuesta(preguntaActual.correcta);
    }
    if (ayuda === "pista") {
        Swal.fire("💡 Pista", `La respuesta correcta comienza con: "${preguntaActual.correcta.charAt(0)}"`, "info");
    }
    if (ayuda === "50-50") {
        const opciones = document.querySelectorAll(".opcion");
        let incorrectas = Array.from(opciones).filter(b => b.innerText !== preguntaActual.correcta);
        incorrectas.slice(0, 2).forEach(b => { b.style.opacity=0.3; b.style.pointerEvents="none"; });
    }
    if (ayuda === "visual") {
        const opciones = document.querySelectorAll(".opcion");
        let incorrectas = Array.from(opciones).filter(b => b.innerText !== preguntaActual.correcta);
        let b = incorrectas[Math.floor(Math.random()*incorrectas.length)];
        if (b) { b.style.opacity=0.3; b.style.pointerEvents="none"; }
    }
    if (ayuda === "cambiar") {
        mostrarPreguntaConTemporizador();
    }
    if (ayuda === "congelar") {
        clearInterval(cuentaRegresiva);
        setTimeout(()=>mostrarPreguntaConTemporizador(), 5000);
    }

    // ✅ Confirmación de uso
    Swal.fire("✅ Ayuda usada", `Has utilizado la ayuda: ${ayuda.toUpperCase()}.`, "success");
}


function mostrarRetroalimentacion() {
    document.getElementById("resultado").classList.add("hidden");
    const retroDiv = document.getElementById("retroalimentacion");
    retroDiv.classList.remove("hidden");
    const lista = document.getElementById("listaRespuestas");
    lista.innerHTML = "";
    historialRespuestas.forEach((item, i) => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>Pregunta ${i+1}:</strong> ${item.pregunta}<br>➡️ Tu respuesta: <span style="color:${item.respuestaUsuario===item.correcta?'green':'red'}">${item.respuestaUsuario||"No respondida"}</span><br>✅ Correcta: ${item.correcta}<br>🏆 Puntos obtenidos: ${item.puntos}`;
        lista.appendChild(p);
    });
}

function volverResultado() {
    document.getElementById("retroalimentacion").classList.add("hidden");
    document.getElementById("resultado").classList.remove("hidden");
}

// Salir del juego: vuelve al menú principal
function salir() {
    window.location.href = "https://proyecto2025-galvis.vercel.app"; 
}

// Retroceder desde niveles a menú
function retrocederDesdeNiveles() {
    document.getElementById("niveles").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}

// Retroceder desde el juego a niveles
function retrocederDesdeJuego() {
    document.getElementById("juego").classList.add("hidden");
    document.getElementById("tienda").classList.add("hidden");
    document.getElementById("niveles").classList.remove("hidden");
}

/* --- Al cargar --- */
window.onload = () => actualizarBotonesDeNivel();
