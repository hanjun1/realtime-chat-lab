let username = document.getElementById("username");
let message = document.getElementById("message");
let sendBtn = document.querySelector("button");
let messageBox = document.querySelector(".chat-display");

sendBtn.addEventListener("click", (e) => {
  socket.emit("send-message", {
    username: username.value,
    message: message.value,
    date: new Date(),
  });
  username.value = "";
  message.value = "";
});

function addMessage({ username, message, date }) {
  let pEl = document.createElement("p");
  pEl.textContent = `[${date}] ${username}: ${message}`;
  messageBox.appendChild(pEl);
}

let socket = io();
socket.on("send-message", function (data) {
  addMessage(data);
});
