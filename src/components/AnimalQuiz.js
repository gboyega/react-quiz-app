import React, {Component} from "react";
import QuestionGenerator from "../utils/QuestionGenerator";
import Question from "./Question";


class AnimalQuiz extends Component {
    constructor(){
       super();
       this.state = {
           questionList: QuestionGenerator(),
           questionIndex: 0,
           score: 0
       }
       this.showContent = this.showContent.bind(this);
    }

    showContent(){
        return <Question content={this.state.questionList[0]} />
    }

    render(){ 
        return(
          <div>
                <h1>How Much do you know about Animals?</h1>
                <h3>Test your knowledge here!</h3>
                {this.showContent()}
          </div>  
        )
    } 
}
export default AnimalQuiz;