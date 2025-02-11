import van, { State } from "vanjs-core";

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

class ApplicationState {
    data: Data
    quiz: State<Quiz | null>
    currentQuestionIndex: State<number>
    answers: State<string[]>
    hasSubmittedCurrentAnswer: State<boolean>
    currentAnswerIsCorrect: State<boolean>
    finished: State<boolean>

    constructor(data: Data) {
        this.data = data;

        this.quiz = van.state(null);
        this.answers = van.state([]);
        this.currentQuestionIndex = van.state(0);

        this.hasSubmittedCurrentAnswer = van.derive(() => {
            if (this.answers.val.length - 1 === this.currentQuestionIndex.val) {
                return true;
            }

            return false;
        })

        this.currentAnswerIsCorrect = van.derive(() => {
            const currentAnswer = this.answers.val[this.currentQuestionIndex.val];
            const correctAnswer = this.quiz.val?.questions[this.currentQuestionIndex.val].answer;
            if (correctAnswer === undefined) {
                return false;
            }

            if (currentAnswer === correctAnswer) {
                return true;
            }

            return false
        });

        this.finished = van.derive(() => this.answers.val.length === this.quiz.val?.questions.length);
    }

    reset() {
        this.quiz.val = null;
        this.currentQuestionIndex.val = 0;
        this.answers.val = [];
    }

    selectQuiz(title: string) {
        const quiz = this.data.quizzes.find((q) => q.title === title);
        if (!quiz) {
            console.error(`can't find quiz with title "${title}"`);
            return;
        }
        this.quiz.val = quiz;
    }
}

(async () => {
    const response = await fetch("/data.json");
    const data: Data = await response.json();
    const appState = new ApplicationState(data);
})()

