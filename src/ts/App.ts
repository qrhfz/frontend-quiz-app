import van from "vanjs-core";

const {div, button, input} = van.tags

export default function App() {
    return div(
        button({class:"btn-primary"}, "Button Idle"),
        Switch()
    )
}

function Switch(props?:any){
    const checkbox = input({type:"checkbox",...props});

    return div({class:"switch"},
        checkbox,
        div({
            class:"switch-look",
            onclick: ()=>{
                checkbox.click();
            }},
            div({class:"switch-circle"})
        )
    )
}