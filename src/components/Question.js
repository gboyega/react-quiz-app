import React from "react";
import QuestionOption from "./QuestionOption";
import { Header } from 'semantic-ui-react';

function Question (props) {
    let questionBody = props.content;

    const showOptions = () => {
        return(
            questionBody.options.map((option, i) => <QuestionOption value={option} key={i} scoreQuestion={props.scoreQuestion} />)
        )
    }

    return(
        <div>
            <Header size='large' color='red'><p>{questionBody.question}</p></Header>
            {showOptions()}
        </div>
    )
}

export default Question;