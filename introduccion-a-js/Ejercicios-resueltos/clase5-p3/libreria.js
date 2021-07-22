
export function crearElemento( elem, atributo = {}) {
    const elemento = document.createElement(elem);
    //elemento.id = atributo.id;
    elemento.type = atributo.type
    elemento.max = atributo.max
    elemento.classList.add(atributo.className)
    elemento.placeholder = atributo.placeholder
    return elemento
}

export function render(elemento, nodoPadre) {
    return nodoPadre.appendChild(elemento)
}
