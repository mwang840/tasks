import React, { useState } from "react";
import { Form, FormLabel } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [username, setUserName] = useState<string>("Your Name");
    const [student, setIsStudent] = useState<boolean>(true);
    const [editing, setIsEditing] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUserName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Editing:"
                    checked={editing}
                    onChange={() => setIsEditing(!editing)}
                ></Form.Check>
            </div>
            <div>
                {editing ? (
                    <Form.Group controlId="formPersonName">
                        <Form.Label>Name: </Form.Label>
                        <Form.Control value={username} onChange={updateName} />
                    </Form.Group>
                ) : (
                    <div>
                        <span>{username}</span>
                        {student ? " is a student" : " is not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
