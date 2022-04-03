import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuizLayout } from "../QuizzerInterfaces/QuizLayout";

export function Describe({ quiz }: { quiz: QuizLayout }): JSX.Element {
    const [description, setDescription] = useState<string>(quiz.description);

    function adjustDescription(): void {
        description === quiz.description
            ? setDescription(quiz.description.substring(0, 12) + "...")
            : quiz.description;
        console.log(description + ", " + quiz.description);
    }

    return (
        <div>
            <span>{description}</span>
            <br />
            <Button onClick={adjustDescription}>More/Less</Button>
        </div>
    );
}
