const slides = [
  {
    title: 'Gestión de Turnos',
    content: `
      <ul class="space-y-3 text-lg">
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Selección guiada paso a paso</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Horarios disponibles en tiempo real</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Confirmación inmediata</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Historial completo de turnos</p></li>
      </ul>
    `,
  },
  {
    title: 'Portal para Pacientes',
    content: `
      <ul class="space-y-3 text-lg">
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Solicitud de turnos en pocos pasos</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Próximo turno visible</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Historial de consultas</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Acceso desde cualquier dispositivo</p></li>
      </ul>
    `,
  },
  {
    title: 'Panel de Administración',
    content: `
      <ul class="space-y-3 text-lg">
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Turnos de hoy y mañana</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Calendario interactivo</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Gestión de pacientes</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Gestión de profesionales</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Historial alfabético</p></li>
      </ul>
    `,
  },
  {
    title: 'Gestión de Profesionales',
    content: `
      <ul class="space-y-3 text-lg">
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Registro de médicos</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Configuración de horarios</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Organización por especialidades</p></li>
        <li class="flex gap-2"><i class="bx bx-seal-check text-green-500 text-3xl"></i><p>Control de disponibilidad</p></li>
      </ul>
    `,
  },
];

let current = 0;
let autoSlide;

const carousel = document.getElementById('carousel');
const prevSlideBtn = document.getElementById('prevSlideBtn');
const nextSlideBtn = document.getElementById('nextSlideBtn');
const contactForm = document.getElementById('contactForm');

function renderSlide() {
  carousel.innerHTML = `
    <h4 class="text-3xl font-bold mb-8">
      ${slides[current].title}
    </h4>

    ${slides[current].content}
  `;
}

function nextSlideAuto() {
  current = (current + 1) % slides.length;
  renderSlide();
}

function resetInterval() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlideAuto, 5000);
}

function nextSlide() {
  current = (current + 1) % slides.length;
  renderSlide();
  resetInterval();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  renderSlide();
  resetInterval();
}

//Formulario
function handleContactSubmit(e) {
  e.preventDefault();

  const nombre = contactForm.nombre.value;
  const email = contactForm.email.value;
  const telefono = contactForm.telefono.value;
  const consultorio = contactForm.consultorio.value;
  const mensaje = contactForm.mensaje.value;

  const subject = encodeURIComponent(
    'Solicitud de Demo - Devxis Design'
  );

  const body = encodeURIComponent(`
Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
Consultorio: ${consultorio}

Mensaje:
${mensaje}
  `);

  window.location.href = `mailto:alexis.r4995@gmail.com?subject=${subject}&body=${body}`;
}

renderSlide();

autoSlide = setInterval(nextSlideAuto, 5000);

nextSlideBtn.addEventListener('click', nextSlide);
prevSlideBtn.addEventListener('click', prevSlide);
contactForm.addEventListener('submit', handleContactSubmit);

//MENU MOBILE
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});