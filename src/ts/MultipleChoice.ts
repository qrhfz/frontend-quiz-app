import van, { State } from "vanjs-core";
const { div, input, label } = van.tags

export function MultipleChoice(params: {
    name: string,
    chosen: State<string | null>
}, ...entries: HTMLLabelElement[]) {
    const el = div({
        class: "multiple-choice",
        onchange: (ev) => {
            const input = ev.target;
            if (
                input instanceof HTMLInputElement &&
                input.type === "radio" &&
                input.name === params.name &&
                input.checked
            ) {
                params.chosen.val = input.value
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
        name: string
        value: string,
        correct?: boolean,
    },
    ...children: HTMLElement[]
) {
    const { id, name, value, correct } = params;
    const radio = input({
        id: id,
        type: "radio",
        name: name,
        value: value
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