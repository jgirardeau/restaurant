// Dependencies
var express = require("express");

var app = express();
var PORT = 3000;
var path = require("path");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static('static'))


var current_reservations = [{
        name: "Girardeau",
        phone: "512-560-0461",
        email: "jwgirardeau@gmail.com",
        uniqueid: 1
    },
    {
        name: "Listi",
        phone: "512-560-0461",
        email: "jwgirardeau@gmail.com",
        uniqueid: 2
    },
    {
        name: "Caudle",
        phone: "512-560-0461",
        email: "jwgirardeau@gmail.com",
        uniqueid: 2
    }
];

var waiting_list = [{
        name: "dogs",
        phone: "512-560-0461",
        email: "jwgirardeau@gmail.com",
        uniqueid: 1
    },
    {
        name: "cats",
        phone: "512-560-0461",
        email: "jwgirardeau@gmail.com",
        uniqueid: 2
    }
];

// Routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

// Displays all reservations
app.get("/api/reservations", function(req, res) {
    return res.json(current_reservations);
});
// Displays all characters
app.get("/api/waiting_list", function(req, res) {
    return res.json(waiting_list);
});

// Create New Characters - takes in JSON input
app.post("/api/new_reservation", function(req, res) {
    var newReservation = req.body;

    console.log(newReservation);

    current_reservations.push(newReservation);

    res.json(newReservation);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});