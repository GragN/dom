import Widget from "./widget/widget";
import g from "../img/image.png"

document.addEventListener('DOMContentLoaded', () => {
    const widget = new Widget(document.querySelector('.field'))
    const interval = setInterval(() => {
        widget.move()
    }, 1000)
})