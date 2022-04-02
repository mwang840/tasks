import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export function Checklist(): JSX.Element {
    return (
        <div>
            <h4>Task 11 Checklist</h4>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>✔️Sketch Application </li>
                            <li>✔️Quizzes are Visible | Test: ✔️</li>
                            <li>
                                ✔️Short Answer and Multiple Choice | Test: ✔️
                            </li>
                            <li>✔️Check Correctness | Test: ✔️</li>
                            <li>✔️Sum Points | Test: ✔️</li>
                            <li>✔️Clear Answers | Test ✔️:</li>
                            <li>✔️Delete Quizzes | Test: ✔️</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul>
                            <li>✔️Publish Questions | Test: ✔️</li>
                            <li>✔️Filter Questions | Test: ✔️</li>
                            <li>✔️Edit Questions | Test: ✔️</li>
                            <li>✔️Add Questions | Test: ✔️</li>
                            <li>✔️Delete Questions | Test: ✔️</li>
                            <li>✔️Reorder Questions | Test: ✔️</li>
                            <li>✔️Add Quizzes | Test: ✔️</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
