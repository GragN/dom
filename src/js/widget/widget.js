export default class Widget {
  constructor(element) {
    this.element = element
    this.counter = [undefined, undefined]
}

getRandomInt() {
    const number = Math.floor(Math.random() * this.element.querySelectorAll('.field-item').length)
    if (number != this.counter[0]) {
        this.counter[1] = this.counter[0]
        this.counter[0] = number
        return this.counter
    } else {
        return this.getRandomInt()
    }
  }

move() {
    this.getRandomInt()
    const item = this.element.querySelectorAll('.field-item')
    item[this.counter[0]].style.backgroundImage = 'url("image.png")'
    item[this.counter[1]].style.backgroundImage = ""
}
}
