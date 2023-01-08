import http from 'http';
import express from 'express';
import path from 'path';
import livereload from 'livereload';
import connectLiveReload from 'connect-livereload';

const app = express();

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once('connection', () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});

app.use(connectLiveReload());
app.use(express.json());

app.use('/public', express.static(path.join(path.resolve(), '/public')));
app.use('/', (_, response) => {
  response.sendFile(path.join(path.resolve(), 'public', 'index.html'));
});

const server = http.createServer(app);
server.listen(3000);

console.log('Listening port 3000!');
