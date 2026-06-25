import { useState } from "react";
import axios from "axios";


function Activity({ goBack }) {


    const selectedTime =
        localStorage.getItem("selectedTime");


    console.log(selectedTime);


    const [activity, setActivity] = useState("");

    const [rating, setRating] = useState("");
    const [alignment, setAlignment] = useState("");

    const saveActivity = async () => {
        let score = 0;


    if(alignment === "yes")
    {
        score = 10;
    }


    else if(alignment === "somewhat")
    {
        score = 5;
    }


    else if(alignment === "no")
    {
        score = 0;
    }

    await axios.post(
        "http://localhost:5000/activity",
        {
    time:selectedTime,
    activity,
    alignment,
    score
}
    );
    const existingActivities =
    JSON.parse(
        localStorage.getItem("activities")
    ) || [];

existingActivities.push({

    time:selectedTime,

    activity,

    alignment,

    score

});

localStorage.setItem(
    "activities",
    JSON.stringify(existingActivities)
);

    alert("Activity Saved");

    goBack();

};

    return (

        <div style={{padding:"20px"}}>

            <h1>
    Activity Check In
</h1>

<h2>
    Time Slot: {selectedTime}
</h2>
            <p>
                What productive activity did you do?
            </p>

            <textarea
                rows="5"
                cols="50"
                value={activity}
                onChange={(e)=>setActivity(e.target.value)}
            />

            <br /><br />

            <input
                type="number"
                min="1"
                max="10"
                placeholder="Alignment Rating"
                value={rating}
                onChange={(e)=>setRating(e.target.value)}
            />

            <br /><br />
            <h3>
Does this activity align with your future self?
</h3>


<label>
<input
type="radio"
value="yes"
checked={alignment==="yes"}
onChange={(e)=>setAlignment(e.target.value)}
/>

Yes, completely aligned

</label>


<br/>


<label>

<input
type="radio"
value="somewhat"
checked={alignment==="somewhat"}
onChange={(e)=>setAlignment(e.target.value)}
/>

Somewhat aligned

</label>


<br/>


<label>

<input
type="radio"
value="no"
checked={alignment==="no"}
onChange={(e)=>setAlignment(e.target.value)}
/>

No, not aligned

</label>

            <button onClick={saveActivity}>
                Save Activity
            </button>

        </div>

    );

}

export default Activity;