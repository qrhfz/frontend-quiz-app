import van from "vanjs-core";
import { Switch } from "./Switch";
import { MultipleChoice, MultipleChoiceEntry } from "./MultipleChoice"

const { div, span, button } = van.tags

export default function App() {
    return div(
        button({ class: "btn-primary" }, "Button Idle"),
        Switch(),
        MultipleChoice({
            name: "lang",
            chosen: van.state(null),
        },
            MultipleChoiceEntry({
                id: "lang-html",
                value: "html",
            },
                div({ class: "multiple-choice-entry-letter" }, "A"),
                div("HTML")
            ),
            MultipleChoiceEntry({
                id: "lang-css",
                value: "css",
            },
                div({ class: "multiple-choice-entry-letter" }, "B"),
                div("CSS")
            )
        ),
        MultipleChoice({
            name: "ab",
            chosen: van.state(null),
        },
            MultipleChoiceEntry({
                id: "iscorrect-correct",
                value: "correct",
                correct: true
            },
                div({ class: "multiple-choice-entry-letter" }, "A"),
                div("correct")
            ),
            MultipleChoiceEntry({
                id: "iscorrect-incorrect",
                value: "incorrect",
                correct: false,
            },
                div({ class: "multiple-choice-entry-letter" }, "B"),
                div("incorrect")
            )
        )
    )
}