import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <h1>Published by a Sophmore Student</h1>
            </header>

            <img
                src="https://pm1.narvii.com/6991/10f3d752607b0b6a188c8cc72170a5cdc09c1aa5r1-1080-943v2_hq.jpg"
                alt="Mr.Diktovitch needs rent!"
                height="100"
                width="100"
            />
            <p>Hello World</p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        {" "}
                        Bully Maguire
                        <div
                            style={{
                                width: "80px",
                                height: "20px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>{" "}
                    <Col>
                        {" "}
                        Bully Garfield
                        <div
                            style={{
                                width: "80px",
                                height: "20px",
                                alignContent: "center",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <ul>
                <li>Tottenham</li>
                <li>Chelsea</li>
                <li>Arsenal</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Maxwell Wang.</p>
        </div>
    );
}

export default App;
