const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = 'Cambiar tema';
document.body.prepend(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

function copiarEmail() {
    const email = 'mirandaruiz1995hotmail@gmail.com';
    
    // Crear elemento temporal para copiar
    const tempInput = document.createElement('textarea');
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    
    try {
        document.execCommand('copy');
        alert('Correo copiado al portapapeles: ' + email);
    } catch (err) {
        alert('Error al copiar, intenta manualmente');
    }
    
    document.body.removeChild(tempInput);
}
