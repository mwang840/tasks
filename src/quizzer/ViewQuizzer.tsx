import React, { useState } from "react";
import { Question } from "../interfaces/question";
import { Answer } from "../interfaces/answer";

export function ModifyQuestion({
    question,
    deleteQuestion,
    editQuestion,
    alterEdit
}: {
    question: Question;
    deleteQuestion: (id: number) => void;
    editQuestion: (id: number, newQuestion: Question) => void;
    alterEdit: () => void;
}): JSX.Element {
    const [bodies, setBodies] = useState<string>(question.body);
    const [actual, setActual] = useState<string>(question.expected);
    const [publish, setPublish] = useState<boolean>(question.published);
    const [answer, setAnswer] = useState<string>(question.expected);
    const [points, setPoints] = useState<number>(question.points);

    function saveProgress() {
        editQuestion(question.id, {
            ...question,
            body: bodies,
            expected: actual,
            published: publish,
            points: points
        });
        alterEdit();
    }

    function dontSave() {
        alterEdit();
    }

    function startOver() {
        return;
    }

    function publishQuestion(question: Question): Question {
        const newQuestion = { ...question, published: !question.published };
        return newQuestion;
    }

    function unpublishQuestion(question: Question): Question {
        const newQuestion = { ...question, published: question.published };
        return newQuestion;
    }
    function isCorrect(question: Question, answer: string): boolean {
        return (
            answer.toLowerCase().trim() ===
            question.expected.toLowerCase().trim()
        );
    }
    function removeQuestion(id: string) {
        setBodies(
            bodies.filter((question: Question): boolean => question.id !== id)
        );
    }

    return <div></div>;
}
