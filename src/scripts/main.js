const titulo = document.querySelector('.digitando');

function ativaLetra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, index)=> {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * index);
    });
}

ativaLetra(titulo);
