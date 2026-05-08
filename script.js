async function enviar() {

  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const mensagem = input.value;

  console.log("Mensagem:", mensagem);

  try {

    const resposta = await fetch(
      "https://assistente-r3vd.onrender.com/chat",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: mensagem
        })
      }
    );

    console.log("STATUS:", resposta.status);

    const data = await resposta.json();

    console.log("DATA:", data);

    chat.innerHTML += `
      <div class="msg-bot">
        ${data.reply || data.error}
      </div>
    `;

  } catch (erro) {

    console.error("ERRO FETCH:", erro);

  }
}