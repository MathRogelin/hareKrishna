document.addEventListener("DOMContentLoaded", () => {
    function ajustarLayout() {
        const largura = window.innerWidth;
        const divHorarios = document.querySelector("#horas");
    
        if (largura < 686) { // Dispositivos móveis
            divHorarios.classList.add('horariosResponsivo');
            divHorarios.classList.remove('horarios');
            divHorarios.innerHTML = `
                <details>
                    <summary>Templo Hare Krishna Florianópolis</summary>
                    <span>
                        O oficial website do Templo Hare Krishna Florianópolis
                    </span>
                    <br>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                </details>
            `;
        } else { // Dispositivos maiores
            divHorarios.classList.add('horarios');
            divHorarios.classList.remove('horariosResponsivo');
        }
    }

    ajustarLayout(); // Chama a função ao carregar a página
    window.addEventListener('resize', ajustarLayout); // Chama a função ao redimensionar a janela

    const inputCheck = document.querySelector("#inAbrir");
    const navbar = document.querySelector("nav");
    const links = document.querySelectorAll("#link_nav")
    // verifica se inputCheck e navbar são elementos válidos (ou seja, não são null ou undefined)
    if (inputCheck && navbar && links) {
        // Evento para mostrar/esconder navbar quando o checkbox mudar
        inputCheck.addEventListener('change', () => {
            if (inputCheck.checked) {
                navbar.style.display = 'flex';  // Exibe o menu
            } else {
                navbar.style.display = 'none';  // Esconde o menu
            }
        })
        
        links.forEach(link =>{
            link.addEventListener("click", ()=>{
                navbar.style.display = 'none';
            })
        })
    }
});
