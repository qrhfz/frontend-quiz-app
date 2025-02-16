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
            chosen: van.state(null)
        },
            MultipleChoiceEntry({
                name: "lang",
                id: "lang-html",
                value: "html",
            },
                div({ class: "multiple-choice-entry-letter" }, "A"),
                div("HTML")
            ),
            MultipleChoiceEntry({
                name: "lang",
                id: "lang-css",
                value: "css",
            },
                div({ class: "multiple-choice-entry-letter" }, "A"),
                div("CSS")
            )
        )
    )
}