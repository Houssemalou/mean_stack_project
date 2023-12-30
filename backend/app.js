const express = require('express');
const mongoose = require('mongoose');
const { connect } = require('./dbConfig/dbConfig');
const cors = require('cors');
const local = require('./models/locals');
const userInput = require('./models/inputUser');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Connexion à la base de données MongoDB
connect();
const localList = [
    {
      ref :1000,
      surface: 300,
      nb_chambre: 5,
      cat: "villa",
      lieu: "Aryena",
      prix_mois: 750,
      disponibilité: true,
      urlList: ["../../assets/images/maison/maison1.jpg", "../../assets/images/chambre/chambre1.jpg", "../../assets/images/cuisine/cuisine.jpg"]
    },
    {
      ref:1001,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    },
    {
      ref:1002,
      surface: 150,
      nb_chambre: 2,
      cat: "appartement",
      lieu: "El Aouina",
      prix_mois: 750,
      disponibilité: false,
      urlList: ["../../assets/images/maison/maison4.jpg", "../../assets/images/cuisine/cuisine3.jpg", "../../assets/images/cuisine/cuisine2.jpg"]
    },
    {
      ref:1003,
      surface: 300,
      nb_chambre: 5,
      cat: "villa",
      lieu: "Aryena",
      prix_mois: 750,
      disponibilité: true,
      urlList: ["../../assets/images/maison/maison1.jpg", "../../assets/images/chambre/chambre1.jpg", "../../assets/images/cuisine/cuisine.jpg"]
    },
    {
      ref:1004,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    },
    {
      ref :1005,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    },
    {
      ref :1006,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    },
    {
      ref :1007,
      surface: 450,
      nb_chambre: 3,
      cat: "local commercial",
      lieu: "charguia 1",
      prix_mois: 1200,
      disponibilité: true,
      urlList: ["../../assets/images/commerce/commerce1.jpg", "../../assets/images/commerce/commerce2.jpg", "../../assets/images/commerce/commerce1.jpg"]
    }
  ];
/*local.insertMany(localList)
        .then((result) => {
            console.log('Data added successfully:', result);
        })
        .catch((error) => {
            console.error('Error adding data:', error);
})*/
app.get('/api/locals', async (req, res) => {
  try {
    const locals = await local.find({});
    res.status(200).json(locals);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
});
app.get('/api/locals/:ref', async (req, res) => {
  try {
    const ref = req.params.ref;
    const localDoc = await local.findOne({ ref });
    if (localDoc) {
      res.status(200).json(localDoc);
    } else {
      res.status(404).json({ message: 'Document non trouvé' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur serveur');
  }
});

app.post('/api/bookLocal', (req, res) => {
  
  const newUserInput = new userInput(req.body);
  newUserInput.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la sauvegarde dans la base de données');
    } else {
      res.status(201).send('Objet sauvegardé avec succès');
    }
  });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

