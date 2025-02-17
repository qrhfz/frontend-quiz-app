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
    params: {
        id: string,
        value: string,
        correct?: boolean,
    },
    ...children: HTMLElement[]
) {
    const { value, correct } = params;
    const radio = input({
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
        class: labelClasses.join(" "),
    },
        radio,
        ...children
    )
}