const Server = require('../models/Server');

module.exports = async () => {

  const servers = await Server.find();

  let port = 25565;

  while (servers.find(s => s.port === port)) {
    port++;
  }

  return port;
};
