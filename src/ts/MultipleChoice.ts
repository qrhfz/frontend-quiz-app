import van, {State} from "vanjs-core";
const { div, input, label } = van.tags

export function MultipleChoice(params: {
    name: string,
    chosen: State<string|null>
}, ...entries:HTMLLabelElement[]) {
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
        ...entries
    )
    return el;
}

export function MultipleChoiceEntry(
    params: {
        id: string,
        name: string
        value: string,
    }, 
    ...children: HTMLElement[]
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
    ...children
    )
}