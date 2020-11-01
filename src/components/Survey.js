import React from 'react'
import axios from 'axios'
import { useAuth0 } from "@auth0/auth0-react"

function Survey() {
    const [state, setState] = React.useState({
        symptom1: "false",
        symptom2: "false",
        symptom3: "false",
        symptom4: "false",
        symptom5: "false",
        symptom6: "false",
        symptom7: "false",
        symptom8: "false",
        symptom9: "false",
        symptom10: "false"
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Symptom1: " + state.symptom1 +
        "\nSymptom2: " + state.symptom2 +
        "\nSymptom3: " + state.symptom3 +
        "\nSymptom4: " + state.symptom4 +
        "\nSymptom5: " + state.symptom5 +
        "\nSymptom6: " + state.symptom6 +
        "\nSymptom7: " + state.symptom7 +
        "\nSymptom8: " + state.symptom8 +
        "\nSymptom9: " + state.symptom9 +
        "\nSymptom10: " + state.symptom10 +
        "\n\nDiagnosis: " + calculateDiagnosis());

        setState({
            symptom1: "false",
            symptom2: "false",
            symptom3: "false",
            symptom4: "false",
            symptom5: "false",
            symptom6: "false",
            symptom7: "false",
            symptom8: "false",
            symptom9: "false",
            symptom10: "false"
        });
    }

    function calculateDiagnosis() {
        var count = 0;

        if (state.symptom1 == "true") { count++ }
        if (state.symptom2 == "true") { count++ } 
        if (state.symptom3 == "true") { count++ } 
        if (state.symptom4 == "true") { count++ }
        if (state.symptom5 == "true") { count++ }
        if (state.symptom6 == "true") { count++ } 
        if (state.symptom7 == "true") { count++ } 
        if (state.symptom8 == "true") { count++ } 
        if (state.symptom9 == "true") { count++ }
        if (state.symptom10 == "true") { count++ } 

        if (count > 2) {return "at risk for COVID"}
        else {return "nothing"}
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Please indicate if you have experienced any of the following symptoms:</label><br />

                <input type="checkbox" name="symptom1" value="true" onChange={handleChange} />
                <label for="symptom1">  Fever or Chills</label><br />
                
                <input type="checkbox" name="symptom2" value="true" onChange={handleChange} />
                <label for="symptom2">  Cough</label><br />

                <input type="checkbox" name="symptom3" value="true" onChange={handleChange} />
                <label for="symptom3">  Trouble breathing</label><br />

                <input type="checkbox" name="symptom4" value="true" onChange={handleChange} />
                <label for="symptom4">  Fatigue</label><br />

                <input type="checkbox" name="symptom5" value="true" onChange={handleChange} />
                <label for="symptom5">  Muscle or body aches</label><br />

                <input type="checkbox" name="symptom6" value="true" onChange={handleChange} />
                <label for="symptom6">  Headache</label><br />

                <input type="checkbox" name="symptom7" value="true" onChange={handleChange} />
                <label for="symptom7">  Loss of taste or smell</label><br />

                <input type="checkbox" name="symptom8" value="true" onChange={handleChange} />
                <label for="symptom8">  Sore Throat</label><br />

                <input type="checkbox" name="symptom9" value="true" onChange={handleChange} />
                <label for="symptom9">  Nausea</label><br />

                <input type="checkbox" name="symptom10" value="true" onChange={handleChange} />
                <label for="symptom10">  Diarrhea</label><br />
                

                <button type="submit" value="submit">Submit</button> 
            </form>
        </div>
    )
}

export default Survey
