import React, { useState } from "react";
import { Question } from "../interfaces/question";
import { Form, Button, Row, Col } from "react-bootstrap";

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

    function publishQuestion(question: Question): Question {
        const newQuestion = { ...question, published: !question.published };
        return newQuestion;
    }

    function unpublishQuestion(question: Question): Question {
        const newQuestion = { ...question, published: question.published };
        return newQuestion;
    }
    return (
        <div>
            <Form.Group controlId="question-layout"></Form.Group>
        </div>
    );
}
