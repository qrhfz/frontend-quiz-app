import van, {State} from "vanjs-core";

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
    quiz: State<Quiz|null>
    currentQuestionIndex: State<number>
    answers: State<string[]>
    currentAnswerIsCorrect: State<boolean>
    finished: State<boolean>

    constructor(){
        this.quiz = van.state(null);
        this.answers = van.state([]);
        this.currentQuestionIndex = van.state(0);
        this.currentAnswerIsCorrect = van.derive(()=>{
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

        this.finished = van.derive(()=>this.answers.val.length === this.quiz.val?.questions.length);
    }

    reset(){
        this.quiz.val = null;
        this.currentQuestionIndex.val = 0;
        this.answers.val = [];
    }
}

(async ()=>{
    const response = await fetch("/data.json");
    const data: Data = await response.json();
    const appState = new ApplicationState();
})()

