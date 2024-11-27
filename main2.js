import { datos } from "./js/datos.class.js";

const lista = []

const ul = document.getElementById('lista1');

document.addEventListener('DOMContentLoaded',()=>{
    listarDatos();
});

function listarDatos(){
    //ul.innerHTML = '';
    for(let dat of lista){
        const fila = creoFila(dat);
        ul.appendChild(fila);
    }
}

function creoFila(dato){
    const fila = document.createElement('li');
    fila.textContent = dato._nombre;
    return fila;
}

function agregar(event){
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const categoria = document.getElementById('categoria').value;

    const dato = new datos(nombre, precio, categoria);
    lista.push(dato);

    listarDatos();

    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('categoria').value = '';
}

const btn = document.getElementById('btn');
btn.addEventListener('click', agregar);