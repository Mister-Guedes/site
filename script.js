window.onload = function () {
    carregarVagasSalvas();
};

function cadastrarRegistro() {
    var nome = document.getElementById("nome").value;
    var ID = document.getElementById("ID").value;
    
    if (nome && ID) {
        var novonome = {
        nome: nome,
        ID: ID,
        };
    
      // Salva a vaga no localStorage
        salvarVaga(novonome);
    
      // Adiciona a vaga à lista na interface
        adicionarVagaNaLista(novonome);
    
      // Limpa o formulário após o cadastro
        document.getElementById("nome").value = "";
        document.getElementById("ID").value = "";
    } else {
        alert("Preencha todos os campos do formulário.");
    }
    }
    
    function adicionarVagaNaLista(vaga) {
        var listaVagas = document.getElementById("listaVagas");
        var novaVaga = document.createElement("li");
        novaVaga.innerHTML = `<strong>${vaga.nome}</strong>: ${vaga.ID}`;
        listaVagas.appendChild(novaVaga);
        }
    
        function salvarVaga(vaga) {
        // Recupera as vagas salvas no localStorage
        var vagasSalvas = JSON.parse(localStorage.getItem("vagas")) || [];
    
        // Adiciona a nova vaga à lista de vagas
        vagasSalvas.push(vaga);
    
        // Salva a lista atualizada no localStorage
        localStorage.setItem("vagas", JSON.stringify(vagasSalvas));
    }
    
        function carregarVagasSalvas() {
        // Recupera as vagas salvas no localStorage
        var vagasSalvas = JSON.parse(localStorage.getItem("vagas")) || [];
    
        // Adiciona as vagas à lista na interface
        vagasSalvas.forEach(vaga => adicionarVagaNaLista(vaga));
    }