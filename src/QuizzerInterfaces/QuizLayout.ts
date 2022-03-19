import { QuizQuestions } from "./QuizQuestions";

export interface Quiz {
    title: string; //quiz name
    description: string; //what quiz is on
    totalQuestions: number; //total Amt of questions
    questions: QuizQuestions[]; //the actual questions in the quiz
}
