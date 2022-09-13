input.onGesture(Gesture.Shake, function () {
    Random_Number = randint(0, 3)
    if (Random_Number == 0) {
        basic.clearScreen()
        basic.showString("Answer Unclear")
    } else if (Random_Number == 1) {
        basic.clearScreen()
        basic.showString("Yes")
    } else {
        basic.clearScreen()
        basic.showString("no")
    }
})
let Random_Number = 0
basic.showString("Ask a Question!")
basic.clearScreen()
basic.showNumber(8)
