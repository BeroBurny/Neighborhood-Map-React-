import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import mapRoutes from './api/routes/mapMarkerRoutes';
import fillMarkerDBIfIsEmpty from "./fillMarkerDBIfIsEmpty";

const app = express();
const port = process.env.PORT || 3001;
const mongoDBPort = process.env.MONGODB_PORT || 27017;
const mongoDB = process.env.MONGODB || 'localhost';
const mongoDBCollection = process.env.COLLECTION || 'MapDB';

const mongoDBConnection = `mongodb://${mongoDB}:${mongoDBPort}/${mongoDBCollection}`;
const mongoDBOprtions = { useNewUrlParser: true };
mongoose.Promise = global.Promise;
mongoose.connect(mongoDBConnection, mongoDBOprtions);
fillMarkerDBIfIsEmpty();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mapRoutes(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log(`neighborhood-map RESTful API server started on: http://localhost:${port}/`);
