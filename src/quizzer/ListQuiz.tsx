import React from "react";
import { Stack } from "react-bootstrap";
import { QuizLayout } from "../QuizzerInterfaces/QuizLayout";
import { ViewQuizzer } from "./ViewQuizzer";

export function QuizList({ quizzes }: { quizzes: QuizLayout[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: QuizLayout) => (
                <div key={quiz.title}>
                    <ViewQuizzer quiz={quiz}></ViewQuizzer>
                </div>
            ))}
        </Stack>
    );
}
