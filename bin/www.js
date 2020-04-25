const debug = require('debug')('express-api-boilerplate:server');
const http = require('http');
const app = require('../app');

const server = http.createServer(app);

const normalizePort = (val) => (val >= 0 ? val : false);

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
};

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`Port ${port} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`Port ${port} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
