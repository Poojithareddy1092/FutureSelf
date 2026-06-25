const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let selectedPersona = "";

let activities = [];

let reflections = [];

/* SAVE PERSONA */

app.post("/persona", (req, res) => {

    selectedPersona = req.body.persona;

    res.json({
        message: "Persona Saved"
    });

});

/* SAVE ACTIVITY */

app.post("/activity", (req, res) => {

    activities.push(req.body);

    res.json({
        message: "Activity Saved"
    });

});

/* SAVE REFLECTION */

app.post("/reflection", (req, res) => {

    reflections.push(req.body);

    res.json({
        message: "Reflection Saved"
    });

});

/* DASHBOARD */

app.get("/dashboard", (req, res) => {

    res.json({
        persona: selectedPersona,
        activities: activities,
        reflections: reflections
    });

});

app.listen(5001, () => {

    console.log("FutureSelf Backend Running");

});