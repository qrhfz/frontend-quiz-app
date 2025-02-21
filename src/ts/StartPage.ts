import van from "vanjs-core";
import { Switch } from "./Switch"
const { main, header, div, h1, strong, p, ul, li, span, br } = van.tags;

export function StartPage() {
    const quizTitles = [
        "HTML",
        "CSS",
        "Javascript",
        "Accessibility"
    ]

    return div({ class: "container", style: "margin-top: 97px;" },
        header(
            { style: "display: flex; justify-content: end; margin-bottom: 99px;" },
            Switch()
        ),
        main(
            { style: "display: grid; grid-template-columns: repeat(2, 1fr);" },
            div(
                h1({ class: "txt-hl" },
                    "Welcome to the ", br(), strong({ class: "txt-hl-b" }, "Frontend Quiz!")
                ),
                p("Pick a subject to get started."),
            ),
            ul({ class: "vertical-menu" },
                quizTitles.map((t) =>
                    li({ class: "menu-item" }, span({ class: "txt-hs" }, t)))
            )
        )
    )
}