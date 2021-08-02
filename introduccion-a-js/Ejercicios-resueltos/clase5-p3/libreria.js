
export function crearElemento( elem, atributo = {}) {
    const elemento = document.createElement(elem);
    //elemento.id = atributo.id;
    elemento.type = atributo.type
    elemento.classList.add(atributo.className)
    elemento.placeholder = atributo.placeholder
    elemento.for = atributo.for
    elemento.innerText = atributo.for
    return elemento
}

export function render(elemento, nodoPadre) {
    return nodoPadre.appendChild(elemento)
}
