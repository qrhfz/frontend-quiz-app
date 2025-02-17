import van from "vanjs-core";
import { Switch } from "./Switch";
import { MultipleChoice, QuizAnswer } from "./MultipleChoice"

const { div, span, button } = van.tags

export default function App() {
    return div(
        button({ class: "btn-primary" }, "Button Idle"),
        Switch(),
        MultipleChoice({
            name: "lang",
            chosen: van.state("html"),
            disabled: false,
        },
            QuizAnswer({
                id: "lang-html",
                status: "unknown",
                letter: "A",
                text: "HTML"
            }),
            QuizAnswer({
                id: "lang-css",
                status: "unknown",
                letter: "B",
                text: "CSS"
            }),
        ),
        MultipleChoice({
            name: "qwerty",
            chosen: van.state("Picked Incorrectly"),
            disabled: true,
        },
            QuizAnswer({
                id: "qwerty-a",
                status: "correct",
                letter: "A",
                text: "Correct Answer"
            }),
            QuizAnswer({
                id: "qwerty-b",
                status: "incorrect",
                letter: "B",
                text: "Picked Incorrectly"
            })
        ),
        MultipleChoice({
            name: "asdf",
            chosen: van.state("Picked Correctly"),
            disabled: true,
        },
            QuizAnswer({
                id: "asdf-a",
                status: "correct",
                letter: "A",
                text: "Picked Correctly"
            }),
            QuizAnswer({
                id: "asdf-b",
                status: "incorrect",
                letter: "B",
                text: "Wrong answer"
            })
        )
    )
}