import React from "react";
import { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { QuizLayout } from "../QuizzerInterfaces/QuizLayout";

export function ViewQuizzer({ quiz }: { quiz: QuizLayout }): JSX.Element {
    const [seeing, setSeeing] = useState<boolean>(false);
    //Views the quiz
    function seeQuiz() {
        setSeeing(!seeing);
    }

    return (
        <div>
            <header>{quiz.title}</header>
            <h2>{"Total amt of questions: " + quiz.totalQuestions}</h2>
            <h4>{quiz.description}</h4>
            <div>
                <Button onClick={seeQuiz}> To View/Not To View</Button>
            </div>
            <div>{seeing}</div>
        </div>
    );
}
