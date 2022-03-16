import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, giveAttempts] = useState<number>(3);
    const [seeAttempts, setRemainAttempts] = useState<string>("");
    const usedAnAttempt = parseInt(seeAttempts) || 0;

    function addAttempt(): void {
        giveAttempts(attempts + usedAnAttempt);
    }

    function dockOffAttempt(): void {
        giveAttempts(attempts - 1);
    }

    return (
        <div>
            <div>
                <h3>Give Attempts</h3>
                <span>Attempts: {attempts}</span>
                <Button onClick={addAttempt}>Gain</Button>
                <Button onClick={dockOffAttempt} disabled={attempts === 0}>
                    Use
                </Button>
            </div>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={seeAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRemainAttempts(event.target.value)
                    }
                />
            </Form.Group>
        </div>
    );
}
