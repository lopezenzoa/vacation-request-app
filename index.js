const express = require("express");

const app = express();

// Serving static files
app.use(express.static("public"));
app.use(express.json());

const vacations = [
    { name: "H. G. Wells", role: "Research", start: "Nov 29th", end: "Dec 13th", days: "15" },
    { name: "Julio Verne", role: "Engineering", start: "Dec 11th", end: "Dec 16th", days: "7" },
    { name: "Silvina Ocampo", role: "Marketing", start: "Dec 17th", end: "Dec 20th", days: "4" },
];

const profileInfo = {
    username: "admin",
    name: "Admin",
    email: "enzoagustinlopez2003@gmail.com",
    phone: "2236004953",
    address: "3 de Febrero 5074",
    city: "Mar del Plata",
    team: "Development",
    role: "Backend developer",
    lastVacations: "Nov 29th - Dec 13th"
};

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let auth = false;

// Loading EJS templates
app.get("/", (req, res) => {
    res.render("home.ejs", { vacations: vacations, auth: auth });
});

app.get("/profile", (req, res) => {
    res.render("profile.ejs", { profileInfo: profileInfo, capitalize: capitalize });
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.post("/validate", (req, res) => {
    let auth = false;
    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && Number(password) === 1234) {
        auth = true;
    }

    res.send({ auth });
});

app.listen(3000);