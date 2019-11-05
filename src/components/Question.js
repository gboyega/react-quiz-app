import React from "react";
import QuestionOption from "./QuestionOption";

function Question (props) {
    let questionBody = props.content;

    const showOptions = () => {
        return(
            questionBody.options.map((option, i) => <QuestionOption value={option} key={i} />)
        )
    }

    return(
        <div>
          <p>{questionBody.question}</p>
          {showOptions()}
        </div>
    )
}

export default Question;