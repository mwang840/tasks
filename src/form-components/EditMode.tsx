import React, { useState } from "react";
import { Form } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;
interface modes {
    mode: boolean;
    setMode: (mode: boolean) => void;
}

interface yourName {
    name: string;
    setName: (name: string) => void;
}

interface student {
    isAStudent: boolean;
    setStudent: (isAStudent: boolean) => void;
}

function SwitchMode({ mode, setMode }: modes): JSX.Element {
    function updateMode(event: ChangeEvent) {
        setMode(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-mode-check"
                label="Edit Mode?"
                checked={mode}
                onChange={updateMode}
                style={{
                    margin: "auto",
                    width: "fit-content"
                }}
            />
            <div>The user is {mode ? "in edit mode" : "not in edit mode"}.</div>
        </div>
    );
}

function EditNames({ name, setName }: yourName): JSX.Element {
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formName">
                <Form.Label>Enter Name:</Form.Label>
                <Form.Control
                    value={name}
                    onChange={updateName}
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

function Student({ isAStudent, setStudent }: student): JSX.Element {
    function checkStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="checkbox"
                id="is-student-check"
                label="Student?"
                checked={isAStudent}
                onChange={checkStudent}
                style={{
                    margin: "auto",
                    width: "fit-content"
                }}
            />
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [username, setUserName] = useState<string>("Your Name is a student");
    const [student, setIsStudent] = useState<boolean>(true);
    const [editing, setIsEditing] = useState<boolean>(false);

    return (
        <div>
            <h3>Edit Mode</h3>
            <SwitchMode mode={editing} setMode={setIsEditing}></SwitchMode>
            {editing && (
                <div>
                    <EditNames
                        name={username}
                        setName={setUserName}
                    ></EditNames>
                    <Student
                        isAStudent={student}
                        setStudent={setIsStudent}
                    ></Student>
                </div>
            )}
            {username} is {student ? "" : "not"} a student.
        </div>
    );
}
