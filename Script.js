// Botón del tema oscuro
const themeToggle = document.createElement('button');
themeToggle.className = 'theme-toggle';
themeToggle.innerHTML = `
    <span class="theme-icon">🌙</span>
    <span class="theme-text">Modo Oscuro</span>
`;

// Contenedor de "Sobre mí"
document.querySelector('.theme-toggle-container').appendChild(themeToggle);

// Tema oscuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
// Cambia ícono y texto
    const isDark = document.body.classList.contains('dark-theme');
    themeToggle.querySelector('.theme-icon').textContent = isDark ? '☀️' : '🌙';
    themeToggle.querySelector('.theme-text').textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
});

// Detecta tema del sistema
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-theme');
    themeToggle.querySelector('.theme-icon').textContent = '☀️';
    themeToggle.querySelector('.theme-text').textContent = 'Modo Claro';
}

function copiarEmail() {
    const email = 'mirandaruiz1995hotmail@gmail.com';
    
    // Crea elemento temporal para copiar
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
