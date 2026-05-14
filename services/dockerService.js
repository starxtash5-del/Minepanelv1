const Docker = require('dockerode');

const docker = new Docker();

exports.createServer = async (name, port) => {

  const container = await docker.createContainer({

    Image: 'itzg/minecraft-server',

    name,

    Env: [
      'EULA=TRUE'
    ],

    HostConfig: {
      PortBindings: {
        '25565/tcp': [
          {
            HostPort: `${port}`
          }
        ]
      }
    }

  });

  await container.start();

  return container.id;
};
