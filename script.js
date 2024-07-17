function agregarPrimerProceso() {
    const memoriaTotal = parseInt(document.getElementById('memoriaTotal').value);
    const memoriaUsuario = parseInt(document.getElementById('memoriaUsuario').value);
    const memoriaUsuario2 = parseInt(document.getElementById('memoriaUsuario2').value);
    const memoriaSo = 30; // Memoria fija del SO
    const memoriaDisponible = memoriaTotal - memoriaSo; // Memoria disponible para usuario

    // Validar que el valor ingresado no exceda la memoria disponible
    if (memoriaUsuario > memoriaDisponible) {
        alert('Se excedió de la memoria disponible para el usuario.');
        return;
    }

    if (memoriaUsuario2 > 0) {
        alert('Error: Solo se puede tener un proceso de usuario a la vez.');
        return;
    }


    document.getElementById('soSize').textContent = memoriaSo;
    document.getElementById('usuarioSize').textContent = memoriaDisponible;

    // Actualizar anchos de las secciones basado en porcentajes
    document.getElementById('memoriaSo').style.width = `${(memoriaSo / memoriaTotal) * 100}%`;
    document.getElementById('usuarioMemoriaPantalla').style.width = `${(memoriaDisponible / memoriaTotal) * 100}%`;

    // Mostrar y actualizar la partición de usuario si el valor es válido
    if (memoriaUsuario <= memoriaDisponible && memoriaUsuario > 0) {
        document.getElementById('usuarioParticion').style.display = 'flex';
        document.getElementById('usuarioParticionSize').textContent = memoriaUsuario;
        document.getElementById('usuarioParticion').style.width = `${(memoriaUsuario / memoriaDisponible) * 100}%`;
        document.getElementById('usuarioParticion2').style.display = 'none';
    } else {
        document.getElementById('usuarioParticion').style.display = 'none';
    }

    // Validar si hay un proceso de segundo usuario activo
    /*if (memoriaUsuario2 > 0) {
        alert('Error: Solo se puede tener un proceso de usuario a la vez.');
        document.getElementById('memoriaUsuario2').value = 0;
        document.getElementById('usuarioParticion2').style.display = 'none';
    }*/
}

// Función para validar y mostrar alerta si ya hay un proceso
function agregarSegundoProceso() {
    const memoriaUsuario = parseInt(document.getElementById('memoriaUsuario').value);
    const memoriaUsuario2 = parseInt(document.getElementById('memoriaUsuario2').value);
    const memoriaTotal = parseInt(document.getElementById('memoriaTotal').value);
    const memoriaSo = 30; // Memoria fija del SO
    const memoriaDisponible = memoriaTotal - memoriaSo; // Memoria disponible para usuario

    if (memoriaUsuario2 > memoriaDisponible) {
        alert('Se excedió de la memoria disponible para el segundo usuario.');
        return;
    }


    if (memoriaUsuario > 0) {
        alert('Error: Solo se puede tener un proceso de usuario a la vez.');
    } else if (memoriaUsuario2 > 0) {
        document.getElementById('usuarioParticion2').style.display = 'flex';
        document.getElementById('usuarioParticionSize2').textContent = memoriaUsuario2;
        document.getElementById('usuarioParticion2').style.width = `${(memoriaUsuario2 / memoriaDisponible) * 100}%`;
        document.getElementById('usuarioParticion').style.display = 'none';
    } else {
        document.getElementById('usuarioParticion2').style.display = 'none';
    }
    
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    agregarPrimerProceso();
});

// Actualizar la memoria del usuario cuando se presiona el botón
document.getElementById('agregarBoton').addEventListener('click', function() {
    agregarPrimerProceso();
});

// Agregar un segundo proceso cuando se presiona el botón
document.getElementById('agregarBoton2').addEventListener('click', function() {
    agregarSegundoProceso();
});