import express from "express";
import * as constants from "./constants"
import api from "./api"

const app = express()
app.listen(constants.port, () => console.log(`Listening on PORT ${constants.port}`))

app.use(express.static(`${__dirname}/public`))
app.locals.basedir = `${__dirname}/public`;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/cookbook", (req, res) => {
    res.sendFile(`${__dirname}/views/nandosRecipes.html`)
});

app.get("/cookbook/starters", (req, res) => {
    res.sendFile(`${__dirname}/views/starters.html`)
});

app.get("/cookbook/mains", (req, res) => {
    res.sendFile(`${__dirname}/views/mains.html`)
});
app.get("/cookbook/deserts", (req, res) => {
    res.sendFile(`${__dirname}/views/deserts.html`)
});
app.get("/cookbook/other", (req, res) => {
    res.sendFile(`${__dirname}/views/other.html`)
});