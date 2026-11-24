/* MUESTRA — "Máscaras", de Edgar Dennis. Borrador para validar. */
window.APP = {
  muestra: "Muestra preliminar hecha por Antonio Salazar para Edgar Dennis. La versión final llevaría más capítulos, más frases del libro y sus enlaces de venta.",

  config: {
    wa: "",
    endpoint: "",
    registro: false,
    sitio: "muestras-apps.vercel.app/mascaras",
    firmado: "#",
    amz: "", ml: "", editorial: ""
  },

  libro: {
    titulo: "Máscaras",
    subtitulo: "Comprender cómo nace una adicción es el primer paso para recuperar tu vida",
    autor: "Edgar Dennis",
    autorCorto: "Edgar",
    editorial: "WAS Editorial",
    portada: "libro.jpg",
    gancho: "Nadie elige convertirse en adicto. Yo tampoco lo elegí.",
    fraseFinal: { t: "La recuperación no empieza cuando dejas de consumir; empieza cuando te atreves a mirarte de frente.", r: "Contraportada" },
    actos: [],
    evento: null
  },

  escena: "escena.jpg",

  textos: {
    empezar: "Mirarme de frente",
    resultado: "la máscara que más llevas es",
    caja1: "La máscara",
    caja2: "Lo que hay detrás",
    tarjeta: "La máscara que me estoy quitando",
    tarjeta2: "Lo que hay detrás",
    ritualTitulo: "7 días para mirarte de frente",
    nota: "¿Qué máscara estás listo para soltar?",
    firmado: "Quiero el libro (botón de muestra)",
    notaIntro: "Un ejercicio de reflexión basado en el libro. No es un diagnóstico.",
    pieLegal: "Ejercicio de reflexión; no es un diagnóstico ni sustituye atención profesional. Si tú o alguien que amas necesita orientación sobre una adicción, llama a la Línea de la Vida: 800 911 2000 (gratuita, 24 horas)."
  },

  etiquetas: { inicio: "Máscaras", preguntas: "El origen", resultado: "Mirarte de frente", ritual: "La salida" },

  tema: { cielo1: "#e9875a", cielo2: "#f3c08c", cielo3: "#f8ece2", fuerte: "#1f2340", acento: "#b08a3e", suave: "#e8d3b4", texto: "#1f2340", fondo: "#fbf7f2" },

  ritual: [
    ["Nómbrala", "Escribe: la máscara que más llevo es {nombreMin}. ¿Desde cuándo la uso?"],
    ["{tecnica} · 1", "{paso1}"],
    ["{tecnica} · 2", "{paso2}"],
    ["{tecnica} · 3", "{paso3}"],
    ["Mira lo que hay detrás", "Describe en tres líneas a la persona que hay detrás de la máscara: {naceMin}."],
    ["Lee el capítulo {cap}", "“{capTitulo}”. Subraya la frase que más te confronte."],
    ["Si no es ahora, ¿cuándo?", "Cuéntale a alguien de confianza qué máscara estás soltando."]
  ],

  intro: {
    titulo: "¿Qué máscara llevas puesta?",
    texto: "12 frases, tres minutos. Descubre qué máscara construiste para sobrevivir y da el primer paso para quitártela.",
    verso: { t: "Si no es aquí, ¿dónde? Si no es ahora, ¿cuándo? Si no eres tú, ¿quién?", r: "Edgar Dennis, Máscaras" }
  },

  escala: ["Nada", "Un poco", "Mucho, así soy yo"],

  resultados: {
    A: {
      nombre: "El que puede con todo", define: "Sostener una imagen de fuerza para no pedir ayuda",
      nace: "La libertad de decir: necesito ayuda",
      cap: 5, capTitulo: "La salida: RCP del alma",
      reflexion: "Construiste la imagen de alguien que siempre puede. Esa imagen te protegió, pero también te dejó solo con lo que más pesa.",
      cita: "Aceptar que tengo un problema, que no puedo solo y que necesito ayuda.",
      verso: null,
      tecnica: { titulo: "Ríndete", pasos: [
        "Escribe qué estás tratando de sostener solo en este momento.",
        "Nombra a una persona de confianza que podría ayudarte con eso.",
        "Pide ayuda esta semana en algo concreto, aunque sea pequeño."] },
      audio: ""
    },
    B: {
      nombre: "El “no pasa nada”", define: "Minimizar lo que empieza a crecer",
      nace: "La atención que cuida tu jardín",
      cap: 2, capTitulo: "La maleza",
      reflexion: "Lo que no se atiende no desaparece: crece en silencio. Mirar a tiempo no es exagerar, es cuidarte.",
      cita: "La adicción no creó el problema; como la maleza, solo encontró la grieta que nadie había reparado y creció dentro de ella.",
      verso: null,
      tecnica: { titulo: "Revisar el jardín", pasos: [
        "Haz una lista de las veces que este mes te dijiste “no pasa nada”.",
        "Elige una cosa de esa lista y atiéndela hoy, antes de que crezca.",
        "Pregúntale a alguien de confianza qué ve él en tu jardín."] },
      audio: ""
    },
    C: {
      nombre: "El que siente demasiado", define: "Callar una sensibilidad que nadie te enseñó a manejar",
      nace: "Tu sensibilidad como fortaleza",
      cap: 3, capTitulo: "El origen",
      reflexion: "Sentir con intensidad no te hace débil. El problema empieza cuando nadie te enseña qué hacer con lo que sientes y aprendes a esconderlo.",
      cita: "No es un defecto de carácter; es una característica con la que se nace.",
      verso: null,
      tecnica: { titulo: "Nombrar lo que sientes", pasos: [
        "Tres veces al día, detente y nombra en una palabra lo que sientes.",
        "Escribe una situación que te dolió más de lo que los demás entendieron.",
        "Comparte lo que sentiste con una persona segura, sin justificarte."] },
      audio: ""
    },
    D: {
      nombre: "La herida sin perdonar", define: "Cargar con una herida o una culpa que no se ha cerrado",
      nace: "El perdón que corta la cadena",
      cap: 5, capTitulo: "La salida: RCP del alma",
      reflexion: "Lo que no se perdona se sigue cargando, y muchas veces lo heredan quienes más amamos. Perdonar no es olvidar: es decidir que la historia no se repita.",
      cita: "Lo que me hizo perdonar fue darme cuenta del daño transgeneracional que uno causa y que solo en nuestras manos está el cortarlo y vivir la vida que merece ser vivida.",
      verso: null,
      tecnica: { titulo: "Perdona", pasos: [
        "Escribe el nombre de quien te falta perdonar, aunque seas tú.",
        "Escribe qué te ha costado cargar con eso y a quién más le ha tocado.",
        "Escribe una carta de perdón. No tienes que enviarla."] },
      audio: ""
    }
  },

  reactivos: [
    ["A", "Cuando algo me supera, prefiero resolverlo solo antes que pedir ayuda."],
    ["B", "Cuando algo me preocupa, me digo: “es solo una vez, no pasa nada”."],
    ["C", "Una crítica o una mirada de desaprobación me duele por días."],
    ["D", "Hay alguien a quien todavía no he podido perdonar."],
    ["A", "Me importa mucho que los demás me vean fuerte y en control."],
    ["B", "Dejo para después lo que sé que tendría que atender hoy."],
    ["C", "Siento las cosas con más intensidad que la gente a mi alrededor."],
    ["D", "Cargo con culpa por cosas que hice o que dejé de hacer."],
    ["A", "Por fuera parece que todo va bien, aunque por dentro estoy cansado."],
    ["B", "Me doy cuenta de los problemas cuando ya crecieron demasiado."],
    ["C", "Me da vergüenza mostrar lo que siento, así que mejor lo callo."],
    ["D", "Siento que repito heridas que viví en mi familia."]
  ],

  credito: { texto: "App creada por Antonio Salazar", link: "¿Quieres una para tu libro?", enlace: "https://tu-libro-en-una-app.vercel.app/" }
};
