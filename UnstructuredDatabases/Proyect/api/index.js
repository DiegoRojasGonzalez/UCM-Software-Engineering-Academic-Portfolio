const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// Configuración de conexión a MongoDB
const dbURI = "mongodb://root:root@localhost:27017/";
mongoose
    .connect(dbURI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch((err) => console.log("Error al conectar a MongoDB:", err));

// Definir un esquema y modelo para los ítems
const itemSchema = new mongoose.Schema({
    tittle: String,
    anno: Number,
    genere: String,
    points: Number,
    director: String,
    time_minuts: Number,
});

const Item = mongoose.model("Item", itemSchema);

app.use(express.json());

app.get("/", (req, res) => {
    res.send("on");
});

app.get("/items", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/items", async (req, res) => {
    const newItem = new Item({
        tittle: req.body.tittle,
        anno: req.body.anno,
        genere: req.body.genere,
        points: req.body.points,
        director: req.body.director,
        time_minuts: req.body.time_minuts,
    });
    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
