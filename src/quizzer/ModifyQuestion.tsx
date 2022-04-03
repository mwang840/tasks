import React, { useState } from "react";
import { Question } from "../interfaces/question";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

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
    return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="formQuestionBody" as={Row}>
                        <Form.Label column sm={2}>
                            Body:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={bodies}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setBodies(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group controlId="formQuestionExpected" as={Row}>
                        <Form.Label column sm={2}>
                            Expected:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                value={actual}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) => setActual(event.target.value)}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-Published-check"
                        label="Publish?"
                        checked={publish}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setPublish(event.target.checked)}
                        style={{
                            margin: "auto",
                            width: "fit-content"
                        }}
                    />
                    <Form.Group controlId="formQuestionPoints" as={Row}>
                        <Form.Label column sm={2}>
                            Points:
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="number"
                                value={points}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                    setPoints(parseInt(event.target.value) || 0)
                                }
                            />
                        </Col>
                    </Form.Group>
                    <Button
                        onClick={saveProgress}
                        variant="success"
                        className="me-4"
                    >
                        Save
                    </Button>
                    <Button
                        onClick={dontSave}
                        variant="warning"
                        className="me-5"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => deleteQuestion(question.id)}
                        variant="danger"
                        className="me-8"
                    >
                        Delete
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}
