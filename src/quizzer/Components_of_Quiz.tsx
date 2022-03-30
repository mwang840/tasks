import React from "react";
import { Stack } from "react-bootstrap";
import { QuizQuestions } from "../QuizzerInterfaces/QuizQuestions";
import { ViewQuizzer } from "./ViewQuizzer";

export function QuestionList({
    questions
}: {
    questions: QuizQuestions[];
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: QuizQuestions) => (
                <h4 key={question.name}>
                    <ViewQuizzer question={question}></ViewQuizzer>
                </h4>
            ))}
        </Stack>
    );
}
