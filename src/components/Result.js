import React from "react";

function Result(props){
    let score = props.score;
    if (score <= 2){
        return(
            <div>
                <p>You scored {score}!</p>
                <p>Better luck next time</p> 
            </div>
           
        )
    } else if(score > 2 && score <= 4){
        return (
            <div>
                <p>You scored {score}!</p>
                <p>Good try, but better luck next time</p>
            </div>

        )
    }
    return (
            <div>
                <p>You scored {score}!</p>
                <p>*Drum Roll*If you're not a vet, you made a wrong career choice.</p>
            </div>

        )
}

export default Result;