// home
const homeData = {
  subtitle: {
    text: {
      es: "Sin Limites",
      en: "No Limit",
    },
  },

  paragraph: {
    text: {
      es: "Soy estudiante de Ingeniería de Sistemas, con enfoque en backend y frontend. Me estoy preparando para ser Fullstack y me apasiona crear soluciones web que hagan la diferencia.",
      en: "I am a Systems Engineering student, focusing on backend and frontend. I am preparing to be a Fullstack developer, and I am passionate about creating web solutions that make a difference.",
    },
  },

  button: {
    text: {
      es: "Contactame",
      en: "Contact me",
    },
  },
};

// menu

const menuData = [
  {
    label: {
      es: "Sobre mí",
      en: "About Me",
    },
  },
  {
    label: {
      es: "Proyectos",
      en: "Projects",
    },
  },
  {
    label: {
      es: "Contacto",
      en: "Contact",
    },
  },
  {
    label: {
      es: "Resumen",
      en: "Resume",
    },
  },
  {
    label: {
      es: "Oscuro",
      en: "Dark",
    },
  },
  {
    label: {
      es: "Claro",
      en: "Light",
    },
  },
  {
    label: {
      es: "Personalizado",
      en: "Personalized",
    },
  },
];

const offcanvasData = [
  {
    label: {
      es: "Sobre mí",
      en: "About Me",
    },
  },
  {
    label: {
      es: "Proyectos",
      en: "Projects",
    },
  },
  {
    label: {
      es: "Contacto",
      en: "Contact",
    },
  },
  {
    label: {
      es: "Resumen",
      en: "Resume",
    },
  },
];

// about me
// Obtén los elementos del DOM
const readMoreBtn = document.getElementById("readMoreBtn");
const readLessBtn = document.getElementById("readLessBtn");
const hiddenContent = document.getElementById("hiddenContent");
const ellipsis = document.getElementById("ellipsis");

function showMore() {
  hiddenContent.classList.add("visible"); // Muestra el contenido
  readMoreBtn.style.display = "none"; // Oculta el botón "Leer más"
  readLessBtn.style.display = "inline"; // Muestra el botón "Ver menos"

  // Asegúrate de que el span con el id "ellipsis" esté oculto
  const ellipsis = document.getElementById("ellipsis");
  if (ellipsis) {
    ellipsis.style.display = "none"; // Oculta los "..."
  }
}

// Función para mostrar menos contenido
function showLess() {
  hiddenContent.classList.remove("visible"); // Oculta el contenido
  readMoreBtn.style.display = "inline"; // Muestra el botón "Leer más"
  readLessBtn.style.display = "none"; // Oculta el botón "Ver menos"

  // Asegúrate de que el span con el id "ellipsis" esté visible
  const ellipsis = document.getElementById("ellipsis");
  if (ellipsis) {
    ellipsis.style.display = "inline"; // Muestra los "..."
  }
}
// about me

// language
const idiomeData = [
  {
    label: {
      es: "Idioma",
      en: "Language",
    },
  },
  {
    label: {
      es: "Español",
      en: "Spanish",
    },
  },
  {
    label: {
      es: "Inglés",
      en: "English",
    },
  },
];

const offcanvas_idiomeData = [
  {
    label: {
      es: "Idioma",
      en: "Language",
    },
  },
  {
    label: {
      es: "Español",
      en: "Spanish",
    },
  },
  {
    label: {
      es: "Inglés",
      en: "English",
    },
  },
];

