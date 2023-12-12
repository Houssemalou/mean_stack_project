// backend/app.ts
const express = require('express');
const {path} = require('fs');
//import mongoose from 'mongoose';
//import bodyParser from 'body-parser';
//import cors from 'cors';
//import {nom} from './routes/routes';

const app = express();

// Configuration de MongoDB avec mongoose
/*mongoose.connect('mongodb://localhost:27017/mean-database');
mongoose.connection.on('connected', () => {
  console.log('Connecté à la base de données MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.error(`Erreur de connexion à la base de données MongoDB: ${err}`);
});*/

// Middleware
//app.use(cors());
//app.use(bodyParser.json());
app.use(express.static('C:/Users/Houssem Aloui/angular_project/project1/angular_project1/src'));

// Définir les routes
/*app.get('/index.html',(req : any,res : any)=>{
    res.status(200).sendFile("C:/Users/Houssem Aloui/angular_project/project1/angular_project1/src/index.html")
})*/
/*app.use('/api', routes);

// Gestion des erreurs 404
app.use((req, res) => {
  res.status(404).send('Page introuvable');
});

// Gestion des erreurs globales
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erreur interne du serveur');
});

// Démarrer le serveur*/
const port = 3000;
app.listen(port, () => {
  //console.log(`Serveur Express en cours d'exécution sur le port ${port}`);
  console.log(app);
});
