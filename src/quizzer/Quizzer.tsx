import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuizLayout } from "../QuizzerInterfaces/QuizLayout";
import { QuizList } from "../quizzer/ListQuiz";
import quizzes from "../data/Quizzer_description.json";
import sketch from "./sketch.jpg";
const QUIZZES = quizzes.map((quiz): QuizLayout => ({ ...quiz, points: 0 }));

export function Quizzer(): JSX.Element {
    const [quizzes /*, setQuizzes*/] = useState<QuizLayout[]>(QUIZZES);

    return (
        <div>
            <h3>Quizzer</h3>

            <QuizList quizzes={quizzes}></QuizList>
            <Button>Add Quiz</Button>

            <div>
                <img src={sketch} width="400" height="auto" />
            </div>
            <br />

            <div className={"comp-features"}>
                <span>Completed Features:</span>
                <ol></ol>
            </div>
        </div>
    );
}
