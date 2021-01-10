import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333);

// node tsc src/index.ts
// node src/index.js
// yarn tsc --init
// yarn dev:server
// pkill node / pkill nodejs