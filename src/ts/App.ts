import van from "vanjs-core";
import Switch from "./Switch";

const {div, button} = van.tags

export default function App() {
    return div(
        button({class:"btn-primary"}, "Button Idle"),
        Switch()
    )
}