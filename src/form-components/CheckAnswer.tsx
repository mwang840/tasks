import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface AnswerProps {
    setAns: (newAns: string) => void;
    ans: string;
}

function UserAnswer({ ans, setAns }: AnswerProps): JSX.Element {
    function updateAns(event: ChangeEvent) {
        setAns(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={ans}
                    onChange={updateAns}
                    style={{
                        width: "fit-content",
                        display: "-ms-inline-flexbox",
                        margin: "auto",
                        textAlign: "center"
                    }}
                />
            </Form.Group>
            <div>The entered answer is {ans}.</div>
        </div>
    );
}

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setAns] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <UserAnswer ans={ans} setAns={setAns}></UserAnswer>
            {ans === expectedAnswer ? <span>✔️</span> : <span>❌</span>}
        </div>
    );
}
