import React, { useState } from "react";
import { Question, QuestionType } from "../interfaces/question";

export function ModifyQuestion(): JSX.Element {
    function publishQuestion(question: Question): Question {
        const newQuestion = { ...question, published: !question.published };
        return newQuestion;
    }

    function unpublishQuestion(question: Question): Question {
        const newQuestion = { ...question, published: question.published };
        return newQuestion;
    }
    return <div></div>;
}
