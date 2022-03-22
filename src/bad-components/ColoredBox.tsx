import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface changeColorProp {
    changeColor: () => void;
}

interface previews {
    lookAtColor: string;
}

function ChangeColor({ changeColor }: changeColorProp): JSX.Element {
    return <Button onClick={changeColor}>Next Color</Button>;
}

function ColorPreview({ lookAtColor }: previews): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: lookAtColor,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    const switchColor = () => setColorIndex((colorIndex + 1) % COLORS.length);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]} </span>
            <div>
                <ChangeColor changeColor={switchColor}></ChangeColor>
                <ColorPreview lookAtColor={COLORS[colorIndex]}></ColorPreview>
            </div>
        </div>
    );
}
