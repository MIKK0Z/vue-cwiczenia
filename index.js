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

    res.json(files);
})

app.get("/getData", (_req, res) => {
    const products = [
        { name: "Myszka" },
        { name: "Monitor" },
        { name: "Laptop" },
        { name: "Klawiatura" },
        { name: "Kabel" },
        { name: "RAM" },
        { name: "CPU" },
        { name: "GPU" },
    ];
    const deliveryOptions = [
        { name: "InPOST" },
        { name: "DPD" },
        { name: "Poczta" },
        { name: "Osobiscie" },
    ];
    const paymentOptions = [
        { name: "BLIK" },
        { name: "PayPal" },
        { name: "Przelewy24" },
        { name: "Visa" },
    ];

    res.json({
        products,
        deliveryOptions,
        paymentOptions,
    });
})

app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
})