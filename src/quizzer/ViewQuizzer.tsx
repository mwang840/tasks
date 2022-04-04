import React, { useState } from "react";
import { Container, Row, Button, Col, Form } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { EditMode } from "./ModifyQuestion";

export function ViewQuizzer({
    question,
    deleteQuestion,
    editQuestion
}: {
    question: Question;
    deleteQuestion: (name: string) => void;
    editQuestion: (name: string, newQuestion: Question) => void;
}): JSX.Element {
    const [isEditing, setMode] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");

    function editMode() {
        setMode(!isEditing);
    }

    function clearAnswer() {
        setAnswer("");
    }

    function changeAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            {isEditing ? (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <EditMode
                                    question={question}
                                    deleteQuestion={deleteQuestion}
                                    editQuestion={editQuestion}
                                    editMode={editMode}
                                ></EditMode>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </div>
            ) : (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <h3>{question.name}</h3>
                                <Row>
                                    <Col>
                                        <span>{question.body}</span>
                                    </Col>
                                    <Col>
                                        <span>
                                            {question.points} {"Points"}
                                        </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Form.Group as={Row}>
                                        <Form.Label>Answer: </Form.Label>
                                        <Form.Control
                                            value={answer}
                                            onChange={changeAnswer}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Col>
                                        {answer === question.expected ? (
                                            <span>Lets go!</span>
                                        ) : (
                                            <span></span>
                                        )}
                                    </Col>
                                    <Col>
                                        <Button onClick={clearAnswer}>
                                            Clear Answer
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col>
                                <Button>Submit</Button>
                                <br />
                                <Button onClick={editMode}>
                                    Edit Question
                                </Button>
                            </Col>
                        </Row>
                        <hr />
                    </Container>
                </div>
            )}
        </div>
    );
}
