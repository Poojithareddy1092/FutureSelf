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

            <p style={{color:"green"}}>

✅ {
activities.find(
(item)=>item.time===slot
).activity
}

</p>


            :

            <p style={{color:"#888"}}>
⏳ Waiting...
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




            {/* Reflection Section */}

<div className="reflection-card">

    <h2>🌙 End Your Day</h2>

    {
        completedActivities === 4 ?

        <>

            <p>

                Fantastic! You completed all your activity check-ins.

                <br /><br />

                Spend two minutes reflecting on your day and receive
                guidance from your future self.

            </p>

            <button
                className="reflection-btn"
                onClick={goToReflection}
            >

                ✨ Start Daily Reflection

            </button>

        </>

        :

        <>

            <p>

                Complete today's activity check-ins to unlock
                your daily reflection.

            </p>

            <h3>

                {completedActivities}/4 Activities Completed

            </h3>

            <div className="progress-bar">

                <div
                    className="progress-fill"
                    style={{
                        width: `${completedActivities * 25}%`
                    }}
                ></div>

            </div>

        </>

    }

</div>

<br />

<button
    className="history-btn"
    onClick={goToHistory}
>

    📜 View History

</button>



        </div>


    );

}


export default Dashboard;