module.exports = (io) => {

  io.on('connection', socket => {

    console.log('Connected');

    socket.on('console-command', data => {

      io.emit('console-output', {
        message: data.command
      });

    });

  });

};
