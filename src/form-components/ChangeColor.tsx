import React, { useState } from "react";
import { Form, FormLabel } from "react-bootstrap";
type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;
const COLORS = [
    "red",
    "blue",
    "green",
    "yellow",
    "navy blue",
    "orange",
    "purple",
    "black",
    "white",
    "brown"
];

export function ChangeColor(): JSX.Element {
    const [choice, setChoice] = useState<string>(COLORS[0]);
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                The current color is{""}
                <span style={{ backgroundColor: choice, color: "white" }}>
                    {choice}
                </span>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChoice(event.target.value)}
                    />
                ))}
            </div>
        </div>
    );
}
