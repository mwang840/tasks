import React from "react";
import { Stack } from "react-bootstrap";
import { QuizQuestions } from "../QuizzerInterfaces/QuizQuestions";
import { Quiz } from "../QuizzerInterfaces/QuizLayout";

export function QuestionList({
    questions
}: {
    questions: QuizQuestions[];
}): JSX.Element {
    return (
        <Stack gap={4}>
            {questions.map((question: QuizQuestions) => (
                <div key={question.name}>
                    {<Quiz question={question}></Quiz>}
                </div>
            ))}
        </Stack>
    );
}
