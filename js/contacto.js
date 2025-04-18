// Elementos del DOM
const contactoForm = document.getElementById('contactForm');
const nombreInput = document.getElementById('nombre');
const correoInput = document.getElementById('correo');
const direccionInput = document.getElementById('direccion');
const comunaSelect = document.getElementById('comuna');
const datosIngresadosDiv = document.getElementById('datosIngresados');
const resultadoFormDiv = document.getElementById('resultadoForm');

// Variables para almacenar los datos del formulario
let datosFormulario = {
    nombre: '',
    correo: '',
    direccion: '',
    comuna: ''
};

// Función para manejar el envío del formulario
function manejarEnvio(event) {
    event.preventDefault();
    
    // Guardar los datos en las variables
    datosFormulario = {
        nombre: nombreInput.value,
        correo: correoInput.value,
        direccion: direccionInput.value,
        comuna: comunaSelect.value
    };
    
    // Mostrar alerta con los datos
    mostrarAlerta();
    
    // Mostrar los datos en el navegador
    mostrarDatosEnPagina();
}

// Función para mostrar alerta con los datos
function mostrarAlerta() {
    const mensaje = `
        Datos recibidos:
        ----------------
        Nombre: ${datosFormulario.nombre}
        Correo: ${datosFormulario.correo}
        Dirección: ${datosFormulario.direccion}
        Comuna: ${datosFormulario.comuna}
    `;
    
    alert(mensaje);
}

// Función para mostrar los datos en la página
function mostrarDatosEnPagina() {
    // Construir HTML con los datos
    const datosHTML = `
        <div class="dato-item">
            <span class="dato-label">Nombre:</span>
            <span class="dato-valor">${datosFormulario.nombre}</span>
        </div>
        <div class="dato-item">
            <span class="dato-label">Correo electrónico:</span>
            <span class="dato-valor">${datosFormulario.correo}</span>
        </div>
        <div class="dato-item">
            <span class="dato-label">Dirección:</span>
            <span class="dato-valor">${datosFormulario.direccion}</span>
        </div>
        <div class="dato-item">
            <span class="dato-label">Comuna:</span>
            <span class="dato-valor">${datosFormulario.comuna}</span>
        </div>
    `;
    
    // Actualizar el contenido del div de resultados
    resultadoFormDiv.innerHTML = datosHTML;
    
    // Mostrar el contenedor de datos
    datosIngresadosDiv.style.display = 'block';
    
    // Opcional: limpiar el formulario
    contactoForm.reset();
}

// Event listener para el envío del formulario
contactoForm.addEventListener('submit', manejarEnvio);