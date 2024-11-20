document.getElementById("form").addEventListener("submit", function(event) {
   event.preventDefault();

   const nome = document.getElementById("nome").value;
   const email = document.getElementById("email").value;
   const telefone = document.getElementById("telefone").value;
   const termos = document.getElementById("termos").checked;

   let feedback = document.getElementById("feedback");

   if (!nome || !email || !telefone || !termos) {
       feedback.textContent = "Por favor, preencha todos os campos e aceite os termos e condições.";
       feedback.classList.remove("success");
       feedback.classList.add("error");
   } else {
       feedback.textContent = "Inscrição realizada com sucesso!";
       feedback.classList.remove("error");
       feedback.classList.add("success");

       console.log("Nome: " + nome);
       console.log("E-mail: " + email);
       console.log("Telefone: " + telefone);
   }
});