// Objeto con los datos de los proyectos en diferentes idiomas
const projectData = {
  freelancer: {
    title: {
      es: "Proyecto Freelance",
      en: "Freelance Project",
    },
    projectName: {
      es: "Ecommerce MARA",
      en: "Ecommerce MARA",
    },
    description: {
      es: "Desarrollé un proyecto web de comercio electrónico para agilizar el proceso de compra online, mejorando la eficiencia de ventas y ofreciendo una experiencia de compra más rápida y fluida.",
      en: "I developed an e-commerce web project to streamline the online purchasing process, improving sales efficiency and providing a faster, smoother shopping experience.",
    },
  },

  backend: {
    title: {
      es: "Proyecto Backend",
      en: "Backend Project",
    },
    projectName: {
      es: "Gestión de Usuarios",
      en: "User Management",
    },
    description: {
      es: "Desarrollé un sistema de gestión de usuarios y roles, junto con un sistema de notificaciones, completamente enfocado en el backend. Utilicé JWT y Spring Security para garantizar la protección y encriptación de las sesiones, asegurando un acceso seguro y controlado para los usuarios.",
      en: "I developed a user and role management system, along with a notification system, fully focused on the backend. I used JWT and Spring Security to ensure session protection and encryption, providing secure and controlled access for users.",
    },
  },

  frontend: {
    title: {
      es: "Proyecto Frontend",
      en: "Frontend Project",
    },
    projectName: {
      es: "Lycoris",
      en: "Lycoris",
    },
    description: {
      es: "Lycoris es una web de compras donde los usuarios pueden seleccionar productos, añadirlos al carrito y proceder al pago mediante un sistema de validación con token y verificación RENIEC (API).",
      en: "Lycoris is a shopping website where users can select products, add them to the cart, and proceed to payment with a token validation system and RENIEC verification (API).",
    },
  },

  fullstack: {
    title: {
      es: "Proyecto Fullstack",
      en: "Fullstack Project",
    },
    projectName: {
      es: "Lotus",
      en: "Lotus",
    },
    description: {
      es: "Desarrollé un proyecto full-stack para la gestión de hotelería, optimizando la administración de habitaciones y reservaciones. Implementé un sistema de gestión de usuarios y sesiones, asegurando un acceso personalizado y seguro para administradores y clientes.",
      en: "I developed a full-stack project for hotel management, optimizing room and reservation management. I implemented a user and session management system, ensuring personalized and secure access for admins and clients.",
    },
  },
};
// boton filter
const filterData = {
  all: {
    es: "Todos",
    en: "All",
  },
};

//  title of the section
const titleSection = [
  {
    number: "01.",
    title: {
      es: "Sobre mí",
      en: "About Me",
    },
  },

  {
    number: "02.",
    title: {
      es: "Mis Proyectos",
      en: "My Projects",
    },
  },

  {
    number: "03.",
    title: {
      es: "03. ¿Qué sigue?",
      en: "03. What's Next?",
    },
  },
];

// Objeto con los datos de los contactos en diferentes idiomas
const contactData = {
  header: {
    title: {
      es: "Contactame!",
      en: "Contact Me!",
    },
  },

  content: {
    paragraph: {
      es: "Actualmente estoy buscando nuevos retos y proyectos. Si estás interesado en trabajar conmigo, ¡envíame un mensaje haciendo clic en el botón de abajo!",
      en: "I am currently looking for new challenges and projects. If you're interested in working with me, send me a message by clicking the button below!",
    },
    buttonText: {
      es: "Escríbeme",
      en: "Write Me",
    },
  },

  footer: {
    portfolioText: {
      es: "PORTAFOLIO | 2024",
      en: "PORTFOLIO | 2024",
    },
    credits: {
      es: "Diseñado y construido por Pk2 - Xuan",
      en: "Designed and built by Pk2 - Xuan",
    },
  },
};

