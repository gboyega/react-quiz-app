import React from "react";
import { Checkbox } from 'semantic-ui-react';
import { Radio } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react'
import "./styles.css";

function QuestionOption(props){
    let optionValue = props.value;

    return(
      <div onClick={()=> props.scoreQuestion(props.value)} className="options">
        <div className="innercard">
          <Header size='medium'>
            <Card.Group style={{display:"inline-block"}}>
              <Card color='orange' header={optionValue} />
            </Card.Group>
          </Header>
        </div> 
      </div>
    )
}

export default QuestionOption; 