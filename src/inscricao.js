//Funcão de envio de formulário
document.getElementById("form").addEventListener("submit", function(event) {
    //Evita o envio do formulário
    event.preventDefault();

    //Declaração das variáveis
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const termos = document.getElementById("termos").checked;
    let feedback = document.getElementById("feedback");

    //Impede o envio com alguma das informações faltando ou envia o formulário caso esteja completo
    if (!nome || !email || !telefone || !termos) {
        //Confirma o NÃO envio do formulário
        feedback.textContent = "Por favor, preencha todos os campos e aceite os termos e condições.";
        feedback.classList.remove("success");
        feedback.classList.add("error");
    } else {
        feedback.textContent = "Inscrição realizada com sucesso!";
        feedback.classList.remove("error");
        feedback.classList.add("success");

        //Confirma o envio com um feedback
        console.log("Nome: " + nome);
        console.log("E-mail: " + email);
        console.log("Telefone: " + telefone);
    }
});
