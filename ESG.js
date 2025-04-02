document.querySelectorAll('.topo').forEach(button => {
    button.addEventListener("click", function() {
        window.scrollTo({ 
            top: 0, 
            behavior: "smooth" 
        });
    });
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show'); // Alterna a classe 'show' para exibir ou ocultar o menu
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('menu').classList.remove('show');
    });
});
