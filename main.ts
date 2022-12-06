let 播放 = 0
input.onButtonPressed(Button.A, function () {
    播放 = 1
    music.startMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    播放 = 0
    music.stopMelody(MelodyStopOptions.All)
})
basic.forever(function () {
    if (播放) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . # . #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.EigthNote)
    }
})
