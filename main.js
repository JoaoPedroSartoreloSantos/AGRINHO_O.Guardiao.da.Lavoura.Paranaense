document.addEventListener("DOMContentLoaded", function() {
    const raizHtml = document.documentElement; 
    let tamanhoFonteBase = 16;

    const botaoAumentar = document.getElementById("botao-aumentar-zoom");
    const botaoDiminuir = document.getElementById("botao-diminuir-zoom");

    if (botaoAumentar && botaoDiminuir) {
        botaoAumentar.addEventListener("click", function() {
            if (tamanhoFonteBase < 26) { 
                tamanhoFonteBase += 2; 
                raizHtml.style.fontSize = tamanhoFonteBase + "px";
            }
        });

        botaoDiminuir.addEventListener("click", function() {
            if (tamanhoFonteBase > 12) { 
                tamanhoFonteBase -= 2;  
                raizHtml.style.fontSize = tamanhoFonteBase + "px";
            }
        });
    }
    
    const botaoMenuCelular = document.getElementById("botao-menu-celular");
    const menuLinks = document.getElementById("menu-links");
    const textoMenu = document.getElementById("texto-menu");
    const iconeMenu = document.getElementById("icone-menu");

    if (botaoMenuCelular && menuLinks) {
        botaoMenuCelular.addEventListener("click", function() {
            menuLinks.classList.toggle("ativo");
            
            if (menuLinks.classList.contains("ativo")) {
                textoMenu.textContent = "Fechar menu";
                iconeMenu.textContent = "✕"; 
            } else {
                textoMenu.textContent = "Abrir menu";
                iconeMenu.textContent = "☰"; 
            }
        });
    }
});
