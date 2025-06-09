function sobremi() {
  const seccion = document.querySelector('.section-sobremi');
  if (seccion) {
    seccion.scrollIntoView({ behavior: 'smooth' });
  }
}


function certificados() {
  mostrarConAnimacion(`
    <div class="contenido-general ">
      <div class="certificados">
        <a href="https://www.credly.com/badges/e07ff2dd-aff4-4faf-9318-00027745d4d9/linked_in_profile" class="certified" target="_blank">Cloud Computing Foundations</a>
        <a href="https://skillshop.exceedlms.com/student/award/JT5BttgL1cjNSYKMNC8WwGKj" class="certified" target="_blank">HTML y CSS 1</a>
        <a href="https://skillshop.exceedlms.com/student/award/7zLMm57RGiTZxz7EZzQWarDw" class="certified" target="_blank">HTML y CSS 2</a>
        <p>Insignas en <a href="https://www.linkedin.com/in/santiago-castellanos-84913a249/" target="_blank">LinkedIN</a></p>
      </div>
      
      <button class="boton-ocultar" onclick="ocultarGeneral()">Ocultar</button>
    </div>
  `);
}


function conocimientosinfo() {
  mostrarConAnimacion(`
    <div class="contenido-general">
      <div class="botones-logos">     
         
        <button class="boton-conocimiento" onclick="infoDB()">
          <img src="imgs/conocimientos/bd.png" alt="Logo-DataBase" class="imagen-lenguaje">
        </button>

        <button class="boton-conocimiento" onclick="infoFrontend()">
          <img src="imgs/conocimientos/frontend.png" alt="" class="imagen-lenguaje">
        </button>

        <button class="boton-conocimiento" onclick="infoLinux()">
          <img src="imgs/conocimientos/linux.png" alt="" class="imagen-lenguaje">
        </button>

        <button class="boton-conocimiento" onclick="infoJava()">
          <img src="imgs/conocimientos/java.png" alt="" class="imagen-lenguaje">
        </button>

        <button class="boton-conocimiento" onclick="infoGcloud()">
          <img src="imgs/conocimientos/gcloud.png" alt="" class="imagen-lenguaje">
        </button>
      </div>
      <button class="boton-ocultar" onclick="ocultarGeneral()">Ocultar</button>
    </div>
  `);
}

  

  // Funcion boton ocultar seccion de Conocimientos
  function ocultarGeneral() {
    const app = document.getElementById("info-nav");
    app.innerHTML = ""; // Limpia el contenido
  }
  
  function activarBoton(boton) {
    // Remueve la clase 'active' de todos los botones
    const botones = document.querySelectorAll('.c-nav-item');
    botones.forEach(b => b.classList.remove('active'));
  
    // Agrega la clase 'active' al botón clicado
    boton.classList.add('active');
  }
  
  // Animacion al presionar los botones nav
  function mostrarConAnimacion(html) {
    const app = document.getElementById("info-nav");
    app.innerHTML = html;
  
    setTimeout(() => {
      const contenido = document.querySelector('.contenido-general');
      if (contenido) {
        contenido.classList.add("mostrar");
      }
    }, 10);
  }
  