// Objeto con los datos de sobre mi en diferentes idiomas
const aboutData = {
  header: {
    text: {
      es: "Hola, mi nombre es <b>Xuan Camacho</b>, soy un estudiante de Ingeniería de Sistemas de Perú <i class='flag-icon flag-icon-pe'></i>, con una gran pasión por la <b>programación</b> y el <b>desarrollo web</b>. Desde que empecé a programar, mi objetivo ha sido siempre que la tecnología sea accesible, sencilla y útil para todos. Me encanta estar al día con las tecnologías modernas y explorar cómo hacerlas más fáciles de usar.",
      en: "Hello, my name is <b>Xuan Camacho</b>, I am a Systems Engineering student from Peru <i class='flag-icon flag-icon-pe'></i>, with a great passion for <b>programming</b> and <b>web development</b>. Since I started programming, my goal has always been to make technology accessible, simple, and useful for everyone. I love staying up-to-date with modern technologies and exploring how to make them easier to use.",
    },
  },

  secondParagraph: {
    text: {
      es: "Me apasionan los videojuegos, y fue esa pasión la que me impulsó a aprender a programar. Creo que la tecnología debe ser una herramienta para mejorar la vida de las personas, y mi meta es contribuir a eso creando soluciones innovadoras <span id='ellipsis'>...</span>",
      en: "I am passionate about video games, and it was this passion that drove me to learn how to program. I believe that technology should be a tool to improve people's lives, and my goal is to contribute to that by creating innovative solutions <span id='ellipsis'>...</span>",
    },
  },

  hiddenContent: {
    text: {
      es: [
        "Soy un futuro <b>Fullstack Developer</b> con interés en <b>UX/UI</b>, buscando siempre mejorar la experiencia del usuario a través de un diseño intuitivo y eficaz. Aunque no tengo experiencia laboral formal aún, he trabajado en varios proyectos que me han permitido aprender y crecer en el desarrollo web.",
        "Mi lema es <b>Sempre Avanti</b> porque creo en avanzar siempre, sin rendirse. Mi sueño es llegar a ser CEO, liderando equipos que creen tecnologías que transformen el mundo.",
        "Algunas de las tecnologías que utilizo para construir sitios web y aplicaciones son:",
      ],
      en: [
        "I am a future <b>Fullstack Developer</b> with an interest in <b>UX/UI</b>, always seeking to improve the user experience through intuitive and effective design. Although I don't have formal work experience yet, I have worked on various projects that have allowed me to learn and grow in web development.",
        "My motto is <b>Sempre Avanti</b> because I believe in always moving forward, without giving up. My dream is to become a CEO, leading teams that create technologies that transform the world.",
        "Some of the technologies I use to build websites and applications are:",
      ],
    },
  },

  buttons: {
    readMore: {
      es: "Leer más",
      en: "Read more",
    },
    readLess: {
      es: "Ver menos",
      en: "Read less",
    },
  },
};

