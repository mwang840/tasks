import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Question } from "../interfaces/question";

export function EditMode({
    question,
    deleteQuestion,
    editQuestion,
    editMode
}: {
    question: Question;
    deleteQuestion: (name: string) => void;
    editQuestion: (name: string, newQuestion: Question) => void;
    editMode: () => void;
}): JSX.Element {
    const [name, setName] = useState<string>(question.name);
    const [body, setBody] = useState<string>(question.body);
    const [correctAnswer, setCorrectAnswer] = useState<string>(
        question.expected
    );
    const [numPoints, setNumPoints] = useState<string>(
        question.points.toString()
    );

    function save(): void {
        editQuestion(question.name, {
            ...question,
            name: name,
            body: body,
            points: parseInt(numPoints),
            expected: correctAnswer
        });
        editMode();
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form.Group as={Row}>
                            <Form.Label>Question Name</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setName(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Body</Form.Label>
                            <Form.Control
                                value={body}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setBody(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label># of Points</Form.Label>
                            <Form.Control
                                value={numPoints}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setNumPoints(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label>Correct Answer</Form.Label>
                            <Form.Control
                                value={correctAnswer}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setCorrectAnswer(event.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Button onClick={save}>Save</Button>
                    <Button onClick={() => deleteQuestion(question.name)}>
                        Delete
                    </Button>
                </Row>
            </Container>
        </div>
    );
}
