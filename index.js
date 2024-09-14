import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;
const __dirname = import.meta.dirname;

app.use(express.static("static"));
app.use(express.static("static/cwiczenia"));

app.get("/filenames", (_req, res) => {
    const dirnames = fs.readdirSync(`${__dirname}/static/cwiczenia`);
    let files = {};
    dirnames.forEach((dir) => {
        const filenames = fs.readdirSync(`${__dirname}/static/cwiczenia/${dir}`);
        files[dir] = filenames;
    })

    res.send(JSON.stringify(files)); 
})

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`);
})