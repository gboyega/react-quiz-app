import React, {Component} from "react";
import QuestionGenerator from "../utils/QuestionGenerator";
import Question from "./Question";
import Result from "./Result";
import { Header } from 'semantic-ui-react';
import "./styles.css";


class AnimalQuiz extends Component {
    constructor(){
       super();
       this.state = {
           questionList: QuestionGenerator(),
           questionIndex: 0,
           score: 0
       }
       this.showContent = this.showContent.bind(this);
       this.scoreQuestion= this.scoreQuestion.bind(this);
    }

    showContent(){
        if(this.state.questionIndex < this.state.questionList.length){
            return <Question content={this.state.questionList[this.state.questionIndex]} scoreQuestion={this.scoreQuestion} />
        }
        return <Result score={this.state.score} />
        
    }

    scoreQuestion(value){
        console.log("score is", value);
        // increase question index state
        let question = this.state.questionList[this.state.questionIndex];
        this.setState((state) => {
            return{...state.questionIndex++}
        })
        // grade answer
        // increase state score
        if(value === question.answer){
            this.setState((state) => {
                return { ...state.score++ }
            })
        }
    }

    render(){ 
        return(
          <div className="main">
                <Header size='huge' color='blue'>How Much do you know about Animals?</Header>
                <Header size='large' color='blue'>Test your knowledge here!</Header>
                {this.showContent()}
          </div>  
        )
    } 
}
export default AnimalQuiz;