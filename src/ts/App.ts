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
            chosen: van.state("html"),
            disabled: false,
        },
            MultipleChoiceEntry({
                id: "lang-html",
                value: "html",
                status: "unknown",
            },
                div({ class: "multiple-choice-entry-letter" }, "A"),
                div("HTML")
            ),
            MultipleChoiceEntry({
                id: "lang-css",
                value: "css",
                status: "unknown",
            },
                div({ class: "multiple-choice-entry-letter" }, "B"),
                div("CSS")
            )
        ),
        MultipleChoice({
            name: "qwerty",
            chosen: van.state("b"),
            disabled: true,
        },
            MultipleChoiceEntry({
                id: "qwerty-a",
                value: "a",
                status: "correct",
            },
                div({ class: "multiple-choice-entry-letter" }, "A"),
                div("Correct Answer")
            ),
            MultipleChoiceEntry({
                id: "qwerty-b",
                value: "b",
                status: "incorrect",
            },
                div({ class: "multiple-choice-entry-letter" }, "B"),
                div("Picked Incorrectly")
            )
        ),
        MultipleChoice({
            name: "asdf",
            chosen: van.state("a"),
            disabled: true,
        },
            MultipleChoiceEntry({
                id: "asdf-a",
                value: "a",
                status: "correct",
            },
                div({ class: "multiple-choice-entry-letter" }, "A"),
                div("Picked Correcly")
            ),
            MultipleChoiceEntry({
                id: "asdf-b",
                value: "b",
                status: "incorrect",
            },
                div({ class: "multiple-choice-entry-letter" }, "B"),
                div("Wrong answer")
            )
        )
    )
}