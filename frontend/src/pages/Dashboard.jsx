function Dashboard({
    goToActivity,
    goToReflection,
    goToHistory
}) {

    const persona =
        localStorage.getItem("persona");


    const slots = [

"09:00 AM",

"12:00 PM",

"03:00 PM",

"06:00 PM"

];


const activities =
JSON.parse(
localStorage.getItem("activities")
) || [];

const completedActivities =
activities.length;
let alignmentAverage = 0;


if(completedActivities === 4)
{

    const totalScore =
    activities.reduce(
        (sum,item)=>
        sum + Number(item.score),
        0
    );


    alignmentAverage =
    Math.round(
        (totalScore / 4) * 10
    );

}


    return (

        <div className="dashboard-container">


            <h1>
                Welcome Back 👋
            </h1>


            <p className="subtitle">

                You chose to become:

            </p>


            <h2 className="identity-text">

                "{persona}"

            </h2>


            <h3>

                Are your actions today
                taking you closer to this person?

            </h3>



            <div className="dashboard-grid">



                {/* LEFT SIDE */}

                <div className="streak-box">


                    <h2>
                        🔥 Current Streak
                    </h2>


                    <h1>
                        0
                    </h1>


                    <p>
                        Days
                    </p>


                    <p>
                        Keep showing up.
                    </p>


                </div>
                <div className="alignment-box">


<h2>
Today's Alignment
</h2>


{

completedActivities === 4

?

<>

<h1>
{alignmentAverage}%
</h1>


<p>
Your actions today were measured
against your future self.
</p>

</>


:

<>

<h2>
{completedActivities}/4
</h2>


<p>
Complete all check-ins to receive
your daily alignment score.
</p>

</>


}


</div>





                {/* RIGHT SIDE */}


                <div className="timeline-box">


                    <h2>
                        Today's Activities
                    </h2>



                    {
                        slots.map((slot,index)=>(


                            <div
    className="time-slot"
    key={index}
>


    <div>

        <h3>
            {slot}
        </h3>


        {
            activities.find(
                (item)=>item.time === slot
            )

            ?

            <p>
                ✅ 
                {
                    activities.find(
                        (item)=>item.time === slot
                    ).activity
                }
            </p>


            :

            <p>
                No activity logged
            </p>

        }


    </div>



    <button
    onClick={() => goToActivity(slot)}
>
    +
</button>



</div>

                        ))
                    }



                </div>



            </div>




            <button
                className="primary-btn"
                onClick={goToReflection}
            >

                Daily Reflection

            </button>


            <br/><br/>


            <button
                className="primary-btn"
                onClick={goToHistory}
            >

                View History

            </button>



        </div>


    );

}


export default Dashboard;