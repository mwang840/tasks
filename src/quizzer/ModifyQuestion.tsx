import React, { useState } from "react";
import { Question } from "../interfaces/question";

export function ModifyQuestion({
    question,
    deleteQuestion,
    editQuestion,
    changeEdit
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    changeEdit: () => void;
}): JSX.Element {
    function publishQuestion(question: Question): Question {
        const newQuestion = { ...question, published: !question.published };
        return newQuestion;
    }

    function unpublishQuestion(question: Question): Question {
        const newQuestion = { ...question, published: question.published };
        return newQuestion;
    }
    return <div></div>;
}
