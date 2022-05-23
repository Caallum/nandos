import express from "express";
import * as constants from "./constants"

const app = express()
app.listen(constants.port, () => console.log(`Listening on PORT ${constants.port}`))

app.use(express.static(`${__dirname}/public`))
app.locals.basedir = `${__dirname}/public`;

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/cookbook", (req, res) => {
    res.sendFile(`${__dirname}/views/nandosMenu.html`)
})