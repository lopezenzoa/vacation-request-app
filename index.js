const express = require("express");

const app = express();

// Serving static files
app.use(express.static("public"));

vacations = [
    { name: "H. G. Wells", role: "Research", start: "Nov 29th", end: "Dec 13th", days: "15" },
    { name: "Julio Verne", role: "Engineering", start: "Dec 11th", end: "Dec 16th", days: "7" },
    { name: "Silvina Ocampo", role: "Marketing", start: "Dec 17th", end: "Dec 20th", days: "4" },
];

app.get("/", (req, res) => {
    res.render("index.ejs", { vacations: vacations, auth: true });
});

app.listen(5000);