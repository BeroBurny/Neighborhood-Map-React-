import express from 'express';

const app = express();
const port = process.env.PORT || 3001;
app.listen(port);

console.log('neighborhood-map RESTful API server started on: ' + port);
