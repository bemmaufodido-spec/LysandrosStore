async function enviar() {

  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const mensagem = input.value;

  if (!mensagem) return;

  // mensagem do usuário
  chat.innerHTML += `
    <div class="msg-user">
      ${mensagem}
    </div>
  `;

  input.value = "";

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

  // resposta da IA
  chat.innerHTML += `
    <div class="msg-bot">
      ${data.reply}
    </div>
  `;

}