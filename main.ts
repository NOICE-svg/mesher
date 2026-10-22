let LastID = 0
function Mesher (RadioGroup: number) {
    radio.setGroup(RadioGroup)
}
radio.onReceivedValue(function (name, value) {
    if (value > LastID) {
        radio.sendValue(name, value)
        LastID = value
    }
})
basic.forever(function () {
	
})
