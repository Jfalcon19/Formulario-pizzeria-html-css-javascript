// Función para cambiar entre modo claro y oscuro
document.getElementById('modoBtn').addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');
});

// Contador de caracteres para observaciones
document.getElementById('observaciones').addEventListener('input', function() {
    const caracteres = this.value.length;
    document.getElementById('contador').textContent = caracteres + '/200 caracteres';
});

// Calcular precio cuando cambian las selecciones
const inputsPrecio = document.querySelectorAll('input[name="tamano"], input[name="ingredientes"]');
inputsPrecio.forEach(input => {
    input.addEventListener('change', calcularPrecio);
});

function calcularPrecio() {
    let total = 0;
    
    // Precio por tamaño
    const tamano = document.querySelector('input[name="tamano"]:checked');
    if (tamano) {
        if (tamano.value === 'pequena') total += 5;
        else if (tamano.value === 'mediana') total += 10;
        else if (tamano.value === 'grande') total += 15;
    }
    
    // Precio por ingredientes
    const ingredientes = document.querySelectorAll('input[name="ingredientes"]:checked');
    ingredientes.forEach(ing => {
        if (ing.value === 'cebolla' || ing.value === 'champis' || ing.value === 'pepperoni' || ing.value === 'bacon') {
            total += 1;
        } else if (ing.value === 'atun' || ing.value === 'ternera') {
            total += 1.5;
        }
    });
    
    document.getElementById('totalPedido').textContent = 'Total: ' + total.toFixed(2) + '€';
}

// Validar formulario antes de enviar
document.getElementById('formularioPizza').addEventListener('submit', function(event) {
    let valido = true;
    
    // Limpiar errores anteriores
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

    // Validar campos obligatorios
    const nombre = document.getElementById('nombre');
    if (!nombre.value.trim()) {
        document.getElementById('errorNombre').textContent = 'El nombre es obligatorio';
        nombre.classList.add('error');
        valido = false;
    }

    const direccion = document.getElementById('direccion');
    if (!direccion.value.trim()) {
        document.getElementById('errorDireccion').textContent = 'La dirección es obligatoria';
        direccion.classList.add('error');
        valido = false;
    } else if (direccion.value.trim().length < 5) {
        document.getElementById('errorDireccion').textContent = 'La dirección debe tener al menos 5 caracteres';
        direccion.classList.add('error');
        valido = false;
    }

    const telefono = document.getElementById('telefono');
    if (!telefono.value.trim()) {
        document.getElementById('errorTelefono').textContent = 'El teléfono es obligatorio';
        telefono.classList.add('error');
        valido = false;
    } else if (!/^\d{9}$/.test(telefono.value)) {
        document.getElementById('errorTelefono').textContent = 'El teléfono debe tener exactamente 9 números';
        telefono.classList.add('error');
        valido = false;
    }

    const email = document.getElementById('email');
    if (!email.value.trim()) {
        document.getElementById('errorEmail').textContent = 'El email es obligatorio';
        email.classList.add('error');
        valido = false;
    } else if (!email.value.includes('@')) {
        document.getElementById('errorEmail').textContent = 'El email debe contener @';
        email.classList.add('error');
        valido = false;
    }
    
    // Validar que se seleccionó un tamaño
    if (!document.querySelector('input[name="tamano"]:checked')) {
        alert('Por favor, selecciona un tamaño de pizza');
        valido = false;
    }
    
    // Si hay errores, prevenir el envío
    if (!valido) {
        event.preventDefault();
        return;
    }
    
    // Confirmar antes de enviar
    if (!confirm('¿Estás seguro de que quieres realizar el pedido?')) {
        event.preventDefault();
        return;
    }
    
    // Mostrar mensaje con el importe
    const total = document.getElementById('totalPedido').textContent;
    alert('Pedido realizado con éxito.\n' + total + '\n¡Gracias por tu compra!');
});