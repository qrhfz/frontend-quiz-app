import van, {State} from "vanjs-core";
const { div, input, label } = van.tags


type MultipleChoiceEntryProps = {
    id: string,
    value: string,
    child: HTMLElement,
}

export function MultipleChoice(params: {
    name: string,
    chosen: State<string|null>
    entries: MultipleChoiceEntryProps[],
}) {
    const el = div({
        class:"multiple-choice",
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
        params.entries.map(e => MultipleChoiceEntry(
            { name: params.name, ...e }
        ))
    )
    return el;
}

function MultipleChoiceEntry(
    params: MultipleChoiceEntryProps & { name: string }
) {

    const radio = input({
        id: params.id,
        type: "radio",
        name: params.name,
        value: params.value
    });
    return label({
        for: `#${params.id}`,
        class: "multiple-choice-entry",
        onclick: ()=>{
            radio.checked = true;
        }
    },
        radio,
        params.child
    )
}