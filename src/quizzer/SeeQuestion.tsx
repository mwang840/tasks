import React from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { QuizQuestions } from "../QuizzerInterfaces/QuizQuestions";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function SeeQuestion({
    question
}: {
    question: QuizQuestions;
}): JSX.Element {
    const [answerChoices, setanswerChoices] = useState<string>(
        question.options[0]
    );
    const [answer, setAnswer] = useState<string>("");
    const choices = question.options;
    function checkAnswer(event: ChangeEvent) {
        setAnswer(event.target.value);
    }
    function matchingAnswer(event: ChangeEvent) {
        setanswerChoices(event.target.value);
    }
    //Organizes questions out
    return (
        <div>
            <h2>{question.name}</h2>
            <div>
                <h3>{question.body}</h3>
                <h4>{"Points" + question.points}</h4>
                <h5>
                    {question.type === "short-answer" ? (
                        <div>
                            <Form.Group controlId="short-answers only">
                                <Form.Label>Check:</Form.Label>
                                <Form.Control
                                    value={answer}
                                    onChange={checkAnswer}
                                />
                            </Form.Group>
                            {answer === question.expected
                                ? "Correct"
                                : "Incorrect"}
                        </div>
                    ) : (
                        <div>
                            <Form.Group controlId="multiple-choice">
                                <Form.Check>
                                    value={answerChoices}
                                    onChange={matchingAnswer}
                                    {choices.map((choice: string) => (
                                        <option
                                            key={choice}
                                            value={choice}
                                        ></option>
                                    ))}
                                </Form.Check>
                            </Form.Group>
                        </div>
                    )}
                </h5>
            </div>
        </div>
    );
}
