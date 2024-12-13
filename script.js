// Función para cambiar entre modo claro y oscuro
function cambiarModo() {
    document.body.classList.toggle('modo-oscuro');
}

// Añadir proyectos dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    const proyectos = [
        {
            nombre: "Java",
            descripcion: "Conocimientos intermedios en el lenguaje Java.",
            imagen: "Java.png", // Asegúrate de tener las imágenes en el directorio correcto

        },
        {
            nombre: "Python",
            descripcion: "Conocimientos basicos en este lenguaje por parte de Enyoi.",
            imagen: "python.png",

        },
        {
            nombre: "Javascript",
            descripcion: "Conocimientos basicos en este lenguaje por parte de Enyoi.",
            imagen: "Javascript.png",

        }
    ];

    const proyectosGrid = document.querySelector('.proyectos-grid');
    
    proyectos.forEach(proyecto => {
        const div = document.createElement('div');
        div.classList.add('proyecto');
        div.innerHTML = `
            <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
            <h3>${proyecto.nombre}</h3>
            <p>${proyecto.descripcion}</p>

        `;
        proyectosGrid.appendChild(div);
    });
});

// Validación del formulario de contacto
document.querySelector('form').addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        e.preventDefault();
        alert('Por favor, completa todos los campos.');
    } else {
        alert('¡Mensaje enviado correctamente!');
    }
});
