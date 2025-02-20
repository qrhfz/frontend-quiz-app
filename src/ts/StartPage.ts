import van from "vanjs-core";

const { div, h1, strong, p, ul, li, span, br } = van.tags;

export function StartPage() {
    const quizTitles = [
        "HTML",
        "CSS",
        "Javascript",
        "Accessibility"
    ]

    return div(
        h1({ class: "txt-hl" },
            "Welcome to the ", br(), strong({ class: "txt-hl-b" }, "Frontend Quiz!")
        ),
        p("Pick a subject to get started."),
        ul({ style: "padding:0; display: flex: flex-direction: column; gap: 24px;" },
            quizTitles.map((t) =>
                li({ class: "list-tile" }, span({ class: "txt-hs" }, t)))
        )
    )
}