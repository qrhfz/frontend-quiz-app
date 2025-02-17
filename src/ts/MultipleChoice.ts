import van, { State } from "vanjs-core";
const { div, input, label } = van.tags

type MultipleChoiceProps = {
    name: string,
    chosen: State<string | null>,
    disabled: boolean
}

export function MultipleChoice({
    name,
    chosen,
    disabled }: MultipleChoiceProps,
    ...entries: HTMLLabelElement[]) {

    entries.forEach((e) => {
        const input = e.querySelector('input[type="radio"]');

        if (!(input instanceof HTMLInputElement)) return;

        input.name = name;
        input.disabled = disabled;

        if (input.value === chosen.val) {
            input.checked = true;
        }
    })

    const el = div({
        class: "multiple-choice",
        onchange: (ev) => {
            const input = ev.target;
            if (
                input instanceof HTMLInputElement &&
                input.type === "radio" &&
                input.name === name &&
                input.checked
            ) {
                chosen.val = input.value
            }
        }
    },
        ...entries
    )
    return el;
}

export function MultipleChoiceEntry(
    { id, value }: {
        id: string,
        value: string,
    },
    ...children: HTMLElement[]
) {

    return label({ id },
        input({
            type: "radio",
            value: value,
        }),
        ...children
    )
}

export function QuizAnswer({ id, status, letter, text }: {
    id: string,
    status: "correct" | "incorrect" | "unknown",
    letter: string,
    text: string
}) {

    const entryClasses = ["multiple-choice-entry"]
    if (status === "correct") {
        entryClasses.push("correct");
    } else if (status === "incorrect") {
        entryClasses.push("incorrect");
    }

    const el = MultipleChoiceEntry({
        id,
        value: text,
    },
        div({ class: "multiple-choice-entry-letter" }, letter),
        div(text)
    )

    el.classList.add(...entryClasses);

    return el;
}