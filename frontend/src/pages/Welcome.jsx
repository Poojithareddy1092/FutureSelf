function Welcome({ onStart }) {

    return (

        <div className="welcome-container">

            <div className="welcome-card">

                <h1>
                    Future Self Alignment Platform for pooji
                </h1>


                <p>
                    Become the person you aspire to be.
                    <br />
                    Track your actions. Reflect. Grow pooji
                </p>


                <button
                    className="primary-btn"
                    onClick={onStart}
                >
                    Begin Journey
                </button>


            </div>

        </div>

    );

}

export default Welcome;