// Función para cambiar el idioma
function changeLanguage(language) {
  // Cambiar el contenido de los proyectos en función del idioma
  const projectKeys = ["freelancer", "backend", "frontend", "fullstack"];

  //   home
  // Cambiar el subtítulo
  document.getElementById("home-subtitle").textContent =
    homeData.subtitle.text[language];

  // Cambiar el párrafo
  document.getElementById("home-paragraph").textContent =
    homeData.paragraph.text[language];

  // Cambiar el botón
  document.getElementById("home-button").textContent =
    homeData.button.text[language];

  //   about
  // Función para mostrar más contenido

  // Cambiar el contenido de los párrafos y divs relacionados
  document.getElementById("about-header").innerHTML =
    aboutData.header.text[language];
  document.getElementById("about-second-paragraph").innerHTML =
    aboutData.secondParagraph.text[language];

  const hiddenContent = aboutData.hiddenContent.text[language];
  document.getElementById("about-hidden-content-1").innerHTML =
    hiddenContent[0];
  document.getElementById("about-hidden-content-2").innerHTML =
    hiddenContent[1];
  document.getElementById("about-hidden-content-3").innerHTML =
    hiddenContent[2];

  // Cambiar los botones de "Leer más" y "Ver menos"
  document.getElementById("readMoreBtn").textContent =
    aboutData.buttons.readMore[language];
  document.getElementById("readLessBtn").textContent =
    aboutData.buttons.readLess[language];
  //   about

  //   projects
  projectKeys.forEach((projectKey) => {
    document.getElementById(`project-title-${projectKey}`).textContent =
      projectData[projectKey].title[language];
    document.getElementById(`project-name-${projectKey}`).textContent =
      projectData[projectKey].projectName[language];
    document.getElementById(`project-description-${projectKey}`).textContent =
      projectData[projectKey].description[language];
  });

  //   contact
  document.getElementById("contact-title").textContent =
    contactData.header.title[language];
  document.getElementById("contact-paragraph").textContent =
    contactData.content.paragraph[language];
  document.getElementById("contact-button").textContent =
    contactData.content.buttonText[language];

  document.getElementById("contact-footer-portfolio").textContent =
    contactData.footer.portfolioText[language];
  document.getElementById("contact-footer-credits").textContent =
    contactData.footer.credits[language];

  // Cambiar los títulos de las secciones en función del idioma
  titleSection.forEach((section, index) => {
    const sectionElement = document.getElementById(
      `section-title-${index + 1}`
    );
    if (sectionElement) {
      sectionElement.textContent = section.title[language];
    }
  });

  // Cambiar los elementos del menú
  document.getElementById("nav-about").textContent =
    menuData[0].label[language]; // Sobre mí / About Me
  document.getElementById("nav-projects").textContent =
    menuData[1].label[language]; // Proyectos / Projects
  document.getElementById("nav-contact").textContent =
    menuData[2].label[language]; // Contacto / Contact
  document.getElementById("nav-resume").textContent =
    menuData[3].label[language]; // Resume / Resume
  document.getElementById("label-dark").textContent =
    menuData[4].label[language]; // Dark / Dark
  document.getElementById("label-light").textContent =
    menuData[5].label[language]; // Light / Light
  document.getElementById("label-custom").textContent =
    menuData[6].label[language]; // Personalized / Personalized

  // Cambiar el botón de filtro "All"
  document.getElementById("filter-all").textContent = filterData.all[language]; // All / Todos

  // Cambiar los enlaces del offcanvas
  document.getElementById("offcanvas-about").textContent =
    offcanvasData[0].label[language]; // Sobre mí / About Me
  document.getElementById("offcanvas-projects").textContent =
    offcanvasData[1].label[language]; // Proyectos / Projects
  document.getElementById("offcanvas-contact").textContent =
    offcanvasData[2].label[language]; // Contacto / Contact
  document.getElementById("offcanvas-cv").textContent =
    offcanvasData[3].label[language]; // CV / Resume

  // Cambiar los enlaces del offcanvas (menú de idiomas)
  document.getElementById("navbarDropdown").textContent =
    idiomeData[0].label[language]; // Idioma / Language

  document.getElementById("language-es").textContent =
    idiomeData[1].label[language]; // Español / Spanish

  document.getElementById("language-en").textContent =
    idiomeData[2].label[language]; // Inglés / English

  // Cambiar los enlaces del offcanvas ( offcanvas menú de idiomas)
  document.getElementById("navbarDropdown").textContent =
    offcanvas_idiomeData[0].label[language]; // Idioma / Language

  document.getElementById("language-es").textContent =
    offcanvas_idiomeData[1].label[language]; // Español / Spanish

  document.getElementById("language-en").textContent =
    offcanvas_idiomeData[2].label[language]; // Inglés / English
}

// Agregar eventos a los botones de idioma
document
  .getElementById("language-es")
  .addEventListener("click", () => changeLanguage("es"));
document
  .getElementById("language-en")
  .addEventListener("click", () => changeLanguage("en"));

document
  .getElementById("language-es2")
  .addEventListener("click", () => changeLanguage("es"));
document
  .getElementById("language-en2")
  .addEventListener("click", () => changeLanguage("en"));

// Llamada inicial (por defecto en español)
changeLanguage("es");
