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

//? ESQUEMA
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
    res.send("200");
});

//! GET ALL ITEMS
app.get("/items", async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
});

//! REPORTES

//? REPORTE 1 - Reporte de Películas por Año de Estreno:
app.get("/reporte1", async (req, res) => {
    try {
        const moviesByYear = await Item.aggregate([
            {
                $group: {
                    _id: "$anno",
                    movies: { $push: "$$ROOT" },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        res.json(moviesByYear);
    } catch (err) {
        res.status(500).send(err);
    }
});

//? REPORTE 2 - Reporte de Películas por Género:
app.get("/reporte2", async (req, res) => {
    try {
        const moviesByGenre = await Item.aggregate([
            {
                $group: {
                    _id: "$genere",
                    movies: { $push: "$$ROOT" },
                },
            },
        ]);
        res.json(moviesByGenre);
    } catch (err) {
        res.status(500).send(err);
    }
});

//? REPORTE 3 - Reporte de Películas con Mayor Puntuación:
app.get("/reporte3", async (req, res) => {
    try {
        const moviesByPoints = await Item.aggregate([
            {
                $sort: { points: -1 },
            },
            {
                $limit: 10, // Obtener las 10 películas con mayor puntuación
            },
        ]);
        res.json(moviesByPoints);
    } catch (err) {
        res.status(500).send(err);
    }
});

//? REPORTE 4 - Reporte de Películas por Director:
app.get("/reporte4", async (req, res) => {
    try {
        const moviesByDirector = await Item.aggregate([
            {
                $group: {
                    _id: "$director",
                    movies: { $push: "$$ROOT" },
                },
            },
        ]);
        res.json(moviesByDirector);
    } catch (err) {
        res.status(500).send(err);
    }
});

//? REPORTE 5 - Reporte de Películas por Duración:
app.get("/reporte5", async (req, res) => {
    try {
        const moviesByDuration = await Item.aggregate([
            {
                $group: {
                    _id: "$time_minuts",
                    movies: { $push: "$$ROOT" },
                },
            },
            {
                $sort: { _id: 1 },
            },
        ]);
        res.json(moviesByDuration);
    } catch (err) {
        res.status(500).send(err);
    }
});

//! TRANSACCIONES

//? Agregar peliculas
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

//? Eliminar todas las películas de un género específico:
app.post("/eliminar-peliculas", async (req, res) => {
    const { genero } = req.body;
    try {
        await Item.deleteMany({ genere: genero });
        res.send(
            `Todas las películas del género ${genero} han sido eliminadas.`
        );
    } catch (err) {
        res.status(500).send(err);
    }
});

//? Cambiar el género de todas las películas según el año:
app.put("/cambiar-genero", async (req, res) => {
    const { anno, nuevoGenero } = req.body;
    try {
        await Item.updateMany({ anno: anno }, { genere: nuevoGenero });
        res.send(
            `Se ha cambiado el género de todas las películas del año ${anno} a ${nuevoGenero}.`
        );
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
