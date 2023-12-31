// REPRODUCE VIDEO 
function getFullscreenElement() {
  return document.fullscreenElement
    || document.webkitFullscreenElement
    || document.mozFullscreenElement
    || document.msFullscreenElement
}

function iniciar() {
  let boton = document.getElementById('btnIntro');
  boton.addEventListener('click', presionar, false);
}
function presionar() {
  let video = document.getElementById('intro');
  video.play();
}
window.addEventListener('load', iniciar, false);

function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.getElementById("intro").requestFullscreen().catch(console.log);
    document.getElementById("intro").requestFullscreen().catch((e) => {
      document.getElementById("intro").style.display = "block";
      HTMLMediaElement.play();
    });
  }
}

function addEvent(element, evnt, funct) {
  if (element.attachEvent)
    return element.attachEvent('on' + evnt, funct);
  else
    return element.addEventListener(evnt, funct, false);
}

addEvent(
  document.getElementById('fullscreen'),
  'click',
  function () { toggleFullscreen(); }
);

document.getElementById("intro").style.display = "none";

const toggleModal1 = ((e) => {
    const modal = document.getElementById("modalContainer--medicinaInterna");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    }
  })
  const toggleModal2 = ((e) => {
    const modal = document.getElementById("modalContainer--geriatria");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    }
  })
  const toggleModal3 = ((e) => {
    const modal = document.getElementById("modalContainer--diabetes");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    }
  })
  const toggleModal4 = ((e) => {
    const modal = document.getElementById("modalContainer--longevidad");
    if (modal.style.display === "none") {
      modal.style.display = "block";
      trapped = trapFocus(modal);
    } else {
      modal.style.display = "none";
      trapped.onClose();
    }
  })

function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    let mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+528118016515';

formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    Swal.fire({
        title: '¡Gracias, en breve te comunicamos para agendar tu cita!',
        text: 'Mensaje para el cliente al agendar una cita',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    buttonSubmit.disabled = true
    setTimeout(() => {
        let nombreCompleto = document.querySelector('#nombreCompleto').value

        let fecha = document.querySelector('#fecha').value
        
        let hora = document.querySelector('#hora').value

        let mensaje = 'send?phone=' + telefono + '&text=*Agendar Cita*%0A*Hola, quiero agendar una cita, mi nombre es *%0A' + nombreCompleto + '%0A*Para el*%0A' + fecha + '%0A*A las*%0A' + hora + ''
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank')
        }else{
            window.open(urlDesktop + mensaje, '_blank')
        }
        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false
    }, 3000);
});