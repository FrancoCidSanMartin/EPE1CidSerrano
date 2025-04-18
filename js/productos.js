// Arreglo de productos con nombre y categoría
const productos = [
    { nombre: "Manzana", categoria: "Fruta" },
    { nombre: "Plátano", categoria: "Fruta" },
    { nombre: "Naranja", categoria: "Fruta" },
    { nombre: "Pera", categoria: "Fruta" },
    { nombre: "Uva", categoria: "Fruta" },
    { nombre: "Sandía", categoria: "Fruta" },
    { nombre: "Melón", categoria: "Fruta" },
    { nombre: "Tomate", categoria: "Verdura" },
    { nombre: "Lechuga", categoria: "Verdura" },
    { nombre: "Zanahoria", categoria: "Verdura" },
    { nombre: "Pepino", categoria: "Verdura" },
    { nombre: "Espinaca", categoria: "Verdura" },
    { nombre: "Brócoli", categoria: "Verdura" },
    { nombre: "Coliflor", categoria: "Verdura" },
    { nombre: "Cebolla", categoria: "Verdura" },
    { nombre: "Ajo", categoria: "Verdura" },
    { nombre: "Pimentón", categoria: "Verdura" }
];

// Elementos del DOM
const nombreInput = document.getElementById('nombre');
const categoriaSelect = document.getElementById('categoria');
const aplicarFiltroBtn = document.getElementById('aplicarFiltro');
const resultadosLista = document.getElementById('resultados');

// Función para cargar los productos iniciales
function cargarProductos() {
    mostrarProductos(productos);
}

// Función para filtrar productos
function filtrarProductos() {
    const nombreFiltro = nombreInput.value.toLowerCase();
    const categoriaFiltro = categoriaSelect.value.toLowerCase();
    
    const productosFiltrados = productos.filter(producto => {
        const coincideNombre = producto.nombre.toLowerCase().includes(nombreFiltro);
        const coincideCategoria = categoriaFiltro === 'todas' || 
                                producto.categoria.toLowerCase() === categoriaFiltro;
        
        return coincideNombre && coincideCategoria;
    });
    
    mostrarProductos(productosFiltrados);
}

// Función para mostrar productos en la lista
function mostrarProductos(productosAMostrar) {
    resultadosLista.innerHTML = '';
    
    if (productosAMostrar.length === 0) {
        resultadosLista.innerHTML = '<li class="no-results">No se encontraron productos con esos criterios</li>';
        return;
    }
    
    productosAMostrar.forEach(producto => {
        const li = document.createElement('li');
        li.className = `product-item ${producto.categoria.toLowerCase()}`;
        
        li.innerHTML = `
            <div class="product-name">${producto.nombre}</div>
            <span class="product-category ${producto.categoria.toLowerCase()}">${producto.categoria}</span>
        `;
        
        resultadosLista.appendChild(li);
    });
}

// Event listeners
aplicarFiltroBtn.addEventListener('click', filtrarProductos);

nombreInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        filtrarProductos();
    }
});

// Carga inicial de productos
document.addEventListener('DOMContentLoaded', cargarProductos);