document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-login');
    const fechar = document.getElementsByClassName('fechar')[0];
    const formLogin = document.getElementById('form-login');
    const conteudoPrincipal = document.getElementById('conteudo-principal');

    // Função para mostrar o modal após 10 segundos
    function mostrarModal() {
        modal.style.display = 'block';
        conteudoPrincipal.style.filter = 'blur(5px)'; // Aplica um efeito de desfoque ao conteúdo principal
        conteudoPrincipal.style.pointerEvents = 'none'; // Impede interações com o conteúdo principal
    }

    // Define o tempo para mostrar o modal (10 segundos)
    setTimeout(mostrarModal, 10000);

    // Fecha o modal ao clicar no botão de fechar
    fechar.onclick = function() {
        modal.style.display = 'none';
        conteudoPrincipal.style.filter = 'none'; // Remove o efeito de desfoque
        conteudoPrincipal.style.pointerEvents = 'auto'; // Permite interações com o conteúdo principal
    };

    // Processa o envio do formulário de login (você pode adicionar sua lógica de autenticação aqui)
    formLogin.onsubmit = function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
        // Adicione sua lógica de autenticação aqui
        alert('Login efetuado com sucesso!'); // Exemplo de mensagem de sucesso
        modal.style.display = 'none';
        conteudoPrincipal.style.filter = 'none';
        conteudoPrincipal.style.pointerEvents = 'auto';
    };
});

        let texto1 = document.getElementById('texto1');
        let texto2 = document.getElementById('texto2');
        let som1 = document.getElementById('som1');
        let som2 = document.getElementById('som2');

        texto1.addEventListener('mouseover', function(){
           som1.play();
        });

        texto1.addEventListener('mouseout' , function(){
            som1.pause();
            som1.currentTime =0;

        });

        texto2.addEventListener('mouseover', function(){
           som2.play();
        });

        texto2.addEventListener('mouseout' , function(){
            som2.pause();
            som2.currentTime =0;

        });