import React from "react";
import { Stack } from "react-bootstrap";
import { QuizLayout } from "../QuizzerInterfaces/QuizLayout";
import { QuizView } from "./QuizView";

export function QuizList({ quizzes }: { quizzes: QuizLayout[] }): JSX.Element {
    return (
        <Stack gap={3}>
            {quizzes.map((quiz: QuizLayout) => (
                <div key={quiz.title}>
                    <QuizView quiz={quiz}></QuizView>
                </div>
            ))}
        </Stack>
    );
}
