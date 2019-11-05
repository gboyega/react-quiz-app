import React from "react";

function QuestionOption(props){
    let optionValue = props.value;

    return(
        <div onClick={()=> console.log(props.value)}>
          <input type='radio' />
          <p>{optionValue}</p>  
        </div>
    )
}

export default QuestionOption; 