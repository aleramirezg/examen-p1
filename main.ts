basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Surprised)
    basic.pause(1000)
})
