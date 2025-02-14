import van from "vanjs-core";
const { div, input, label } = van.tags


type MultipleChoiceEntryProps = {
    id: string,
    value: string,
    child: HTMLElement
}

export function MultipleChoice(params: {
    name: string,
    entries: MultipleChoiceEntryProps[],
    onChange: (v: string) => void
}) {
    const el = div({
        onchange: (ev) => {
            const input = ev.target;
            if (
                input instanceof HTMLInputElement &&
                input.type === "radio" &&
                input.name === params.name &&
                input.checked
            ) {
                params.onChange(input.value);
            }
        }
    },
        params.entries.map(e => MultipleChoiceEntry(
            { name: params.name, ...e }
        ))
    )
    return el;
}

function MultipleChoiceEntry(
    params: MultipleChoiceEntryProps & { name: string }
) {
    return label({
        for: `#${params.id}`,
        class: "choice"
    },
        input({
            id: params.id,
            type: "radio",
            name: params.name,
            value: params.value
        }),
        params.child
    )
}