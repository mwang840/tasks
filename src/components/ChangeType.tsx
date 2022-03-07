import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questions, changeQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    function changeQuestionType(): void {
        changeQuestion(
            questions === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
        <div>
            <Button onClick={changeQuestionType}>Change Type</Button>
            <div>
                {questions === "multiple_choice_question" ? (
                    <span>Multiple Choice</span>
                ) : questions === "short_answer_question" ? (
                    <span>Short Answer</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
