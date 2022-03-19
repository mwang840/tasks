import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { Question } from "../interfaces/question";
import sketch from "../assets/sketching.jpg"; // with import
//import { Quiz } from "../QuizzerInterfaces/QuizLayout";
//import dataQuiz from "../data/Quizzer_description.json";

export function ShowHideTasks(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            {visible && <div></div>}
            <img src={sketch} />
            <Button onClick={() => setVisible(!visible)}>Show/Hide</Button>
        </div>
    );
}

export function Quizzer(): JSX.Element {
    return (
        <div>
            <h3>Quizzer</h3>
        </div>
    );
}
