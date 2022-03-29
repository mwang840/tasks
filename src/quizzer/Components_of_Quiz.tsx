import React from "react";
import { Stack } from "react-bootstrap";
import { QuizQuestions } from "../QuizzerInterfaces/QuizQuestions";
import { QuizLayout } from "../QuizzerInterfaces/QuizLayout";

export function QuestionList({
    questions
}: {
    questions: QuizQuestions[];
}): JSX.Element {
    return (
        <Stack gap={4}>
            {questions.map((question: QuizQuestions) => (
                <div key={question.name}>
                    {<QuizLayout question={question}></QuizLayout>}
                </div>
            ))}
        </Stack>
    );
}
