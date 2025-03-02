// Fonction pour le menu hamburger (changement en croix)
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    menu.classList.toggle('active');
    
    // Changer l'icône entre ☰ et ✖
    if (menu.classList.contains('active')) {
        hamburger.innerHTML = "✖"; // Croix
    } else {
        hamburger.innerHTML = "☰"; // Menu hamburger
    }
}

// Mise en évidence du lien actif dans le menu
const links = document.querySelectorAll(".navbar .nav-links li a");
links.forEach(links => {
    if (links.href == window.location.href) {
        links.classList.add("active");
    }
})

// Images pour le slider
const images = [
    "images/hero1.jpeg",
    "images/hero2.jpeg",
    "images/hero3.jpeg"
];

let index = 0;

// Changer d’image toutes les 5 secondes
function changeBackground() {
    document.querySelector('.hero-bg').style.backgroundImage = `url(${images[index]})`;
    index = (index + 1) % images.length;
}

// Démarrer le slider
setInterval(changeBackground, 5000);

// Initialisation de l’image de départ
window.onload = () => {
    document.querySelector('.hero-bg').style.backgroundImage = `url(${images[0]})`;
};

// Fonction pour ajouter des effets de clic supplémentaires ou de redirection.
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Par exemple, on peut ajouter une animation avant la redirection
        card.style.transition = 'transform 0.2s ease';
        card.style.transform = 'scale(0.98)'; // Réduction au clic
        setTimeout(() => {
            window.location.href = card.onclick; // Redirection après l'animation
        }, 200); // Délai pour laisser l'animation se faire
    });
});

// Fonction pour observer l'entrée des cartes dans la fenêtre visible
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Ajoute la classe 'visible' à la carte
            observer.unobserve(entry.target); // Ne plus observer cette carte une fois qu'elle est visible
        }
    });
}, {
    threshold: 0.5 // Considère la carte comme visible lorsqu'elle est à 50% dans la fenêtre
});

// Appliquer l'observer à chaque carte
document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Script pour ouvrir et fermer la lightbox
document.querySelectorAll('.lightbox-trigger').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let imageSrc = item.getAttribute('data-image');
        let lightbox = document.getElementById('lightbox');
        let lightboxImg = document.getElementById('lightbox-img');
        
        // Ouvre la lightbox avec l'image cliquée
        lightbox.style.display = 'flex';
        lightboxImg.src = imageSrc;
    });
});

// Fonction pour fermer la lightbox
document.querySelector('.lightbox .close').addEventListener('click', function() {
    let lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
});
    
// Ferme la lightbox si l'utilisateur clique à l'extérieur de l'image
document.querySelector('.lightbox').addEventListener('click', function(event) {
    if (event.target === this) {
        let lightbox = document.getElementById('lightbox');
        lightbox.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêche l'envoi réel (remplace par le message de confirmation)

        // Cacher le formulaire et afficher le message
        form.style.display = "none";
        confirmationMessage.classList.remove("hidden");
        confirmationMessage.classList.add("visible");

        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
            form.reset();
            form.style.display = "block";
            confirmationMessage.classList.remove("visible");
            confirmationMessage.classList.add("hidden");
        }, 3000);
    });
});
