const valoresClicados = document.querySelector('#valores');

let contador = 0;
const clicando = () => {
    contador++;
    valoresClicados.innerHTML = contador;
};

const cancelando = () => {
    contador = 0;
    valoresClicados.innerHTML = contador;
};





