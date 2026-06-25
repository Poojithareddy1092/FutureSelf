import { useState } from "react";
import "./App.css";
import Welcome from "./pages/Welcome";
import Persona from "./pages/Persona";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import Reflection from "./pages/Reflection";
import History from "./pages/History";

function App() {

  const [page, setPage] = useState("welcome");

  return (

    <div>

      {page === "welcome" && (

        <Welcome
          onStart={() =>
            setPage("persona")
          }
        />

      )}

      {page === "persona" && (

        <Persona
          onPersonaCreated={() =>
            setPage("dashboard")
          }
        />

      )}

      {page === "dashboard" && (

    <Dashboard

        goToActivity={(time)=>{

            localStorage.setItem(
                "selectedTime",
                time
            );

            setPage("activity");

        }}

        goToReflection={() =>
            setPage("reflection")
        }

        goToHistory={() =>
            setPage("history")
        }

    />

)}

      {page === "activity" && (

    <Activity
        goBack={() =>
            setPage("dashboard")
        }
    />

)}

      {page === "reflection" && (

    <Reflection
        goBack={() =>
            setPage("dashboard")
        }
    />

)}
  
  {page === "history" && (

    <History
        goBack={() =>
            setPage("dashboard")
        }
    />

)}
    </div>

  );

}

export default App;