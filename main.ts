input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index + 5)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index <= 9; index++) {
        basic.showNumber((index + 1) * 2)
    }
})
for (let index = 0; index <= 9; index++) {
    basic.showNumber(index)
    basic.pause(100)
}
