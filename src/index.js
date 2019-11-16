import React from 'react';
import ReactDom from 'react-dom';
import AnimalQuiz from './components/AnimalQuiz'; 
import 'semantic-ui-css/semantic.min.css'
import "../src/components/styles.css";
 

ReactDom.render(<AnimalQuiz />, document.getElementById("root"));