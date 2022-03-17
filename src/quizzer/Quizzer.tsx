import React, { useState } from "react";
import Button from "react-bootstrap";
export function ShowHideTasks(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <div>
            {visible && <div></div>}
            <Button onClick={() => setVisible(!visible)}>Show/Hide</Button>
        </div>
    );
}

export function Quizzer(): JSX.Element {
    return <h3>Quizzer</h3>;
}
