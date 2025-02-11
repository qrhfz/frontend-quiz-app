import van from "vanjs-core";
import {State} from "vanjs-core";

type Data = {
    quizzes: Quiz[]
}

type Quiz = {
    title: string,
    icon: string,
    questions: Question[]
}

type Question = {
    question: string,
    options: string[],
    answer: string
}

type QuizRun = {
    quiz: Quiz,
    currentQuestionIndex: number,
    answers: string[],
    areCorrect: boolean[],
    finished: boolean
}

(async ()=>{
    const response = await fetch("/data.json");
    const data: Data = await response.json();
})()

