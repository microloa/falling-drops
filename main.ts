input.onButtonPressed(Button.A, function () {
    if (y == 2) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        score += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    score = 0
})
input.onButtonPressed(Button.B, function () {
    paused = 1
    basic.showNumber(score)
})
let paused = 0
let score = 0
let y = 0
y = -1
basic.forever(function () {
    led.unplot(2, y)
    if (y == 4) {
        y = 0
    } else {
        y += 1
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        `)
    led.plot(2, y)
    if (paused == 1) {
        basic.pause(2000)
        paused = 0
    } else {
        basic.pause(100)
    }
})
