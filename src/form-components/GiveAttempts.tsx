import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface givingTrys {
    attempts: number;
    setNumAttempts: (attempts: number) => void;
}

interface Itried {
    attempts: number;
    usedAttempts: () => void;
}

function BottlingAttempt({ attempts, usedAttempts }: Itried): JSX.Element {
    return (
        <Button onClick={usedAttempts} disabled={attempts <= 0}>
            use
        </Button>
    );
}

function BuskyAttempt({ usedAttempts }: Itried): JSX.Element {
    return <Button onClick={usedAttempts}>gain</Button>;
}

function CanISeeAttempt({ attempts, setNumAttempts }: givingTrys): JSX.Element {
    function updateAttempt(event: ChangeEvent) {
        setNumAttempts(parseInt(event.target.value) || 0);
    }
    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attempts}
                    onChange={updateAttempt}
                    style={{
                        width: "fit-content",
                        display: "-ms-inline-flexbox",
                        margin: "auto",
                        textAlign: "center"
                    }}
                />
            </Form.Group>
        </div>
    );
}

export function GiveAttempts(): JSX.Element {
    const [attempts, giveAttempts] = useState<number>(0);
    const [seeAttempts, setRemainAttempts] = useState<number>(3);
    const existingAttempts = () => setRemainAttempts(attempts + seeAttempts);
    const attemptUsed = () => setRemainAttempts(attempts - 1);
    return (
        <div>
            <h3>Give Attempts</h3>
            <CanISeeAttempt
                attempts={attempts}
                setNumAttempts={giveAttempts}
            ></CanISeeAttempt>
            <BottlingAttempt
                attempts={seeAttempts}
                usedAttempts={attemptUsed}
            ></BottlingAttempt>
            <BuskyAttempt
                attempts={seeAttempts}
                usedAttempts={existingAttempts}
            ></BuskyAttempt>
            <div>Currently, there are {seeAttempts} attempts available.</div>
        </div>
    );
}
