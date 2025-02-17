import van, { State } from "vanjs-core";
const { div, input, label } = van.tags

type MultipleChoiceProps = {
    name: string,
    chosen: State<string | null>,
}

export function MultipleChoice({
    name,
    chosen }: MultipleChoiceProps,
    ...entries: HTMLLabelElement[]) {

    entries.forEach((e) => {
        const input = e.querySelector('input[type="radio"]');

        if (!(input instanceof HTMLInputElement)) return;

        input.name = name;
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
    params: {
        id: string,
        value: string,
        correct?: boolean,
    },
    ...children: HTMLElement[]
) {
    const { id, value, correct } = params;
    const radio = input({
        id: id,
        type: "radio",
        value: value,
    });

    const labelClasses = ["multiple-choice-entry"]
    if (correct) {
        labelClasses.push("correct");
    } else if (correct === false) {
        labelClasses.push("incorrect");
    }

    return label({
        for: `#${id}`,
        class: labelClasses.join(" "),
        onclick: () => {
            radio.checked = true;
        }
    },
        radio,
        ...children
    )
}