input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # # . # #
        . . . . .
        # # . # #
        # # . # #
        . . . . .
        `)
    pins.servoWritePin(AnalogPin.P0, 0)
    basic.pause(5000)
    pins.servoWritePin(AnalogPin.P0, 100)
    basic.clearScreen()
    basic.pause(2000)
})
