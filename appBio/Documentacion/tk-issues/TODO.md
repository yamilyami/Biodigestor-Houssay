# Tareas pendientes

## TK Issue #24
**Descripción**: Como diseñador, quiero colocar el logo del sitio en el navbar para mantener la identidad visual del sistema.

### Pasos:
1. Colocar el logo dentro del `navbar` en el archivo de plantilla HTML.
2. Ajustar el tamaño del logo con CSS.
3. Verificar que el logo se vea correctamente en todos los dispositivos (responsive design).

**Estado**: En progreso

**Responsable**: []

---

### Detalles técnicos

#### HTML:
```html : ejemplo;
<!-- Insertar el logo en la barra de navegación -->
<nav class="navbar">
  <div class="navbar-logo">
    <img src="assets/logo.png" alt="Logo del sitio" />
  </div>
  <ul class="navbar-menu">
    <li><a routerLink="/inicio">Inicio</a></li>
    <li><a routerLink="/quienes-somos">Quiénes Somos</a></li>
    <li><a routerLink="/preguntas-frecuentes">FAQ</a></li>
  </ul>
</nav>


css
/* Ajustar el tamaño del logo */
.navbar-logo img {
  height: 50px; /* Ajusta el tamaño */
}
Consideraciones:
Archivo del logo: El logo debe estar en assets/logo.png.
Responsive Design: Verificar que el logo se escale adecuadamente en dispositivos móviles. Posiblemente utilizar media queries: