// Obtener el elemento del lienzo
const canvas = document.getElementById('canvasH');
// obtiene el contexto 2D del canvas
const ctx = convas.getContext('2d');
// listado de palabras
const words = ['hola', 'adios']

// Variables
let selectW = ''; // palabra seleccionada
let guessedW = []; // palabra adivinada
let wrongL = []; // letras incorrectas
let attemps = 7; // intentos

// para seleccionar una palabra al azar 
function selectWord(){
    // math.floor genera un numero aleatorio entre 0 y la longitud de la matriz 'words'.
    // random genera numero aleatorio entre 1 y 0, luego es multiplicado por la longitud de la matriz 'word'
    // toLowerCase convierte la palabra seleccionada en minuscula, una vez seleccionado el indice.
    selectWord = word[Math.floor(Math.random() * words.length)].toLowerCase();
}