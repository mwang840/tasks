import React from "react";
import { Stack } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { SeeQuestion } from "./SeeQuestion";

export function QuestionList({
    questions,
    increasePoints,
    showUnpub
}: {
    questions: Question[];
    increasePoints: (addedP: number) => void;
    showUnpub: boolean;
}): JSX.Element {
    return (
        <Stack gap={3}>
            {questions.map((question: Question) => (
                <div key={question.id} className="bg-light border m-2 p-2">
                    <SeeQuestion
                        question={question}
                        increasePoints={increasePoints}
                        showUnpub={showUnpub}
                    ></SeeQuestion>
                </div>
            ))}
        </Stack>
    );
}
