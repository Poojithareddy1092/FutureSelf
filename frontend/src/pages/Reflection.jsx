import { useState } from "react";
import axios from "axios";

function Reflection({ goBack }) {

    const [satisfaction,setSatisfaction] = useState("");
    const [achievement,setAchievement] = useState("");
    const [distraction,setDistraction] = useState("");
    const [improvement,setImprovement] = useState("");

    const saveReflection = async () => {

        await axios.post(
            "http://localhost:5000/reflection",
            {
                satisfaction,
                achievement,
                distraction,
                improvement
            }
        );
        const existingReflections =
    JSON.parse(
        localStorage.getItem("reflections")
    ) || [];

existingReflections.push({
    satisfaction,
    achievement,
    distraction,
    improvement
});

localStorage.setItem(
    "reflections",
    JSON.stringify(existingReflections)
);

        alert("Reflection Saved");
        goBack();

    };

    return (

        <div style={{padding:"20px"}}>

            <h1>Daily Reflection</h1>

            <input
                type="number"
                min="1"
                max="10"
                placeholder="Satisfaction Score"
                value={satisfaction}
                onChange={(e)=>setSatisfaction(e.target.value)}
            />

            <br /><br />

            <textarea
                rows="3"
                cols="50"
                placeholder="Biggest Achievement"
                value={achievement}
                onChange={(e)=>setAchievement(e.target.value)}
            />

            <br /><br />

            <textarea
                rows="3"
                cols="50"
                placeholder="Biggest Distraction"
                value={distraction}
                onChange={(e)=>setDistraction(e.target.value)}
            />

            <br /><br />

            <textarea
                rows="3"
                cols="50"
                placeholder="How will you improve tomorrow?"
                value={improvement}
                onChange={(e)=>setImprovement(e.target.value)}
            />

            <br /><br />

            <button onClick={saveReflection}>
                Save Reflection
            </button>

        </div>

    );

}

export default Reflection;