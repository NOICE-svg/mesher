namespace mesher {
    let LastID = 0
    let started = false

    /**
     * Start the Mesher radio relay
     * @param RadioGroup radio group to use
     */
    //% block="Star Mesher %RadioGroup"
    //% RadioGroup.min=0 RadioGroup.max=255
    //% RadioGroup.defl=1
    //% blockId=mesher_start
    //% weight=100
    export function start(RadioGroup: number): void {
        if (started) {
            return
        }

        started = true
        LastID = 0

        radio.setGroup(RadioGroup)

        radio.onReceivedValue(function (name, value) {
            if (value > LastID) {
                radio.sendValue(name, value)
                LastID = value
            }
        })
    }
}
