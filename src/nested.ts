import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const publish = questions.filter(
        (question: Question): boolean => question.published === true
    );
    return publish;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const fuller = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length !== 0
    );
    return fuller;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const aQuestion = questions.filter(
        (questions: Question): boolean => questions.id === id
    );
    if (aQuestion.length === 0) {
        return null;
    }
    return aQuestion[0];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const noId = questions.filter(
        (question: Question): boolean => question.id !== id
    );
    return noId;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const names = questions.map((question: Question): string => question.name);
    return names;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const totalPoints = questions.reduce(
        (totalSum: number, question: Question) => totalSum + question.points,
        0
    );
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const points = questions.filter(
        (questions: Question): boolean => questions.published === true
    );
    const siuuu = points.reduce(
        (totalLegitSum: number, points: Question) =>
            totalLegitSum + points.points,
        0
    );
    return siuuu;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const header = "id,name,options,points,published\n";
    const csv = questions.map(
        (question: Question): string =>
            `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
    );
    const stringCsv = csv.join("\n");
    return header + stringCsv;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            correct: false,
            submitted: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const allPublish = questions.map(
        (question: Question): Question => ({
            ...question,
            published: true
        })
    );
    return allPublish;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const types = questions.filter(
        (question: Question) => question.type === "short_answer_question"
    );
    return types.length === questions.length || types.length === 0
        ? true
        : false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const blankAtEnd = [...questions, makeBlankQuestion(id, name, type)];
    return blankAtEnd;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    //const iChanged = { ...questions };
    //Will use a ternary
    const clonedQuestion = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const idFound = clonedQuestion.some(
        (question: Question): boolean => question.id === targetId
    );
    //const foundSameQuestion = clonedQuestion.find(
    //  (question: Question): boolean => question.id === targetId
    //);
    if (idFound) {
        const gottEm = clonedQuestion.filter(
            (question: Question): boolean => question.id === targetId
        );
        gottEm[0].name = newName;
    }
    return clonedQuestion;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const aQuestion = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const copyOptions = aQuestion.map((question: Question): Question => {
        if (question.id === targetId) {
            question.type = newQuestionType;
            if (newQuestionType === "short_answer_question") {
                question.options = [];
            }
        }
        return question;
    });

    return copyOptions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    let edits;
    //Checks to see if the target index is -1, then is added to the end of the list
    if (targetOptionIndex === -1) {
        edits = questions.map(
            (question: Question): Question =>
                question.id === targetId
                    ? { ...question, options: [...question.options, newOption] }
                    : { ...question }
        );
    } else {
        edits = questions.map(
            (question: Question): Question =>
                helpOutOption(question, targetId, targetOptionIndex, newOption)
        );
    }
    return edits;
}

//Gives edit Option a hand when the index is not negative
function helpOutOption(
    questions: Question,
    targetId: number,
    targetOptionIndex: number,
    newOption: string
) {
    let helpOut;
    //let helpOut = questions.map((question:Question):Question=>());
    //If the id matches the ID, replace the index with that question!
    if (questions.id === targetId) {
        helpOut = { ...questions, options: [...questions.options] };
        helpOut.options.splice(targetOptionIndex, 1, newOption);
    } else {
        helpOut = { ...questions };
    }
    return helpOut;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const cloning = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const getIndex = cloning.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const cloned = duplicateQuestion(newId, cloning[getIndex]);
    cloning.splice(getIndex + 1, 0, cloned);
    return cloning;
}
