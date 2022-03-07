import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holidays = "HAL" | "CHR" | "NYD" | "CNY" | "EAS";

const holidayInAlphaOrder: Record<Holidays, Holidays> = {
    CNY: "NYD",
    CHR: "CNY",
    EAS: "CHR",
    HAL: "EAS",
    NYD: "HAL"
};

const yearInOrder: Record<Holidays, Holidays> = {
    CNY: "EAS",
    CHR: "NYD",
    EAS: "HAL",
    HAL: "CHR",
    NYD: "CNY"
};

export function CycleHoliday(): JSX.Element {
    const [Holidays, setHoliday] = useState<Holidays>("HAL");

    function nextByLetter(): void {
        setHoliday(holidayInAlphaOrder[Holidays]);
    }

    function nextByDate(): void {
        setHoliday(yearInOrder[Holidays]);
    }

    return (
        <div>
            <Button onClick={nextByLetter}>Advance by Alphabet</Button>
            <Button onClick={nextByDate}>Advance by Year</Button>
            <div>
                {Holidays === "CHR" ? (
                    <span>Holiday: 🎄</span>
                ) : Holidays === "HAL" ? (
                    <span>Holiday: 🎃</span>
                ) : Holidays === "NYD" ? (
                    <span>Holiday:🧨</span>
                ) : Holidays === "EAS" ? (
                    <span>Holiday: 🐰</span>
                ) : Holidays === "CNY" ? (
                    <span>Holiday: 🧧</span>
                ) : (
                    <span></span>
                )}
            </div>
        </div>
    );
}
