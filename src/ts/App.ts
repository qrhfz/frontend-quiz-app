import van from "vanjs-core";
import { Switch } from "./Switch";
import { MultipleChoice } from "./MultipleChoice"

const { div, span, button } = van.tags

export default function App() {
    return div(
        button({ class: "btn-primary" }, "Button Idle"),
        Switch(),
        MultipleChoice({
            name: "lang",
            entries: [
                {
                    id: "lang-html",
                    value: "html",
                    child: span("HTML")
                },
                {
                    id: "lang-css",
                    value: "css",
                    child: span("CSS")
                },
            ],
            onChange: (v) => {
                console.log(v)
            }
        })
    )
}