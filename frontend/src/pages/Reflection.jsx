import { useState } from "react";
import axios from "axios";

function Reflection({ goBack }) {

    const [satisfaction, setSatisfaction] = useState("");
    const [achievement, setAchievement] = useState("");
    const [distraction, setDistraction] = useState("");
    const [improvement, setImprovement] = useState("");

    const saveReflection = async () => {

        await axios.post("http://localhost:5001/reflection", {
            satisfaction,
            achievement,
            distraction,
            improvement
        });

        const existingReflections =
            JSON.parse(localStorage.getItem("reflections")) || [];

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

        alert(
            "✨ Reflection Saved!\n\nYour Future Self thanks you for showing up today."
        );

        goBack();
    };

    const buttonStyle = (value) => ({
        fontSize: "30px",
        padding: "10px",
        margin: "8px",
        borderRadius: "50%",
        border:
            satisfaction === value
                ? "3px solid #4CAF50"
                : "2px solid lightgray",
        cursor: "pointer",
        background: "white"
    });

    return (
        <div
            style={{
                maxWidth: "700px",
                margin: "40px auto",
                padding: "30px",
                background: "#f8f9ff",
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                fontFamily: "Arial"
            }}
        >

            <h1 style={{ textAlign: "center", color: "#3f51b5" }}>
                🌙 Daily Reflection
            </h1>

            <p style={{ textAlign: "center", color: "gray" }}>
                Spend two minutes talking to your future self.
            </p>

            <hr />

            <h3>😊 How satisfied are you with today?</h3>

            <div>

                <button
                    style={buttonStyle("😞")}
                    onClick={() => setSatisfaction("😞")}
                >
                    😞
                </button>

                <button
                    style={buttonStyle("😐")}
                    onClick={() => setSatisfaction("😐")}
                >
                    😐
                </button>

                <button
                    style={buttonStyle("🙂")}
                    onClick={() => setSatisfaction("🙂")}
                >
                    🙂
                </button>

                <button
                    style={buttonStyle("😊")}
                    onClick={() => setSatisfaction("😊")}
                >
                    😊
                </button>

                <button
                    style={buttonStyle("🤩")}
                    onClick={() => setSatisfaction("🤩")}
                >
                    🤩
                </button>

            </div>

            <br />

            <h3>🏆 Biggest Achievement Today</h3>

            <textarea
                rows="3"
                style={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px"
                }}
                placeholder="What are you proud of today?"
                value={achievement}
                onChange={(e) => setAchievement(e.target.value)}
            />

            <br /><br />

            <h3>⚠ Biggest Distraction</h3>

            <textarea
                rows="3"
                style={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px"
                }}
                placeholder="What held you back today?"
                value={distraction}
                onChange={(e) => setDistraction(e.target.value)}
            />

            <br /><br />

            <h3>🚀 Promise to Tomorrow's You</h3>

            <textarea
                rows="3"
                style={{
                    width: "100%",
                    borderRadius: "10px",
                    padding: "10px"
                }}
                placeholder="How will you improve tomorrow?"
                value={improvement}
                onChange={(e) => setImprovement(e.target.value)}
            />

            <br /><br />

            <div
                style={{
                    background: "#eef6ff",
                    padding: "15px",
                    borderRadius: "12px",
                    marginBottom: "20px"
                }}
            >
                <h3>✨ Message From Your Future Self</h3>

                <p style={{ fontStyle: "italic" }}>
                    "Every reflection brings you one step closer to the person
                    you dream of becoming. Progress matters more than
                    perfection."
                </p>

            </div>

            <button
                onClick={saveReflection}
                style={{
                    width: "100%",
                    padding: "15px",
                    background: "#3f51b5",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "18px",
                    cursor: "pointer"
                }}
            >
                💾 Save Reflection
            </button>

        </div>
    );
}

export default Reflection;