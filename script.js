// Obtener el elemento del lienzo
const canvas = document.getElementById('hangmanCanvas');
// obtiene el contexto 2D del canvas
const ctx = convas.getContext('2d');
// listado de palabras
const words = ['hola', 'adios']

// Variables
let selectedWord = ''; // palabra seleccionada
let guessedWord = []; // palabra adivinada
let wrongLetter = []; // letras incorrectas
let attemps = 7; // intentos

// para seleccionar una palabra al azar 
function selectWord(){
    // math.floor genera un numero aleatorio entre 0 y la longitud de la matriz 'words'.
    // random genera numero aleatorio entre 1 y 0, luego es multiplicado por la longitud de la matriz 'word'
    // toLowerCase convierte la palabra seleccionada en minuscula, una vez seleccionado el indice.
    selectedWord = word[Math.floor(Math.random() * words.length)].toLowerCase();
    // para iniciar la palabra con guines
    guessedWord = Array(selectedWord.length).fill('_');
    displarWord(); 
}

// mostrar palabra a adivinar
function displarWord(){
    const wordContainer = document.getElementById('wordContainer');
    // palabra con espacios entre las letras ya adivinadas
    wordContainer.innerHTML = guessedWord.join('');
}

// crea botones para el alfabeto y los agrega al contenedor 'buttons'
function createLetterButons() {
    // por el id obtiene el elemento del contenedor
    const buttonsContainer = document.getElementById('buttons');
    // define una cadena que contiene toda las letras
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // recorre letra por letra
    for (let letter of alphabet){
        // crea un elemeto de boton html
        const button = document.createElement('button');
        // establece el texto del boton
        button.tectContent = letter;
        // agrega evento click al boton que llama a la funcion 'handleGuess' con la letra 
        button.addEventListener('click', () => handleGuess(letter));
        // agrega el boton al contenedor de botones
        buttonsContainer.appendChild(button);
    }




    // dibuja el ahorcado
    function drawHangman(){
        // borra el contenido que hubiese en el area del rectangulo
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);

        //dibuja la horca
        ctx.beginPath(); // indica que ese empieza a dibujar
        ctx.moveto(20, canvas.height - 20); // punto de inicio de la linea
        ctx.lineTo(20,20) // punto final de la linea e inicio de la siguiente
        ctx.lineTo(150,20);
        ctx.lineTo(150, 50);
        ctx.stroke(); // pinta las lineas, dibuja en el lienzo
    }
}