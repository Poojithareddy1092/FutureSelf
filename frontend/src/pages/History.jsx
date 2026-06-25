function History({ goBack }) {

    const persona =
        localStorage.getItem("persona");

    const activities =
        JSON.parse(
            localStorage.getItem("activities")
        ) || [];

    const reflections =
        JSON.parse(
            localStorage.getItem("reflections")
        ) || [];

    return (

        <div style={{padding:"20px"}}>

            <h1>
                {persona?.toUpperCase()}
            </h1>

            <hr />

            <h2>
                Activity History
            </h2>

            {

                activities.map(
                    (item,index) => (

                        <div
                            key={index}
                        >

                            <p>
                                {item.activity}
                            </p>

                            <p>
                                Alignment:
                                {item.rating}/10
                            </p>

                            <hr />

                        </div>

                    )
                )

            }

            <h2>
                Reflection History
            </h2>

            {

                reflections.map(
                    (item,index) => (

                        <div
                            key={index}
                        >

                            <p>
                                Satisfaction:
                                {item.satisfaction}/10
                            </p>

                            <p>
                                Achievement:
                                {item.achievement}
                            </p>

                            <hr />

                        </div>

                    )
                )

            }

            <button
                onClick={goBack}
            >
                Back To Dashboard
            </button>

        </div>

    );

}

export default History;