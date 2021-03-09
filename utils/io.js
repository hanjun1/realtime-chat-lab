let io = require("socket.io")();

io.on("connection", function (socket) {
  socket.on("send-message", function (data) {
    io.emit("send-message", data);
  });
});

module.exports = io;
