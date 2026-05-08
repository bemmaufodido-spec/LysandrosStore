async function enviar() {

  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  if (!input || !chat) {
    console.log("CHAT OU INPUT NÃO ENCONTRADO");
    return;
  }

  const mensagem = input.value;

  if (!mensagem) return;

  // mensagem usuário
  chat.innerHTML += `
    <div class="msg-user">
      ${mensagem}
    </div>
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
          message: mensagem
        })
      }
    );

    const data = await resposta.json();

    console.log(data);

    // resposta IA
    chat.innerHTML += `
      <div class="msg-bot">
        ${data.reply}
      </div>
    `;

    chat.scrollTop = chat.scrollHeight;

  } catch (erro) {

    console.error("ERRO:", erro);

  }
}

window.enviar = enviar;