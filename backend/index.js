const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
    try {
        const response = await axios.post("http://localhost:5001/chat", {
            message: req.body.message
        });

        res.json(response.data);

    } catch (err) {
        console.log(err);
        res.status(500).json({ reply: "Backend error" });
    }
});

app.listen(5000, () => {
    console.log("Node server running on 5000");
});