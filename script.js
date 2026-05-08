console.log("SCRIPT FUNCIONANDO");
async function enviar() {

  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const mensagem = input.value;

  if (!mensagem) return;

  chat.innerHTML += `
    <div class="msg-user">${mensagem}</div>
  `;

  input.value = "";

  try {

    const resposta = await fetch(
      "https://assistente-r3vd.onrender.com/chat",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: mensagem,

          contexto: {
            pagina: window.location.pathname,
            titulo: document.title
          }
        })
      }
    );

    const data = await resposta.json();

    chat.innerHTML += `
      <div class="msg-bot">${data.reply}</div>
    `;

  } catch (erro) {

    chat.innerHTML += `
      <div class="msg-bot">
        Erro ao conectar
      </div>
    `;
  }
}