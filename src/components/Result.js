import React from "react";
import { Image, Header } from 'semantic-ui-react'

function Result(props){
    let score = props.score;
    if (score <= 2){
        return(
            <div>
                <Header size='large' color='red'><p>You scored {score}!</p></Header>
                <p><Header size='medium' color='red'><p>Better luck next time.</p></Header></p>
                <Image src={"https://media.giphy.com/media/1AjEAMJqZVTzZLmkUD/giphy.gif"} size='medium' centered />
            </div>
           
        )
    } else if(score > 2 && score <= 4){
        return (
            <div>
                <Header size='large' color='red'><p>You scored {score}!</p></Header>
                <Header size='medium' color='red'><p>Good try, but better luck next time.</p></Header>
                <Image src={"https://media.giphy.com/media/5QW76Ww9bquHdg1fTv/giphy.gif"} size='medium' centered />
            </div>

        )
    }
    return (
            <div>
                <Header size='large' color='green'><p>You scored {score}!</p></Header>
                <Header size='medium' color='red'><p>*Drum Roll*</p></Header>
                <Header size='medium' color='green'><p>If you're not a vet, you made a wrong career choice.</p></Header>
            <Image src={"https://media.giphy.com/media/vVzH2XY3Y0Ar6/giphy.gif"} size='medium' centered /> 
            </div>

        )
}

export default Result;