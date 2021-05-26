const express = require("express")

const app = express();


app.get("/", (req, res, next) => {
    console.log("This Api is containrized");
    res.json({ message: "Hello User Welcome to Docker Service" })
})


app.listen(3000)