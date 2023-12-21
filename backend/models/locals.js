const mongoose = require('mongoose');

const localSchema = new mongoose.Schema({
    ref: {
        type: Number,
        required: [true, "Please provide a reference"],
        unique: true,
    },
    surface: Number,
    nb_chambre: Number,
    cat: String,
    lieux: String,
    prix_mois: Number,
    disponibilite: Boolean,
    urlList: {
        type: [String],
    },
});

const local = mongoose.model("locals", localSchema);

module.exports = local;
