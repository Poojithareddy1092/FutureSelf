import { useState } from "react";


function Persona({ onPersonaCreated }) {


    const [persona, setPersona] = useState("");



    const savePersona = () => {


        if (persona.trim() === "") {

            alert("Please define your future self.");

            return;

        }



        localStorage.setItem(
            "persona",
            persona
        );


        onPersonaCreated();


    };



    return (


        <div className="welcome-container">


            <div className="welcome-card">



                <h1>
                    Define Your Future Self
                </h1>



                <p>
                    Your persona represents the person
                    you are committed to becoming.
                    <br />
                    It will guide your daily actions,
                    activities, and reflections.
                </p>



                <div className="commitment-box">


                    <h3>
                        Identity Commitment
                    </h3>


                    <p>

                        Once created, your Future Self
                        persona becomes your permanent
                        identity anchor.

                        <br /><br />

                        Choose carefully. Every action
                        you record will be aligned with
                        this identity.

                    </p>


                </div>




                <input

                    className="input-box"

                    type="text"

                    maxLength="60"

                    value={persona}

                    onChange={(e)=>
                        setPersona(e.target.value)
                    }


                    placeholder="I am a disciplined student"


                />



                <p>
                    {persona.length}/60 characters
                </p>




                <button

                    className="primary-btn"

                    onClick={savePersona}

                >

                    Begin My Journey

                </button>



            </div>


        </div>


    );


}


export default Persona;