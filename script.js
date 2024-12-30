// work
// document.addEventListener("DOMContentLoaded", () => {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll(".sidebar ul li a");

//   sections[0].classList.add("active");
//   navLinks[0].classList.add("active");

//   navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault();
//       navLinks.forEach((nav) => nav.classList.remove("active"));
//       sections.forEach((section) => section.classList.remove("active"));

//       const targetId = link.getAttribute("href").slice(1);
//       document.getElementById(targetId).classList.add("active");
//       link.classList.add("active");
//     });
//   });
// });
// work

// project
// JavaScript para el filtrado
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
      });
      // Agregar la clase "active" al botón clickeado
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      // Filtrar los proyectos según el valor de filtro
      projects.forEach((project) => {
        if (filterValue === "all") {
          project.classList.remove("hidden");
        } else {
          const categories = project.getAttribute("data-categories").split(",");
          if (categories.includes(filterValue)) {
            project.classList.remove("hidden");
          } else {
            project.classList.add("hidden");
          }
        }
      });
    });
  });
});


//  input
// Seleccionamos los checkboxes
const dark1 = document.getElementById("dark");
const light2 = document.getElementById("light");
const custom3 = document.getElementById("custom");

// Establecer el modo dark por defecto
document.body.classList.add('theme-dark');
dark1.checked = true; 

// Establecer el modo dark por defecto
// document.body.classList.add("theme-light");
// light2.checked = true;

// Establecer el modo custom por defecto
// document.body.classList.add("theme-custom");
// custom3.checked = true;

// Cambiar a modo dark cuando el checkbox dark esté marcado
dark1.addEventListener("change", function () {
  if (dark1.checked) {
    // Agregar clase para dark y eliminar para light y custom
    document.body.classList.add("theme-dark");
    document.body.classList.remove("theme-light", "theme-custom");
    light2.checked = false; // Desmarcar el checkbox de light
    custom3.checked = false; // Desmarcar el checkbox de custom
  }
});

// Cambiar a modo light cuando el checkbox light esté marcado
light2.addEventListener("change", function () {
  if (light2.checked) {
    // Agregar clase para light y eliminar para dark y custom
    document.body.classList.add("theme-light");
    document.body.classList.remove("theme-dark", "theme-custom");
    dark1.checked = false; // Desmarcar el checkbox de dark
    custom3.checked = false; // Desmarcar el checkbox de custom
  }
});

// Cambiar a modo personalizado cuando el checkbox custom esté marcado
custom3.addEventListener("change", function () {
  if (custom3.checked) {
    // Agregar clase para custom y eliminar para dark y light
    document.body.classList.add("theme-custom");
    document.body.classList.remove("theme-dark", "theme-light");
    dark1.checked = false; // Desmarcar el checkbox de dark
    light2.checked = false; // Desmarcar el checkbox de light
  }
});

//navbar
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".navbar li a");

  links.forEach(link => {
    link.addEventListener("click", function() {
      // Elimina la clase 'active' de todos los enlaces
      links.forEach(l => l.classList.remove("active"));

      // Agrega la clase 'active' al enlace clickeado
      link.classList.add("active");
    });
  });
});
//navbar




// Definir los enlaces de las redes sociales
const socialLinks = {
  linkedin: "https://www.linkedin.com/in/xuan-camacho-meza-013051291/",
  github: "https://github.com/PK2-xuan",
  code: "https://github.com/tu-repositorio",
};

// Asignar los enlaces dinámicamente a los primeros elementos
Object.keys(socialLinks).forEach(id => {
  const element = document.getElementById(id);
  if (element) {
    element.href = socialLinks[id];
    element.target = "_blank"; // Añadir target="_blank" para abrir en una nueva pestaña
  }
});

// Asignar los enlaces dinámicamente a los elementos del segundo contenedor con id únicos
Object.keys(socialLinks).forEach(id => {
  const element = document.getElementById(id + "-second");
  if (element) {
    element.href = socialLinks[id];
    element.target = "_blank"; // Añadir target="_blank" para abrir en una nueva pestaña
  }
});






  // Seleccionamos el enlace de idioma y el menú desplegable
  
  const navbarDropdown = document.getElementById('navbarDropdown-offcanvas');
  const dropdownMenu = navbarDropdown.nextElementSibling; 

  dropdownMenu.style.display = 'none';

  navbarDropdown.addEventListener('click', function () {
    if (dropdownMenu.style.display === 'none') {
      dropdownMenu.style.display = 'block';
    } else {
      dropdownMenu.style.display = 'none';
    }
  });

  // Función para manejar la selección de idioma
  const languageLinks = dropdownMenu.querySelectorAll('a'); 
  languageLinks.forEach(link => {
    link.addEventListener('click', function () {
      dropdownMenu.style.display = 'none';
      languageLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });



  document.addEventListener('DOMContentLoaded', function () {
    // Seleccionamos el enlace de idioma y el menú desplegable del navbar
    const navbarDropdown = document.getElementById('navbarDropdown');
    const dropdownMenu = navbarDropdown.nextElementSibling; 
  
    dropdownMenu.style.display = 'none';
  
    navbarDropdown.addEventListener('click', function () {
      if (dropdownMenu.style.display === 'none') {
        dropdownMenu.style.display = 'block';
      } else {
        dropdownMenu.style.display = 'none';
      }
    });
  
    // Función para manejar la selección de idioma
    const languageLinks = dropdownMenu.querySelectorAll('a'); 
    languageLinks.forEach(link => {
      link.addEventListener('click', function () {
        dropdownMenu.style.display = 'none';
        languageLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
      });
    });
  
  });
  










// https://tienda-mara-fronted-es.vercel.app/
