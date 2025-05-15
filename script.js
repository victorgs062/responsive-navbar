const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function abrirModal(titulo, descricao) {
    document.getElementById('modalTitulo').innerText = titulo;
    document.getElementById('modalDescricao').innerText = descricao;
    document.getElementById('infoModal').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('infoModal').style.display = 'none';
}


// Fecha modal ao clicar fora do conteúdo
window.onclick = function(event) {
    const modal = document.getElementById('infoModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.getElementById("entrarBtn").addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "flex";
});

document.getElementById("loginModalClose").addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "none";
});

// Fechar ao clicar fora do modal
window.addEventListener("click", function (event) {
    const loginModal = document.getElementById("loginModal");
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});
