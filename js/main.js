
// script del menu responsive Abrir el menu
var btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', function (e) {
    e.preventDefault()
    let mySidenav = document.getElementById("mySidenav")
    mySidenav.classList.toggle("openOffCanvas")
})

// script del menu responsive sticky menu

var nav = document.getElementById('mySidenav')

window.addEventListener('scroll', function () {
    if (window.pageYOffset > nav.offsetTop) {
        nav.classList.add('nav-fixed')
    } else {
        nav.classList.remove('nav-fixed')
    }
})
 // script del menu responsive effecto accordeon
var submenu = document.getElementsByClassName('link-submenu')

for (var i = 0; i < submenu.length; i++) {
    submenu[i].onclick = function () {
        var content = this.nextElementSibling

        if (content.style.maxHeight) {
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + "px"
        }

    }
}

// script del slider de producto
let activeImg = 0;

function slider(n) {
    let images = document.getElementsByClassName("slider-item");
    const totalImages = images.length; // Obtener el número total de imágenes

    if (totalImages === 0) return; // No hacer nada si no hay imágenes

    // Eliminar la clase "active" de la imagen actualmente activa
    for (let i = 0; i < totalImages; i++) {
        if (images[i].classList.contains("active")) {
            images[i].classList.remove("active");
            break;
        }
    }

    // Asegurarse de que el índice esté dentro del rango de imágenes
    if (n >= totalImages) {
        activeImg = 0;
    } else if (n < 0) {
        activeImg = totalImages - 1;
    } else {
        activeImg = n;
    }

    // Añadir la clase "active" a la imagen en el índice actual
    images[activeImg].classList.add("active");
}

function next() {
    let images = document.getElementsByClassName("slider-item");
    if (images.length === 0) return; // No hacer nada si no hay imágenes
    slider(activeImg + 1);
}

function previus() {
    let images = document.getElementsByClassName("slider-item");
    if (images.length === 0) return; // No hacer nada si no hay imágenes
    slider(activeImg - 1);
}

// Inicializar el primer slide
slider(activeImg);





document.addEventListener('DOMContentLoaded', function() {
    // Compartir enlace en WhatsApp
    document.querySelectorAll('.shareWhatsappBtn').forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del botón

            // Obtiene el enlace del producto desde el contenedor de la tarjeta
            const productLink = this.closest('.card').querySelector('.btn--mini-rounded[href*="producto.html"]').href;
            const whatsappLink = `https://wa.me/?text=${encodeURIComponent(productLink)}`;
            console.log('Compartir en WhatsApp:', whatsappLink); // Verifica el enlace en la consola
            window.open(whatsappLink, '_blank');
        });
    });

    // Copiar enlace al portapapeles
    document.querySelectorAll('.copyLinkBtn').forEach(btn => {
        btn.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento por defecto del botón

            // Obtiene el enlace del producto desde el contenedor de la tarjeta
            const productLink = this.closest('.card').querySelector('.btn--mini-rounded[href*="producto.html"]').href;
            navigator.clipboard.writeText(productLink).then(function() {
                alert('Enlace copiado al portapapeles');
            }, function(err) {
                console.error('Error al copiar el enlace: ', err);
            });
        });
    });
});


// script de la navegacipon por tabs
let tabs = Array.prototype.slice.apply(document.querySelectorAll('.tabs-item'))
let panels = Array.prototype.slice.apply(document.querySelectorAll('.tab-panel'))

document.getElementById('tabs').addEventListener('click', e => {
    if (e.target.classList.contains('tabs-item')) {
        let i = tabs.indexOf(e.target)
        tabs.map(tab => tab.classList.remove('active-tab'))
        tabs[i].classList.add('active-tab')
        panels.map(panel => panel.classList.remove('active-panel'))
        panels[i].classList.add('active-panel')
    }

})
