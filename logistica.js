const COMENTARIOS=JSON.parse(localStorage.getItem('COMENTARIOS')) || [];

document.getElementById('envio')?.addEventListener('click', function(e){
    e.preventDefault();
    let nuevoComentario;
    const txtCUADRO = document.getElementById('txt');
    const correoCUADRO = document.getElementById('correo');
    const comentario=document.getElementById('txt').value.trim();
    const Correo=document.getElementById('correo').value.trim();

    if (!comentario) {
        alert("Por favor ingresa un comentario");
        return;
    }

     if (Correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Correo)) {
        alert("Por favor ingresa un correo electrónico válido (ejemplo@dominio.com)");
        return;
    }

    if (Correo.length === 0) {
        nuevoComentario = { comentario }; 
    } else {
        nuevoComentario = { comentario, Correo };
    }
try {
    COMENTARIOS.push(nuevoComentario); 
        localStorage.setItem('COMENTARIOS', JSON.stringify(COMENTARIOS));
        alert("COMENTARIO ENVIADO");
        txtCUADRO.value = '';
        correoCUADRO.value = '';
    } catch (error) {
        alert("Error al guardar el comentario");
    }
});