import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(4);
    const [inProgress, setInProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setInProgress(true);
        setNumAttempts(numAttempts - 1);
    }

    function stopQuiz(): void {
        setInProgress(false);
    }

    function mulliganed(): void {
        setNumAttempts(numAttempts + 1);
    }

    return (
        <div>
            <span>setNumAttempts{numAttempts}</span>
            <Button
                disabled={numAttempts === 0 || inProgress === true}
                onClick={startQuiz}
            >
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={inProgress === false}>
                Stop Quiz
            </Button>
            <Button onClick={mulliganed} disabled={inProgress === true}>
                Mulligan
            </Button>
        </div>
    );
}
