import React from "react";
import { Checkbox } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';

function QuestionOption(props){
    let optionValue = props.value;

    return(
        <div onClick={()=> props.scoreQuestion(props.value)}>
          <Header size='medium' color='orange'>
          <p><Checkbox radio />   {optionValue}</p>
          </Header>
        </div>
    )
}

export default QuestionOption; 